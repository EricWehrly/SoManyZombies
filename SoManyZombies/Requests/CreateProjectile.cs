﻿using Nancy;
using SMZLib.Factories;

namespace SoManyZombies.Requests
{
    public class CreateProjectile : NancyModule
    {
        public CreateProjectile()
        {

            Post["/CreateProjectile"] = MakeProjectile;
        }

        private object MakeProjectile(dynamic parameters)
        {
            var sessionId = Request.Form.SessionId;

            if (!CharacterFactory.PlayerExists(sessionId)) return "Invalid session id.";

            var sessionCharacter = CharacterFactory.GetPlayerCharacter(sessionId);

            var projectileId = CharacterFactory.CreateProjectile(sessionCharacter, 3);

            return projectileId.ToString();
        }
    }
}
