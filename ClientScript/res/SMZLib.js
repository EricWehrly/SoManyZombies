/* Generated by SharpKit 5 v5.4.4 */

if (typeof(JsTypes) == "undefined")
    var JsTypes = [];
var SMZLib$PhysicsEngine = {
    fullname: "SMZLib.PhysicsEngine",
    baseTypeName: "System.Object",
    staticDefinition: {
        MainLoop: function (){
            for (var $i2 = 0,$t2 = SMZLib.GameData.get_Projectiles(),$l2 = $t2.length,projectile = $t2[$i2]; $i2 < $l2; $i2++, projectile = $t2[$i2]){
                SMZLib.PhysicsEngine.MoveEntityTowardDestination(projectile);
            }
            for (var $i3 = 0,$t3 = SMZLib.GameData.get_Players(),$l3 = $t3.length,player = $t3[$i3]; $i3 < $l3; $i3++, player = $t3[$i3]){
                SMZLib.PhysicsEngine.MoveEntityTowardDestination(player);
            }
            SMZLib.PhysicsEngine.CheckEntityCollisions();
        },
        MoveEntityTowardDestination: function (character){
            if (character.get_Destination().get_X() == character.get_Position().get_X() && character.get_Destination().get_Y() == character.get_Position().get_Y())
                return;
            var remainingSpeed = character.get_Speed();
            var xDestDiff = System.Math.Abs$$Int32(character.get_Destination().get_X() - character.get_Position().get_X());
            var yDestDiff = System.Math.Abs$$Int32(character.get_Destination().get_Y() - character.get_Position().get_Y());
            while (remainingSpeed > 0){
                if (xDestDiff > yDestDiff){
                    if (character.get_Destination().get_X() > character.get_Position().get_X()){
                        character.get_Position().set_X(character.get_Position().get_X() + 1);
                    }
                    else
                        character.get_Position().set_X(character.get_Position().get_X() - 1);
                    xDestDiff = System.Math.Abs$$Int32(character.get_Destination().get_X() - character.get_Position().get_X());
                }
                else {
                    if (character.get_Destination().get_Y() > character.get_Position().get_Y()){
                        character.get_Position().set_Y(character.get_Position().get_Y() + 1);
                    }
                    else
                        character.get_Position().set_Y(character.get_Position().get_Y() - 1);
                    yDestDiff = System.Math.Abs$$Int32(character.get_Destination().get_Y() - character.get_Position().get_Y());
                }
                remainingSpeed--;
            }
        },
        CheckEntityCollisions: function (){
            for (var $i4 = 0,$t4 = SMZLib.GameData.get_Characters(),$l4 = $t4.length,player = $t4[$i4]; $i4 < $l4; $i4++, player = $t4[$i4]){
                if (!System.Linq.Enumerable.Contains$1$$IEnumerable$1$$TSource(SMZLib.Character.ctor, SMZLib.GameData.get_Characters(), player))
                    continue;
                for (var $i5 = 0,$t5 = SMZLib.GameData.get_Characters(),$l5 = $t5.length,otherPlayer = $t5[$i5]; $i5 < $l5; $i5++, otherPlayer = $t5[$i5]){
                    if (player.get_Id() == otherPlayer.get_Id())
                        continue;
                    if (SMZLib.PhysicsEngine.IsColliding(player, otherPlayer)){
                        SMZLib.PhysicsEngine.DoCollisionDamage(player);
                        SMZLib.PhysicsEngine.DoCollisionDamage(otherPlayer);
                    }
                }
            }
        },
        IsColliding: function (characterOne, characterTwo){
            return characterOne.get_Area().Contains(characterTwo.get_Area());
        },
        DoCollisionDamage: function (character){
            character.set_Health(character.get_Health() - 10);
        }
    },
    assemblyName: "SMZLib",
    Kind: "Class",
    definition: {
        ctor: function (){
            System.Object.ctor.call(this);
        }
    }
};
JsTypes.push(SMZLib$PhysicsEngine);
var SMZLib$Point = {
    fullname: "SMZLib.Point",
    baseTypeName: "System.Object",
    assemblyName: "SMZLib",
    Kind: "Class",
    definition: {
        ctor: function (x, y){
            this._X = 0;
            this._Y = 0;
            System.Object.ctor.call(this);
            this.set_X(x);
            this.set_Y(y);
        },
        X$$: "System.Int32",
        get_X: function (){
            return this._X;
        },
        set_X: function (value){
            this._X = value;
        },
        Y$$: "System.Int32",
        get_Y: function (){
            return this._Y;
        },
        set_Y: function (value){
            this._Y = value;
        }
    }
};
JsTypes.push(SMZLib$Point);
var SMZLib$Character = {
    fullname: "SMZLib.Character",
    baseTypeName: "System.Object",
    staticDefinition: {
        cctor: function (){
            SMZLib.Character._characterCount = 0;
        }
    },
    assemblyName: "SMZLib",
    Kind: "Class",
    definition: {
        ctor: function (){
            this._health = 100;
            this._Id = 0;
            this._Position = null;
            this._Destination = null;
            this._LookTarget = null;
            this._Speed = 0;
            this._Width = 0;
            this._Height = 0;
            System.Object.ctor.call(this);
            this.set_Position(new SMZLib.Point.ctor(0, 0));
            this.set_Destination(new SMZLib.Point.ctor(0, 0));
            this.set_LookTarget(new SMZLib.Point.ctor(0, 0));
            this.set_Speed(1);
            this.set_Width(1);
            this.set_Height(1);
            this.set_Id(SMZLib.Character._characterCount++);
        },
        Id$$: "System.Int32",
        get_Id: function (){
            return this._Id;
        },
        set_Id: function (value){
            this._Id = value;
        },
        Position$$: "SMZLib.Point",
        get_Position: function (){
            return this._Position;
        },
        set_Position: function (value){
            this._Position = value;
        },
        Destination$$: "SMZLib.Point",
        get_Destination: function (){
            return this._Destination;
        },
        set_Destination: function (value){
            this._Destination = value;
        },
        LookTarget$$: "SMZLib.Point",
        get_LookTarget: function (){
            return this._LookTarget;
        },
        set_LookTarget: function (value){
            this._LookTarget = value;
        },
        Speed$$: "System.Single",
        get_Speed: function (){
            return this._Speed;
        },
        set_Speed: function (value){
            this._Speed = value;
        },
        Width$$: "System.Int32",
        get_Width: function (){
            return this._Width;
        },
        set_Width: function (value){
            this._Width = value;
        },
        Height$$: "System.Int32",
        get_Height: function (){
            return this._Height;
        },
        set_Height: function (value){
            this._Height = value;
        },
        Health$$: "System.Int32",
        get_Health: function (){
            return this._health;
        },
        set_Health: function (value){
            this._health = value;
            if (this._health < 1)
                SMZLib.GameData.KillCharacter(this);
        },
        Area$$: "SMZLib.Rectangle",
        get_Area: function (){
            return new SMZLib.Rectangle.ctor(this.get_Position().get_X(), this.get_Position().get_Y(), this.get_Width(), this.get_Height());
        }
    }
};
JsTypes.push(SMZLib$Character);
var SMZLib$Rectangle = {
    fullname: "SMZLib.Rectangle",
    baseTypeName: "System.Object",
    assemblyName: "SMZLib",
    Kind: "Class",
    definition: {
        ctor: function (x, y, width, height){
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
        get_X: function (){
            return this._X;
        },
        set_X: function (value){
            this._X = value;
        },
        Y$$: "System.Double",
        get_Y: function (){
            return this._Y;
        },
        set_Y: function (value){
            this._Y = value;
        },
        Width$$: "System.Double",
        get_Width: function (){
            return this._Width;
        },
        set_Width: function (value){
            this._Width = value;
        },
        Height$$: "System.Double",
        get_Height: function (){
            return this._Height;
        },
        set_Height: function (value){
            this._Height = value;
        },
        Right$$: "System.Double",
        get_Right: function (){
            return this.get_X() + this.get_Width();
        },
        Top$$: "System.Double",
        get_Top: function (){
            return this.get_Y() + this.get_Height();
        },
        Contains: function (rect){
            if (rect.get_Right() < this.get_X() || rect.get_X() > this.get_Right() || rect.get_Y() > this.get_Top() || rect.get_Top() < this.get_Y()){
                return false;
            }
            return true;
        }
    }
};
JsTypes.push(SMZLib$Rectangle);
var SMZLib$ConnectPacket = {
    fullname: "SMZLib.ConnectPacket",
    baseTypeName: "System.ValueType",
    assemblyName: "SMZLib",
    Kind: "Struct",
    definition: {
        ctor: function (){
            this.SessionId = null;
            this.CharacterId = 0;
            System.ValueType.ctor.call(this);
        }
    }
};
JsTypes.push(SMZLib$ConnectPacket);

