using Nancy;
using Newtonsoft.Json;
using SMZLib;
using SMZLib.Factories;

namespace SoManyZombies.Requests
{
    public class GetPlayerList : NancyModule
    {
        public GetPlayerList()
        {
            Get["/GetPlayerList"] = ReturnPlayerList;
        }

        private object ReturnPlayerList(dynamic parameters)
        {
            return JsonConvert.SerializeObject(CharacterFactory.Players);
        }
    }
}
