var UIManager = require("UIManager");

cc.Class({
    extends: cc.Component,

    properties: {
        
    },

    // onLoad () {},

    start () {
        //UIManager.instance.closeAllMenu();
        UIManager.instance.showMenu("MenuLogin");
    },
});
