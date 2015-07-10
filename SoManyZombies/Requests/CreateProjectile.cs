using Nancy;
using SMZLib;

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

            if (!GameData.PlayerExists(sessionId)) return "Invalid session id.";

            var sessionCharacter = GameData.GetPlayerCharacter(sessionId);

            var projectileId = GameData.CreateProjectile(sessionCharacter, 3);

            return projectileId.ToString();
        }
    }
}
