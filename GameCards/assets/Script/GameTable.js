var GSMgr = require("GSMgr");

cc.Class({
    extends: cc.Component,

    properties: {
        
    },
    
    onLoad()
    {
        this.ChallengeID = "";
    },

    onClicked()
    {
        if (this.ChallengeID == "")
        {
            let shortCode = "Kill_13";
            let minPlayers = 2;
            let maxPlayers = 4;
            
            GSMgr.instance.createChallengeRequest(shortCode, minPlayers, maxPlayers, function(res){
                console.log("Create Challenge res " + res);
            });
        }
    }
});
