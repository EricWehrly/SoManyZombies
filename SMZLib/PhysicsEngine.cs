﻿using System;
using System.Linq;
using SharpKit.JavaScript;

namespace SMZLib
{
    [JsType(JsMode.Clr, Filename = "res/SMZLib.js")]
    public class PhysicsEngine
    {
        public static void MainLoop()
        {
            foreach (var projectile in GameData.Projectiles)
            {
                MoveEntityTowardDestination(projectile);
            }

            foreach (var player in GameData.Players)
            {
                //player.Position
                MoveEntityTowardDestination(player);
            }

            CheckEntityCollisions();
        }

        private static void MoveEntityTowardDestination(Character character)
        {
            // Base class operator override would be nice, but this is one of those places we have to acquiesce to sharpkit
            if (character.Destination.X == character.Position.X && character.Destination.Y == character.Position.Y) return;

            var remainingSpeed = character.Speed;

            var xDestDiff = Math.Abs(character.Destination.X - character.Position.X);
            var yDestDiff = Math.Abs(character.Destination.Y - character.Position.Y);

            while (remainingSpeed > 0)
            {
                if (xDestDiff > yDestDiff)
                {
                    if (character.Destination.X > character.Position.X)
                    {
                        character.Position.X += 1;
                    }
                    else character.Position.X -= 1;

                    xDestDiff = Math.Abs(character.Destination.X - character.Position.X);
                }
                else
                {
                    if (character.Destination.Y > character.Position.Y)
                    {
                        character.Position.Y += 1;
                    }
                    else character.Position.Y -= 1;

                    yDestDiff = Math.Abs(character.Destination.Y - character.Position.Y);
                }

                remainingSpeed--;
            }
        }

        private static void CheckEntityCollisions()
        {
            foreach (var player in GameData.Characters)
            {
                if(!GameData.Characters.Contains(player)) continue;

                foreach (var otherPlayer in GameData.Characters)
                {
                    if (player.Id == otherPlayer.Id) continue;

                    if (IsColliding(player, otherPlayer))
                    {
                        DoCollisionDamage(player);

                        DoCollisionDamage(otherPlayer);
                    }
                }
            }
        }

        private static bool IsColliding(Character characterOne, Character characterTwo)
        {
            return characterOne.Area.Contains(characterTwo.Area);
        }

        private static void DoCollisionDamage(Character character)
        {
            character.Health -= 10;
        }
    }
}