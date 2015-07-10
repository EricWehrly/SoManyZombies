﻿using FluentAssertions;
using NUnit.Framework;
using ClientScript;
using SMZLib;

namespace ClientScriptTests.FullAgentFunctions
{
    public class FullAgentInputTests
    {
        private Character _localPlayer;
        private const int TestTileHeight = 40;
        private const int TestTileWidth = 40;
        private const int TestScreenWidth = 1920;
        private const int TestScreenHeight = 1080;

        [SetUp]
        public void SetUp()
        {
            ZombieGameClientScript.ClearCharacters();
            ZombieGameClientScript.CreateCharacter();

            _localPlayer = ZombieGameClientScript.Characters[0];
        }

        [Test]
        public void PressingWMovesLocalPlayerUp()
        {
            _localPlayer.Position = new Point(0, 10);

            var keyCode = 87;

            PlayerInput.ProcessPlayerKeyboardInput(keyCode, true);

            HeartBeat.PhysicsLoop();

            ZombieGameClientScript.Characters[0].Destination.Y.Should().Be(11);
        }

        [Test]
        public void KeepingAPressedContinuesMovingPlayerLeft()
        {
            _localPlayer.Position = new Point(5, 0);

            var keyCode = 65;

            PlayerInput.ProcessPlayerKeyboardInput(keyCode, true);

            HeartBeat.PhysicsLoop();

            HeartBeat.PhysicsLoop();

            ZombieGameClientScript.Characters[0].Destination.X.Should().Be(3);
        }

        // Works fine when ran by itself, not when ran grouped...
        [Test]
        public void ReleasingSStopsMovingDown()
        {
            _localPlayer.Position = new Point(5, 10);

            var keyCode = 83;

            PlayerInput.ProcessPlayerKeyboardInput(keyCode, true);

            HeartBeat.PhysicsLoop();

            PlayerInput.ProcessPlayerKeyboardInput(keyCode, false);

            HeartBeat.PhysicsLoop();

            ZombieGameClientScript.Characters[0].Destination.Y.Should().Be(9);
        }

        [Test]
        public void PlayerMovesFromZeroPosition()
        {
            _localPlayer.Position = new Point(0, 0);

            var keyCode = 68;

            PlayerInput.ProcessPlayerKeyboardInput(keyCode, true);

            HeartBeat.PhysicsLoop();

            HeartBeat.PhysicsLoop();

            ZombieGameClientScript.Characters[0].Destination.X.Should().Be(2);
        }

        [Test]
        public void WillStopWhenReachingDestination()
        {
            _localPlayer.Position = new Point(17, 17);

            _localPlayer.Destination = new Point(17, 17);

            HeartBeat.PhysicsLoop();

            _localPlayer.Position.X.Should().Be(17);

            _localPlayer.Position.Y.Should().Be(17);
        }

        [Test]
        public void PlayerCantMoveToNegativeSpace()
        {
            _localPlayer.Position = new Point(0, 0);

            var keyCode = 65;

            PlayerInput.ProcessPlayerKeyboardInput(keyCode, true);

            HeartBeat.PhysicsLoop();

            ZombieGameClientScript.Characters[0].Destination.X.Should().Be(0);
        }

        [Test]
        public void PlayerClicksMouseInFrontOfPlayer()
        {
            _localPlayer.Position = new Point(5, 5);

            var x = 10 * TestTileWidth;

            PlayerInput.ProcessPlayerMouseInput(0, x, 0, true);

            _localPlayer.Destination.X.Should().Be(10);
        }

        [Test]
        public void PlayerClicksMouseBehindPlayer()
        {
            _localPlayer.Position = new Point(10, 10);

            var x = 5 * TestTileWidth;

            PlayerInput.ProcessPlayerMouseInput(0, x, 0, true);

            ZombieGameClientScript.Characters[0].Destination.X.Should().Be(5);
        }

        [Test]
        public void PlayerClicksMouseBelowPlayer()
        {
            var expectedY = 0;

            _localPlayer.Position = new Point(10, 10);

            PlayerInput.ProcessPlayerMouseInput(0, 0, TestScreenHeight, true);

            ZombieGameClientScript.Characters[0].Destination.Y.Should().Be(expectedY);
        }

        [Test]
        public void PlayerClicksMouseAbovePlayer()
        {
            var expectedY = TestScreenHeight/TestTileHeight;

            _localPlayer.Position = new Point(10, 10);

            PlayerInput.ProcessPlayerMouseInput(0, 0, 0, true);

            ZombieGameClientScript.Characters[0].Destination.Y.Should().Be(expectedY);
        }

        [Test]
        public void PlayerFacesMouseCursorTopLeft()
        {
            var expectedX = 0;
            var expectedY = TestScreenHeight / TestTileHeight;

            _localPlayer.Position = new Point(10, 10);

            PlayerInput.ProcessPlayerMouseMovement(0, 0);

            ZombieGameClientScript.Characters[0].LookTarget.X.Should().Be(expectedX);
            ZombieGameClientScript.Characters[0].LookTarget.Y.Should().Be(expectedY);
        }

        [Test]
        public void PlayerFacesMouseCursorBottomRight()
        {
            var expectedX = TestScreenWidth / TestTileWidth;
            var expectedY = 0;

            _localPlayer.Position = new Point(10, 10);
            _localPlayer.LookTarget.X = -1;
            _localPlayer.LookTarget.Y = -1;

            PlayerInput.ProcessPlayerMouseMovement(TestScreenWidth, TestScreenHeight);

            ZombieGameClientScript.Characters[0].LookTarget.X.Should().Be(expectedX);
            ZombieGameClientScript.Characters[0].LookTarget.Y.Should().Be(expectedY);
        }

        [Test]
        public void RightClickCreatesProjectile()
        {
            Assert.Fail();

            // Need to have tests somewhere that make sure projectile is facing the right way,
            // Has the right speed, and destination
            // Should move as any entity moves
        }

        [Ignore]
        [Test]
        public void HoldingMouseAndMovingItChangesDestination()
        {
            Assert.Fail();
        }
    }
}
