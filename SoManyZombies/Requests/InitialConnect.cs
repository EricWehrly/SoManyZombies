using System.Text;
using Nancy;
using Newtonsoft.Json;
using SMZLib;
using SMZLib.Factories;

namespace SoManyZombies.Requests
{
    public class InitialConnect : NancyModule
    {
        public InitialConnect()
        {
            Get["/InitialConnect"] = InitialConnectResponse;
        }

        private Response InitialConnectResponse(dynamic parameters)
        {
            var newPlayer = CharacterFactory.AddPlayer();
            //GameData.Players.Add(new Character());

            // GameData.Players[GameData.Players.Count - 1].Id = GameData.NextPlayerId;

            var returnVal = new ConnectPacket
            {
                SessionId = newPlayer,
                CharacterId = CharacterFactory.GetPlayerCharacter(newPlayer).Id
            };

            //return JsonConvert.SerializeObject(new Tuple<Guid, Character[]>(newPlayer, GameData.Players));
            var jsonBytes = Encoding.UTF8.GetBytes(JsonConvert.SerializeObject(returnVal));

            var returnResponse = new Response();

            returnResponse.StatusCode = HttpStatusCode.OK;
            returnResponse.Headers.Add("Access-Control-Allow-Origin", "*");
            returnResponse.ContentType = "application/json";
            returnResponse.Contents = s => s.Write(jsonBytes, 0, jsonBytes.Length);

            return returnResponse;

            // return JsonConvert.SerializeObject(returnVal);
        } 
		
    }
}
