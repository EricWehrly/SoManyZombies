using System;
using System.Collections.Generic;
using System.Linq;
using SharpKit.JavaScript;
using SMZLib.Entities;

namespace SMZLib.Factories
{
    [JsType(JsMode.Clr, Filename = "../res/Factories.js")]
    public static class CharacterFactory
    {
        private static Dictionary<string, Character> _playerCharacters = new Dictionary<string, Character>();

        private static Dictionary<int, Character> _projectiles = new Dictionary<int, Character>();

        public static Character[] Players { get { return _playerCharacters.Values.ToArray(); } }

        public static Character[] Projectiles { get { return _projectiles.Values.ToArray(); } }

        public static Character[] Characters { get { return Players.Concat(Projectiles).ToArray(); } }

        private static int _nextPlayerId;

        public static int NextPlayerId { get { return _nextPlayerId++; } }

        public static bool PlayerExists(string playerId)
        {
            return _playerCharacters.Keys.Contains(playerId);
        }

        public static Character GetLocalPlayerCharacter()
        {
            return Players[0];
        }

        public static Character GetPlayerCharacter(string playerId)
        {
            return _playerCharacters[playerId];
        }

        public static string AddPlayer()
        {
            var playerGuid = Guid.NewGuid().ToString();

            var newCharacter = new Character();

            _playerCharacters.Add(playerGuid, newCharacter);

            return playerGuid;
        }

        public static void ClearPlayers()
        {
            _playerCharacters = new Dictionary<string, Character>();
        }

        public static void ClearProjectiles()
        {
            _projectiles = new Dictionary<int, Character>();
        }

        public static int CreateProjectile(Character owner, float speed)
        {
            var projectile = new Character
            {
                Position = new Point(owner.Position.X, owner.Position.Y),
                LookTarget = new Point(owner.LookTarget.X, owner.LookTarget.Y),
                Destination = new Point(owner.LookTarget.X, owner.LookTarget.Y),
                Speed = speed,
                Health = 10
            };
            //projectile.Health = 10;

            _projectiles.Add(owner.Id, projectile);

            return projectile.Id;
        }

        public static void KillCharacter(Character character)
        {
            foreach (KeyValuePair<int, Character> projectile in _projectiles)
            {
                if (projectile.Value == character)
                {
                    _projectiles.Remove(projectile.Key);

                    return;
                }
            }

            foreach (KeyValuePair<string, Character> player in _playerCharacters)
            {
                if (player.Value == character)
                {
                    _playerCharacters.Remove(player.Key);

                    return;
                }
            }
        }
    }
}