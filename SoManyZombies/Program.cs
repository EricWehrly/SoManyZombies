using System;
using System.Diagnostics;
using Nancy.Hosting.Self;
using SMZLib;

namespace SoManyZombies
{
    public class Program
    {
        private static bool _shutDownIssued = false;

        public static void Main()
        {
            // StartGameLoop();

            StartGameServer();
        }

        private static void StartGameServer()
        {
            const string nancyUri = "http://localhost:1337/";

            using (var host = new NancyHost(new Uri(nancyUri)))
            {
                host.Start();

                Process.Start(nancyUri);

                Console.ReadLine();

                host.Stop();

                _shutDownIssued = true;
            }
        }

        private static void StartGameLoop()
        {
            while (!_shutDownIssued)
            {
                PhysicsEngine.MainLoop();
            }
        }
    }
}
