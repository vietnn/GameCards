var MenuScene = require("MenuScene");
var GSMgr = require("GSMgr");

cc.Class({
    extends: MenuScene,

    properties: {
        
    },

    load(roomType, room=0)
    {
        this.roomType = roomType;
        this.roomName = "Room_" + room;
        GSMgr.instance.enterRoomRequest(this.roomType, this.roomName, this.onEnterRoomCallback);
    },

    onEnterRoomCallback(response)
    {
        console.log("enterRoom " + response);
    }
});
