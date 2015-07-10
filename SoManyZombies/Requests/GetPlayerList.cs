using Nancy;
using Newtonsoft.Json;
using SMZLib;

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
            return JsonConvert.SerializeObject(GameData.Players);
        }
    }
}
