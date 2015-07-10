namespace ClientScript.Network
{
    public interface IClientNetworkConnector
    {
        void SendCommand(string command, object data);

        object SendQuery(string query, object data);
    }
}
