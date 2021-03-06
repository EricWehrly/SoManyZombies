/*Generated by SharpKit 5 v5.00.4000*/
if (typeof(JsTypes) == "undefined")
    var JsTypes = [];
var SMZLib$Point =
{
    fullname: "SMZLib.Point",
    baseTypeName: "System.Object",
    assemblyName: "SMZLib",
    Kind: "Class",
    definition:
    {
        ctor: function (x, y)
        {
            this._X = 0;
            this._Y = 0;
            System.Object.ctor.call(this);
            this.set_X(x);
            this.set_Y(y);
        },
        X$$: "System.Int32",
        get_X: function ()
        {
            return this._X;
        },
        set_X: function (value)
        {
            this._X = value;
        },
        Y$$: "System.Int32",
        get_Y: function ()
        {
            return this._Y;
        },
        set_Y: function (value)
        {
            this._Y = value;
        }
    }
};
JsTypes.push(SMZLib$Point);
var SMZLib$Character =
{
    fullname: "SMZLib.Character",
    baseTypeName: "System.Object",
    assemblyName: "SMZLib",
    Kind: "Class",
    definition:
    {
        ctor: function ()
        {
            this._Id = 0;
            this._Position = null;
            this._Destination = null;
            this._LookTarget = null;
            this._Speed = 0;
            System.Object.ctor.call(this);
            this.set_Position(new SMZLib.Point.ctor(0, 0));
            this.set_Destination(new SMZLib.Point.ctor(0, 0));
            this.set_LookTarget(new SMZLib.Point.ctor(0, 0));
            this.set_Speed(1);
        },
        Id$$: "System.Int32",
        get_Id: function ()
        {
            return this._Id;
        },
        set_Id: function (value)
        {
            this._Id = value;
        },
        Position$$: "SMZLib.Point",
        get_Position: function ()
        {
            return this._Position;
        },
        set_Position: function (value)
        {
            this._Position = value;
        },
        Destination$$: "SMZLib.Point",
        get_Destination: function ()
        {
            return this._Destination;
        },
        set_Destination: function (value)
        {
            this._Destination = value;
        },
        LookTarget$$: "SMZLib.Point",
        get_LookTarget: function ()
        {
            return this._LookTarget;
        },
        set_LookTarget: function (value)
        {
            this._LookTarget = value;
        },
        Speed$$: "System.Single",
        get_Speed: function ()
        {
            return this._Speed;
        },
        set_Speed: function (value)
        {
            this._Speed = value;
        }
    }
};
JsTypes.push(SMZLib$Character);
var SMZLib$Rectangle =
{
    fullname: "SMZLib.Rectangle",
    baseTypeName: "System.Object",
    assemblyName: "SMZLib",
    Kind: "Class",
    definition:
    {
        ctor: function (x, y, width, height)
        {
            this._X = 0;
            this._Y = 0;
            this._Width = 0;
            this._Height = 0;
            System.Object.ctor.call(this);
            this.set_X(x);
            this.set_Y(y);
            this.set_Width(width);
            this.set_Height(height);
        },
        X$$: "System.Double",
        get_X: function ()
        {
            return this._X;
        },
        set_X: function (value)
        {
            this._X = value;
        },
        Y$$: "System.Double",
        get_Y: function ()
        {
            return this._Y;
        },
        set_Y: function (value)
        {
            this._Y = value;
        },
        Width$$: "System.Double",
        get_Width: function ()
        {
            return this._Width;
        },
        set_Width: function (value)
        {
            this._Width = value;
        },
        Height$$: "System.Double",
        get_Height: function ()
        {
            return this._Height;
        },
        set_Height: function (value)
        {
            this._Height = value;
        }
    }
};
JsTypes.push(SMZLib$Rectangle);
var SMZLib$ConnectPacket =
{
    fullname: "SMZLib.ConnectPacket",
    baseTypeName: "System.ValueType",
    assemblyName: "SMZLib",
    Kind: "Struct",
    definition:
    {
        ctor: function ()
        {
            this.SessionId = null;
            this.CharacterId = 0;
            System.ValueType.ctor.call(this);
        }
    }
};
JsTypes.push(SMZLib$ConnectPacket);
