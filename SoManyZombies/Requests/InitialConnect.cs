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

        private object InitialConnectResponse(dynamic parameters)
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

            return JsonConvert.SerializeObject(returnVal);
        } 
		
    }
}
