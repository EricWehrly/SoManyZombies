using SharpKit.JavaScript;

namespace SMZLib
{
    // Have to put this here because sharpkit is being dumb

    [JsType(JsMode.Clr, Filename = "res/SMZLib.js")]
    public class Point
    {
        public int X { get; set; }

        public int Y { get; set; }

        public Point(int x, int y)
        {
            X = x;

            Y = y;
        }
    }

    [JsType(JsMode.Clr, Filename = "res/SMZLib.js")]
    public class Character
    {
        private static int _characterCount;

        private int _health = 100;

        public int Id { get; private set; }

        public Point Position { get; set; }

        public Point Destination { get; set; }

        public Point LookTarget { get; set; }

        public float Speed { get; set; }

        public int Width { get; set; }

        public int Height { get; set; }

        public Character()
        {
            Position = new Point(0, 0);

            Destination = new Point(0, 0);

            LookTarget = new Point(0, 0);

            Speed = 1.0F;

            Width = 1;

            Height = 1;

            Id = _characterCount++;
        }

        public int Health
        {
            get { return _health; }
            set
            {
                _health = value;

                if (_health < 1) GameData.KillCharacter(this);
            }
        }

        public Rectangle Area { get { return new Rectangle(Position.X, Position.Y, Width, Height);} }
    }

    [JsType(JsMode.Clr, Filename = "res/SMZLib.js")]
    public class Rectangle
    {
        public double X { get; set; }

        public double Y { get; set; }

        public double Width { get; set; }

        public double Height { get; set; }

        public double Right { get { return X + Width; } }

        public double Top { get { return Y + Height; } }

        public Rectangle(double x, double y, double width, double height)
        {
            X = x;
            Y = y;
            Width = width;
            Height = height;
        }

        public bool Contains(Rectangle rect)
        {
            if (rect.Right < this.X ||
                rect.X > this.Right ||
                rect.Y > this.Top ||
                rect.Top < this.Y)
            {
                return false;
            }

            return true;
        }
    }

    [JsType(JsMode.Clr, Filename = "res/SMZLib.js")]
    public struct ConnectPacket
    {
        public string SessionId;
        public int CharacterId;
    }
}