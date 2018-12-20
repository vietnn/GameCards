var GSMgr = cc.Class({
    extends: cc.Component,

    properties: {
        APIKey: cc.String,
        Secret: cc.String,
    },
    
    statics:
    {
        instance: null,
    },
    
    onLoad()
    {
        GSMgr.instance = this;
    },

    start () {
        this.Inited = false;
        this.GameSparks = new GameSparks();
		this.GameSparks.initPreview({
			key: this.APIKey, 
			secret: this.Secret,
			credential: "",
			onNonce: this.onNonce.bind(this),
			onInit: this.onInit,
			onMessage: this.onMessage,
			logger: console.log,
		});
    },
    
    onNonce(nonce)
    {
        return CryptoJS.enc.Base64.stringify(CryptoJS.HmacSHA256(nonce, this.Secret));
    },
    
    onInit()
    {
        this.Inited = true;
    },
    
    onMessage(message)
    {
        console.log("message " + JSON.stringify(message));
    },

    registrationRequest(displayName, username, password, onResponse)
    {
        var request = {};
            request["displayName"] = displayName;
            request["userName"] = username;
            request["password"] = password;
        
        this.GameSparks.sendWithData("RegistrationRequest", request, onResponse);
    },

    authenticationRequest(username, password, onResponse)
    {
        var request = {};
            request["userName"] = username;
            request["password"] = password;
        
        this.GameSparks.sendWithData("AuthenticationRequest", request, onResponse);
    },

    enterRoomRequest(gameType, roomName, onResponse)
    {
        var request = {};
            request["matchShortCode"] = gameType;
            request["matchGroup"] = roomName;
            request["skill"] = 0;
        
        this.GameSparks.sendWithData("MatchmakingRequest", request, onResponse);
    },

    createChallengeRequest(shortCode, minPlayers, maxPlayers, onResponse)
    {
        var request = {};
            request["challengeShortCode"] = shortCode;
            request["maxPlayers"] = maxPlayers;
            request["minPlayers"] = minPlayers;
            request["accessType"] = "PUBLIC";
            request["endTime"] = "2030-07-24T00:53Z";

        this.GameSparks.sendWithData("CreateChallengeRequest", request, onResponse);
    }
});
