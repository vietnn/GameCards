var MenuScene = require("MenuScene");
var UIManager = require("UIManager");

cc.Class({
    extends: MenuScene,

    properties: {
        
    },

    onSignoutPressed()
    {
        
    },
    
    onFriendPressed()
    {
        
    },
    
    onProfilePressed()
    {
        
    },
    
    onSettingPressed()
    {
        
    },
    
    onInboxPressed()
    {
        
    },
    
    onHomePressed()
    {
        
    },
    
    onInAppPurchasePressed()
    {
        
    },
    
    onLeaderboardPressed()
    {
        
    },
    
    onRewardPressed()
    {
        
    },
    
    enterChatRoom(event, customData)
    {
        let menu = UIManager.instance.showMenu("MenuMatchRoom").getComponent("MenuScene");
            menu.load(customData);
    }
});
