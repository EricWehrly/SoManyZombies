/* Generated by SharpKit 5 v5.4.4 */

if (typeof(JsTypes) == "undefined")
    var JsTypes = [];
var SMZLib$Character = {
    fullname: "SMZLib.Character",
    baseTypeName: "System.Object",
    assemblyName: "SMZLib",
    Kind: "Class",
    definition: {
        ctor: function (){
            this._Position = null;
            this._Destination = null;
            this._Speed = 0;
            System.Object.ctor.call(this);
            this.set_Position(new SMZLib.Types.Vector3.ctor(0, 0, 0));
            this.set_Destination(new SMZLib.Types.Vector3.ctor(0, 0, 0));
            this.set_Speed(1);
        },
        Position$$: "SMZLib.Types.Vector3",
        get_Position: function (){
            return this._Position;
        },
        set_Position: function (value){
            this._Position = value;
        },
        Destination$$: "SMZLib.Types.Vector3",
        get_Destination: function (){
            return this._Destination;
        },
        set_Destination: function (value){
            this._Destination = value;
        },
        Speed$$: "System.Single",
        get_Speed: function (){
            return this._Speed;
        },
        set_Speed: function (value){
            this._Speed = value;
        }
    }
};
JsTypes.push(SMZLib$Character);

