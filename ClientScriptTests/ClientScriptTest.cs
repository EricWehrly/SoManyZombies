using NUnit.Framework;
using SMZLib.Entities;
using SMZLib.Factories;

namespace ClientScriptTests
{
    public class ClientScriptTest
    {
        protected Character _localPlayer;

        [SetUp]
        public void ClientScriptSetUp()
        {
            CharacterFactory.ClearPlayers();

            CharacterFactory.AddPlayer();

            _localPlayer = CharacterFactory.GetLocalPlayerCharacter();
        }
    }
}
