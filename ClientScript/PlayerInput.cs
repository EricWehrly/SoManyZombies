using System;
using System.Collections.Generic;
using SharpKit.JavaScript;
using SMZLib;

namespace ClientScript
{
    [JsType(JsMode.Clr, Filename = "res/ZombieGameClientScript.js")]
    public class PlayerInput
    {
        private static readonly Dictionary<string, int> _playerMovementKeys;
        private static List<int> _pressedKeys = new List<int>();
        private static bool _isMouseDown = false;

        static PlayerInput()
        {
            _playerMovementKeys = new Dictionary<string, int>();

            _playerMovementKeys["Left"] = 65;
            _playerMovementKeys["Right"] = 68;
            _playerMovementKeys["Up"] = 87;
            _playerMovementKeys["Down"] = 83;
        }

        public static void ProcessPlayerKeyboardInput(int keyCode, bool keyIsDown)
        {
            console.log(keyCode.ToString());

            /*
            if (IsPlayerMovementKey(keyCode))
            {
                ProcessPlayerMovementInput(keyCode);
            }
            */
            if (keyIsDown && (!_pressedKeys.Contains(keyCode))) _pressedKeys.Add(keyCode);
            else if (!keyIsDown && _pressedKeys.Contains(keyCode)) _pressedKeys.Remove(keyCode);
        }

        public static void ProcessPlayerMouseInput(int keyCode, int x, int y, bool isKeyDown)
        {
            _isMouseDown = isKeyDown;

            y = (int) ClientRenderer.WindowRenderSize.Height - y;

            x = ConvertXFromPixelsToTiles(x);
            y = ConvertYFromPixelsToTiles(y);

            ZombieGameClientScript.Characters[0].Destination = new Point(x, y);
        }

        private static int ConvertXFromPixelsToTiles(int x)
        {
            x = (int)Math.Floor(x / ClientRenderer.StageTileSize.Width);
            return x;
        }

        private static int ConvertYFromPixelsToTiles(int y)
        {
            y = (int)Math.Floor(y / ClientRenderer.StageTileSize.Height);
            return y;

            //y = (int)(y / 40);
            //y = y/40;
            //y = JsMath.floor(y / 40);
        }

        public static void ProcessPlayerMouseMovement(int newX, int newY)
        {
            newY = (int)ClientRenderer.WindowRenderSize.Height - newY;

            ZombieGameClientScript.Characters[0].LookTarget.X = newX / (int) ClientRenderer.StageTileSize.Width;
            ZombieGameClientScript.Characters[0].LookTarget.Y = ConvertYFromPixelsToTiles(newY);
        }

        public static void ProcessPlayerMovementInput()
        {
            if (_pressedKeys.Contains(_playerMovementKeys["Left"])) MovePlayerLeft();

            if (_pressedKeys.Contains(_playerMovementKeys["Right"])) MovePlayerRight();

            if (_pressedKeys.Contains(_playerMovementKeys["Up"])) MovePlayerUp();

            if (_pressedKeys.Contains(_playerMovementKeys["Down"])) MovePlayerDown();

            if (ZombieGameClientScript.Characters[0].Destination.X < 0)
                ZombieGameClientScript.Characters[0].Destination.X = 0;
            if (ZombieGameClientScript.Characters[0].Destination.Y < 0)
                ZombieGameClientScript.Characters[0].Destination.Y = 0;
        }

        private static void MovePlayerLeft()
        {
            ZombieGameClientScript.Characters[0].Destination.X = ZombieGameClientScript.Characters[0].Position.X -
                                                        (int)ZombieGameClientScript.Characters[0].Speed;
        }

        private static void MovePlayerRight()
        {
            ZombieGameClientScript.Characters[0].Destination.X = ZombieGameClientScript.Characters[0].Position.X +
                                                        (int)ZombieGameClientScript.Characters[0].Speed;
        }

        private static void MovePlayerUp()
        {
            ZombieGameClientScript.Characters[0].Destination.Y = ZombieGameClientScript.Characters[0].Position.Y +
                                                        (int)ZombieGameClientScript.Characters[0].Speed;
        }

        private static void MovePlayerDown()
        {
            ZombieGameClientScript.Characters[0].Destination.Y = ZombieGameClientScript.Characters[0].Position.Y -
                                                        (int)ZombieGameClientScript.Characters[0].Speed;
        }
    }
}