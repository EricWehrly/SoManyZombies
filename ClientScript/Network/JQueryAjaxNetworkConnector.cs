using SharpKit.JavaScript;
using SharpKit.jQuery;

namespace ClientScript.Network
{
    [JsType(JsMode.Clr, Filename = "../res/Network.js")]
    public class JQueryAjaxNetworkConnector : IClientNetworkConnector
    {
        public void SendCommand(string command, object data)
        {
            var ajaxSettings = new AjaxSettings
            {
                url = "localhost:1337/" + command,
                cache = false,
                data = data,
                dataType = "",
                // success = Success
            };

            jQuery.ajax(ajaxSettings);
        }

        public object SendQuery(string query, object data)
        {
            var ajaxSettings = new AjaxSettings
            {
                url = "localhost:1337/" + query,
                cache = false,
                data = data,
                dataType = "",
                // success = Success
            };

            jQuery.ajax(ajaxSettings);

            return "";
        }
    }
}