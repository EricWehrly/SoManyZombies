﻿using ClientScript;
using FluentAssertions;
using NUnit.Framework;
using SMZLib;

namespace ClientScriptTests.FullAgentFunctions
{
    public class FullAgentRenderingTests
    {
        private Character _localPlayer;

        private const int ExpectedPlayerSpriteHeight = 40;
        private const int ExpectedPlayerSpriteWidth = 40;
        private const int TestScreenHeight = 1080;
        private const int TestScreenWidth = 1920;
        private const int TestTileHeight = 40;
        private const int TestTileWidth = 40;

        private int TestTileXCount { get { return (TestScreenWidth / TestTileWidth) - 1; } }
        private int TestTileYCount { get { return (TestScreenHeight/TestTileHeight) - 1; } }

        [SetUp]
        public void SetUp()
        {
            ZombieGameClientScript.ClearCharacters();
            ZombieGameClientScript.CreateCharacter();

            _localPlayer = ZombieGameClientScript.Characters[0];
        }

        [Test]
        public void LocalPlayerDimensionTest()
        {
            CalculatePlayerRenderPosition();

            ClientRenderer.CharacterRenderers[0].RenderPosition.Width.Should().Be(ExpectedPlayerSpriteWidth);

            ClientRenderer.CharacterRenderers[0].RenderPosition.Height.Should().Be(ExpectedPlayerSpriteHeight);
        }

        [Test]
        public void LocalPlayerOriginTest()
        {
            const int expectedPlayerX = 0;

            const int expectedPlayerY = TestScreenHeight - ExpectedPlayerSpriteHeight;

            _localPlayer.Position = new Point(0, 0);

            CalculatePlayerRenderPosition();

            VerifyPlayerX(expectedPlayerX);

            VerifyPlayerY(expectedPlayerY);
        }

        [Test]
        public void LocalPlayerRightEdgeTest()
        {
            const int expectedPlayerX = TestScreenWidth - ExpectedPlayerSpriteWidth;

            _localPlayer.Position = new Point(TestTileXCount, 0);

            CalculatePlayerRenderPosition();

            VerifyPlayerX(expectedPlayerX);
        }
        
        [Test]
        public void LocalPlayerTopEdgeTest()
        {
            const int expectedPlayerY = 0;

            _localPlayer.Position = new Point(0, TestTileYCount);

            CalculatePlayerRenderPosition();

            VerifyPlayerY(expectedPlayerY);
        }

        [Test]
        public void LocalPlayerOffscreenXTest()
        {
            const int expectedPlayerX = TestScreenWidth;

            _localPlayer.Position = new Point(TestTileXCount + 1, 0);

            CalculatePlayerRenderPosition();

            VerifyPlayerX(expectedPlayerX);
        }

        [Test]
        public void LocalPlayerNegativeXTest()
        {
            const int expectedPlayerX = -(ExpectedPlayerSpriteWidth);

            _localPlayer.Position = new Point(-1, 0);

            CalculatePlayerRenderPosition();

            VerifyPlayerX(expectedPlayerX);
        }

        [Test]
        public void LocalPlayerVeryNegativeXTest()
        {
            const int expectedPlayerX = -(10*ExpectedPlayerSpriteWidth);

            _localPlayer.Position = new Point(-10, 0);

            CalculatePlayerRenderPosition();

            VerifyPlayerX(expectedPlayerX);
        }

        [Ignore]
        [Test]
        public void LocalPlayerOffscreenYTest()
        {
            const int expectedPlayerY = TestScreenHeight;

            _localPlayer.Position = new Point(0, TestTileYCount + 1);

            CalculatePlayerRenderPosition();

            VerifyPlayerY(expectedPlayerY);
        }

        [Ignore]
        [Test]
        public void LocalPlayerNegativeYTest()
        {
            const int expectedPlayerY = -(ExpectedPlayerSpriteHeight);

            _localPlayer.Position = new Point(0, -1);

            CalculatePlayerRenderPosition();

            VerifyPlayerY(expectedPlayerY);
        }

        [Ignore]
        [Test]
        public void LocalPlayerVeryNegativeYTest()
        {
            const int expectedPlayerY = -(10 * ExpectedPlayerSpriteHeight);

            _localPlayer.Position = new Point(0, -10);

            CalculatePlayerRenderPosition();

            VerifyPlayerY(expectedPlayerY);
        }

        [Test]
        public void PlayerSpriteFacesPlayerFacingDirection()
        {
            Assert.Fail();
        }

        // Stop

        [Ignore]    // Current system doesn't support this granularity in position
        [Test]
        public void LocalPlayerPartialOffscreenXTest()
        {
            //const int expectedPlayerX = -(ExpectedPlayerSpriteWidth / 2);

            Assert.Fail("Not implemented.");
        }

        [Ignore]
        [Test]
        public void CameraFollowsLocalPlayer()
        {
            Assert.Fail();
        }

        [Test]
        public void LocalPlayerAimsAtReticle()
        {

            _localPlayer.Position = new Point(0, 0);

            _localPlayer.LookTarget = new Point(1, 1);

            var expectedX = 10;
            var expectedY = 10;

            CalculatePlayerRenderPosition();

            ClientRenderer.CharacterRenderers[0].RenderRotation.Should().Be(45);

            Assert.Fail();
        }

        private static void CalculatePlayerRenderPosition()
        {
            ClientRenderer.CharacterRenderers[0].CalculateEntityDrawPosition();
        }

        private static void VerifyPlayerX(int expectedPlayerX)
        {
            ClientRenderer.CharacterRenderers[0].RenderPosition.X.Should().Be(expectedPlayerX);
        }

        private static void VerifyPlayerY(int expectedPlayerY)
        {
            ClientRenderer.CharacterRenderers[0].RenderPosition.Y.Should().Be(expectedPlayerY);
        }
    }
}