/* Generated by SharpKit 5 v5.4.4 */
if (typeof($CreateException)=='undefined') 
{
    var $CreateException = function(ex, error) 
    {
        if(error==null)
            error = new Error();
        if(ex==null)
            ex = new System.Exception.ctor();       
        error.message = ex.message;
        for (var p in ex)
           error[p] = ex[p];
        return error;
    }
}


if (typeof(JsTypes) == "undefined")
    var JsTypes = [];
var ClientScript$CanvasCharacterRenderer = {
    fullname: "ClientScript.CanvasCharacterRenderer",
    baseTypeName: "System.Object",
    assemblyName: "ClientScript",
    Kind: "Class",
    definition: {
        ctor: function (character){
            this._Character = null;
            this._RenderPosition = null;
            this._RenderRotation = 0;
            System.Object.ctor.call(this);
            this.set_Character(character);
            this.set_RenderPosition(new SMZLib.Rectangle.ctor(-1, -1, 0, 0));
            this.set_RenderRotation(0);
        },
        Character$$: "SMZLib.Character",
        get_Character: function (){
            return this._Character;
        },
        set_Character: function (value){
            this._Character = value;
        },
        RenderPosition$$: "SMZLib.Rectangle",
        get_RenderPosition: function (){
            return this._RenderPosition;
        },
        set_RenderPosition: function (value){
            this._RenderPosition = value;
        },
        RenderRotation$$: "System.Int32",
        get_RenderRotation: function (){
            return this._RenderRotation;
        },
        set_RenderRotation: function (value){
            this._RenderRotation = value;
        },
        CalculateEntityDrawPosition: function (){
            this.get_RenderPosition().set_X((this.get_Character().get_Position().get_X() * ClientScript.ClientRenderer.get_StageTileSize().get_Width()));
            this.get_RenderPosition().set_Y(((this.get_Character().get_Position().get_Y() + 1) * ClientScript.ClientRenderer.get_StageTileSize().get_Height()));
            this.get_RenderPosition().set_Width(40);
            this.get_RenderPosition().set_Height(40);
            this.CalculateRotation();
            this.FlipYAxis();
        },
        CalculateRotation: function (){
            var xDiff = this.get_Character().get_LookTarget().get_X() - this.get_Character().get_Position().get_X();
            var yDiff = this.get_Character().get_LookTarget().get_Y() - this.get_Character().get_Position().get_Y();
            if (yDiff == 0){
                if (xDiff > 0){
                    this.set_RenderRotation(0);
                    return;
                }
                else {
                    this.set_RenderRotation(180);
                    return;
                }
            }
            if (xDiff == 0){
                if (yDiff > 0){
                    this.set_RenderRotation(90);
                    return;
                }
                else {
                    this.set_RenderRotation(270);
                    return;
                }
            }
            var arctan = System.Math.Atan(yDiff / xDiff);
            this.set_RenderRotation((1 - arctan) * 100);
        },
        SetRectangleSizeFromSprite: function (){
        },
        ApplyViewScrolling: function (){
        },
        ApplyIsometricView: function (){
        },
        FlipYAxis: function (){
            this.get_RenderPosition().set_Y(ClientScript.ClientRenderer.get_WindowRenderSize().get_Height() - this.get_RenderPosition().get_Y());
        }
    }
};
JsTypes.push(ClientScript$CanvasCharacterRenderer);
var ClientScript$ClientRenderer = {
    fullname: "ClientScript.ClientRenderer",
    baseTypeName: "System.Object",
    staticDefinition: {
        CharacterRenderers$$: "System.Collections.Generic.List`1[[ClientScript.CanvasCharacterRenderer]]",
        get_CharacterRenderers: function (){
            return ClientScript.ClientRenderer._characterRenderers;
        },
        StageTileSize$$: "SMZLib.Rectangle",
        get_StageTileSize: function (){
            return ClientScript.ClientRenderer._StageTileSize;
        },
        set_StageTileSize: function (value){
            ClientScript.ClientRenderer._StageTileSize = value;
        },
        WindowRenderSize$$: "SMZLib.Rectangle",
        get_WindowRenderSize: function (){
            return ClientScript.ClientRenderer._WindowRenderSize;
        },
        set_WindowRenderSize: function (value){
            ClientScript.ClientRenderer._WindowRenderSize = value;
        },
        cctor: function (){
            ClientScript.ClientRenderer._characterRenderers = null;
            ClientScript.ClientRenderer._canvasRenderingContext2D = null;
            ClientScript.ClientRenderer._playerImage = null;
            ClientScript.ClientRenderer._StageTileSize = null;
            ClientScript.ClientRenderer._WindowRenderSize = null;
            ClientScript.ClientRenderer.set_StageTileSize(new SMZLib.Rectangle.ctor(0, 0, 40, 40));
            ClientScript.ClientRenderer.set_WindowRenderSize(new SMZLib.Rectangle.ctor(0, 0, 1920, 1080));
        },
        Initialize: function (){
            ClientScript.ClientRenderer.PrepareTheBody();
            ClientScript.ClientRenderer.CreateCanvasElement();
            ClientScript.ClientRenderer.set_WindowRenderSize(new SMZLib.Rectangle.ctor(0, 0, window.innerWidth, window.innerHeight));
            ClientScript.ClientRenderer._playerImage = document.createElement('img');
            ClientScript.ClientRenderer._playerImage.src = "res/Square.gif";
            ClientScript.ClientRenderer.Resize();
        },
        PrepareTheBody: function (){
            document.body.innerHTML = "";
            document.body.style.margin = new String("0");
            document.body.style.padding = new String("0");
            document.body.style.overflow = new String("hidden");
        },
        CreateCanvasElement: function (){
            var canvas = (function (){
                var $v1 = document.createElement('canvas');
                $v1.id = "canvas2D";
                return $v1;
            })();
            canvas.style.width = new String("100%");
            canvas.style.height = new String("100%");
            document.body.appendChild(canvas);
            ClientScript.ClientRenderer._canvasRenderingContext2D = canvas.getContext("2d");
        },
        Resize: function (){
            var canvas = document.getElementById("canvas2D");
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        },
        CreateCharacterRenderer: function (character){
            if (ClientScript.ClientRenderer._characterRenderers == null)
                ClientScript.ClientRenderer._characterRenderers = new System.Collections.Generic.List$1.ctor(ClientScript.CanvasCharacterRenderer.ctor);
            ClientScript.ClientRenderer._characterRenderers.Add(new ClientScript.CanvasCharacterRenderer.ctor(character));
        },
        ClearCharacterRenderers: function (){
            ClientScript.ClientRenderer._characterRenderers = new System.Collections.Generic.List$1.ctor(ClientScript.CanvasCharacterRenderer.ctor);
        },
        Render: function (){
            ClientScript.ClientRenderer.ClearCanvas();
            var $it1 = ClientScript.ClientRenderer._characterRenderers.GetEnumerator();
            while ($it1.MoveNext()){
                var characterRenderer = $it1.get_Current();
                ClientScript.ClientRenderer.DrawRotatedCharacter(characterRenderer);
            }
        },
        ClearCanvas: function (){
            ClientScript.ClientRenderer._canvasRenderingContext2D.clearRect(0, 0, window.innerWidth, window.innerHeight);
        },
        DrawCharacter: function (characterRenderer){
            characterRenderer.CalculateEntityDrawPosition();
            ClientScript.ClientRenderer._canvasRenderingContext2D.drawImage(ClientScript.ClientRenderer._playerImage, characterRenderer.get_RenderPosition().get_X(), characterRenderer.get_RenderPosition().get_Y(), characterRenderer.get_RenderPosition().get_Width(), characterRenderer.get_RenderPosition().get_Height());
        },
        DrawRotatedCharacter: function (characterRenderer){
            characterRenderer.CalculateEntityDrawPosition();
            ClientScript.ClientRenderer._canvasRenderingContext2D.save();
            ClientScript.ClientRenderer._canvasRenderingContext2D.translate(characterRenderer.get_RenderPosition().get_X(), characterRenderer.get_RenderPosition().get_Y());
            ClientScript.ClientRenderer._canvasRenderingContext2D.rotate(characterRenderer.get_RenderRotation());
            ClientScript.ClientRenderer._canvasRenderingContext2D.drawImage(ClientScript.ClientRenderer._playerImage, characterRenderer.get_RenderPosition().get_X(), characterRenderer.get_RenderPosition().get_Y(), characterRenderer.get_RenderPosition().get_Width(), characterRenderer.get_RenderPosition().get_Height());
            ClientScript.ClientRenderer._canvasRenderingContext2D.restore();
        }
    },
    assemblyName: "ClientScript",
    Kind: "Class",
    definition: {
        ctor: function (){
            System.Object.ctor.call(this);
        }
    }
};
JsTypes.push(ClientScript$ClientRenderer);
var ClientScript$HeartBeat = {
    fullname: "ClientScript.HeartBeat",
    baseTypeName: "System.Object",
    staticDefinition: {
        cctor: function (){
            ClientScript.HeartBeat.HeartBeatTimeOut = 200;
            ClientScript.HeartBeat.MaxFrameRate = 60;
        },
        Initialize: function (){
            window.setTimeout(ClientScript.HeartBeat.MainLoop, 0);
            window.setInterval(ClientScript.HeartBeat.PhysicsLoop, 200);
        },
        PhysicsLoop: function (){
            ClientScript.PlayerInput.ProcessPlayerMovementInput();
            var $it2 = get_Characters().GetEnumerator();
            while ($it2.MoveNext()){
                var player = $it2.get_Current();
                ClientScript.HeartBeat.MoveEntityTowardDestination(player);
            }
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
        MainLoop: function (){
            var start = System.DateTime.get_Now();
            ClientScript.ClientRenderer.Render();
            var frameInterval = 16.6666666666667;
            var end = System.DateTime.get_Now();
            var frameTime = end.Subtract$$DateTime(start).get_Milliseconds();
            if (frameTime > frameInterval){
                window.setTimeout(ClientScript.HeartBeat.MainLoop, 0);
            }
            else {
                window.setTimeout(ClientScript.HeartBeat.MainLoop, frameInterval - frameTime);
            }
        }
    },
    assemblyName: "ClientScript",
    Kind: "Class",
    definition: {
        ctor: function (){
            System.Object.ctor.call(this);
        }
    }
};
JsTypes.push(ClientScript$HeartBeat);
var ClientScript$PlayerInput = {
    fullname: "ClientScript.PlayerInput",
    baseTypeName: "System.Object",
    staticDefinition: {
        cctor: function (){
            ClientScript.PlayerInput._playerMovementKeys = null;
            ClientScript.PlayerInput._pressedKeys = new System.Collections.Generic.List$1.ctor(System.Int32.ctor);
            ClientScript.PlayerInput._isMouseDown = false;
            ClientScript.PlayerInput._playerMovementKeys = new System.Collections.Generic.Dictionary$2.ctor(System.String.ctor, System.Int32.ctor);
            ClientScript.PlayerInput._playerMovementKeys.set_Item$$TKey("Left", 65);
            ClientScript.PlayerInput._playerMovementKeys.set_Item$$TKey("Right", 68);
            ClientScript.PlayerInput._playerMovementKeys.set_Item$$TKey("Up", 87);
            ClientScript.PlayerInput._playerMovementKeys.set_Item$$TKey("Down", 83);
        },
        ProcessPlayerKeyboardInput: function (keyCode, keyIsDown){
            console.log(keyCode.toString());
            if (keyIsDown && (!ClientScript.PlayerInput._pressedKeys.Contains(keyCode)))
                ClientScript.PlayerInput._pressedKeys.Add(keyCode);
            else if (!keyIsDown && ClientScript.PlayerInput._pressedKeys.Contains(keyCode))
                ClientScript.PlayerInput._pressedKeys.Remove(keyCode);
        },
        ProcessPlayerMouseInput: function (keyCode, x, y, isKeyDown){
            ClientScript.PlayerInput._isMouseDown = isKeyDown;
            y = ClientScript.ClientRenderer.get_WindowRenderSize().get_Height() - y;
            x = ClientScript.PlayerInput.ConvertXFromPixelsToTiles(x);
            y = ClientScript.PlayerInput.ConvertYFromPixelsToTiles(y);
            get_Characters().get_Item$$Int32(0).set_Destination(new SMZLib.Point.ctor(x, y));
        },
        ConvertXFromPixelsToTiles: function (x){
            x = System.Math.Floor$$Double(x / ClientScript.ClientRenderer.get_StageTileSize().get_Width());
            return x;
        },
        ConvertYFromPixelsToTiles: function (y){
            y = System.Math.Floor$$Double(y / ClientScript.ClientRenderer.get_StageTileSize().get_Height());
            return y;
        },
        ProcessPlayerMouseMovement: function (newX, newY){
            newY = ClientScript.ClientRenderer.get_WindowRenderSize().get_Height() - newY;
            get_Characters().get_Item$$Int32(0).get_LookTarget().set_X(newX / ClientScript.ClientRenderer.get_StageTileSize().get_Width());
            get_Characters().get_Item$$Int32(0).get_LookTarget().set_Y(ClientScript.PlayerInput.ConvertYFromPixelsToTiles(newY));
        },
        ProcessPlayerMovementInput: function (){
            if (ClientScript.PlayerInput._pressedKeys.Contains(ClientScript.PlayerInput._playerMovementKeys.get_Item$$TKey("Left")))
                ClientScript.PlayerInput.MovePlayerLeft();
            if (ClientScript.PlayerInput._pressedKeys.Contains(ClientScript.PlayerInput._playerMovementKeys.get_Item$$TKey("Right")))
                ClientScript.PlayerInput.MovePlayerRight();
            if (ClientScript.PlayerInput._pressedKeys.Contains(ClientScript.PlayerInput._playerMovementKeys.get_Item$$TKey("Up")))
                ClientScript.PlayerInput.MovePlayerUp();
            if (ClientScript.PlayerInput._pressedKeys.Contains(ClientScript.PlayerInput._playerMovementKeys.get_Item$$TKey("Down")))
                ClientScript.PlayerInput.MovePlayerDown();
            if (get_Characters().get_Item$$Int32(0).get_Destination().get_X() < 0)
                get_Characters().get_Item$$Int32(0).get_Destination().set_X(0);
            if (get_Characters().get_Item$$Int32(0).get_Destination().get_Y() < 0)
                get_Characters().get_Item$$Int32(0).get_Destination().set_Y(0);
        },
        MovePlayerLeft: function (){
            get_Characters().get_Item$$Int32(0).get_Destination().set_X(get_Characters().get_Item$$Int32(0).get_Position().get_X() - get_Characters().get_Item$$Int32(0).get_Speed());
        },
        MovePlayerRight: function (){
            get_Characters().get_Item$$Int32(0).get_Destination().set_X(get_Characters().get_Item$$Int32(0).get_Position().get_X() + get_Characters().get_Item$$Int32(0).get_Speed());
        },
        MovePlayerUp: function (){
            get_Characters().get_Item$$Int32(0).get_Destination().set_Y(get_Characters().get_Item$$Int32(0).get_Position().get_Y() + get_Characters().get_Item$$Int32(0).get_Speed());
        },
        MovePlayerDown: function (){
            get_Characters().get_Item$$Int32(0).get_Destination().set_Y(get_Characters().get_Item$$Int32(0).get_Position().get_Y() - get_Characters().get_Item$$Int32(0).get_Speed());
        }
    },
    assemblyName: "ClientScript",
    Kind: "Class",
    definition: {
        ctor: function (){
            System.Object.ctor.call(this);
        }
    }
};
JsTypes.push(ClientScript$PlayerInput);
var _networkConnector = null;
var _characters = null;
function get_Characters(){
    return (_characters != null ? _characters : (_characters = new System.Collections.Generic.List$1.ctor(SMZLib.Character.ctor)));
};
function DefaultClient_Load(){
    _networkConnector = new ClientScript.Network.JQueryAjaxNetworkConnector.ctor();
    $(document.body).append("Ready<br/>");
    $(document.body).keydown(DocumentKeyDown);
    $(document.body).keyup(DocumentKeyUp);
    $(document.body).mousedown(DocumentMouseDown);
    $(document.body).mousedown(DocumentMouseUp);
    ConnectToServer();
    CreateCharacter();
    ClientScript.HeartBeat.Initialize();
    ClientScript.ClientRenderer.Initialize();
};
function ConnectToServer(){
    var ajaxSettings = {
        url: "localhost:1337/InitialConnection",
        cache: false,
        data: "{}",
        dataType: "",
        success: Success
    };
    _networkConnector.SendQuery("InitialConnect", null);
};
function Success(o, jsString, arg3){
    throw $CreateException(new System.NotImplementedException.ctor(), new Error());
};
function CreateCharacter(){
    if (_characters == null)
        _characters = new System.Collections.Generic.List$1.ctor(SMZLib.Character.ctor);
    var character = new SMZLib.Character.ctor();
    _characters.Add(character);
    ClientScript.ClientRenderer.CreateCharacterRenderer(character);
};
function ClearCharacters(){
    _characters = null;
    ClientScript.ClientRenderer.ClearCharacterRenderers();
};
function DocumentKeyDown(arg){
    ClientScript.PlayerInput.ProcessPlayerKeyboardInput(arg.which, true);
};
function DocumentKeyUp(arg){
    ClientScript.PlayerInput.ProcessPlayerKeyboardInput(arg.which, false);
};
function DocumentMouseDown(arg){
    console.log("Mouse button " + arg.button + " down at " + arg.clientX + ", " + arg.clientY);
    ClientScript.PlayerInput.ProcessPlayerMouseInput(arg.keyCode, arg.clientX, arg.clientY, true);
};
function DocumentMouseUp(arg){
    console.log("Mouse button " + arg.button + " up at " + arg.clientX + ", " + arg.clientY);
    ClientScript.PlayerInput.ProcessPlayerMouseInput(arg.keyCode, arg.clientX, arg.clientY, false);
};

