using System.Linq;
using Nancy;
using Newtonsoft.Json;
using SMZLib;

namespace SoManyZombies.Requests
{
    public class UpdateCharacter : NancyModule
    {
        public UpdateCharacter()
        {
            //Get["/SetCharacter/{data}"] = SetCharacter;

            //Get["/SetCharacter"] = SetCharacter;

            Post["/SetCharacter"] = SetCharacter;

            Post["/UpdateCharacter"] = SetCharacter;



            //Get["/SetDirection"] = SetCharacterDirection;

            //Get["/SetFacing"] = SetCharacterDirection;

            //Get["/CreateProjectile"] = SetCharacterDirection;
        }

        private object SetCharacter(dynamic parameters)
        {
            var sessionId = Request.Form.SessionId;

            var characterString = Request.Form.Character;

            var character = (Character)JsonConvert.DeserializeObject<Character>(characterString);

            var dataPlayer = GameData.Players.FirstOrDefault(player => player.Id == character.Id);

            if (!GameData.PlayerExists(sessionId)) return "Invalid session id.";

            var sessionCharacter = GameData.GetPlayerCharacter(sessionId);

            if (character.Id != sessionCharacter.Id)
            {
                return null;
            }

            dataPlayer.Destination = character.Destination;

            dataPlayer.LookTarget = character.LookTarget;

            return "Updated " + character.Id;
        }
    }
}
