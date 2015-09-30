using SharpKit.JavaScript;

namespace ClientScript.Network
{
    [JsType(JsMode.Clr, Filename = "../res/Network.js")]
    public interface IClientNetworkConnector
    {
        void SendCommand(string command, object data);

        object SendQuery(string query, object data);
    }
}
