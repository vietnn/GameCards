var GSMgr = require("GSMgr");
var Loading = require("Loading");

var UIManager = cc.Class({
    extends: cc.Component,

    properties: {
        loadingscreen: Loading,
    },
    
    statics:
    {
        instance: null,
    },
    
    onLoad()
    {
        UIManager.instance = this;
        this.MenuStack = [];
        this.CurrentMenu = null;
    },

    showLoading(display)
    {
        if (display)
            this.loadingscreen.show();
        else
            this.loadingscreen.hide();
    },
    
    showMenu(menuName, closeCurrent=true)
    {
        let menu = this.node.getChildByName(menuName);
        if (menu != null)
        {
            menu.active = true;
            this.MenuStack.push(menuName);
            this.CurrentMenu = menuName;
        }
        
        if (this.MenuStack.length > 1)
        {
            let lastMenu = this.node.getChildByName(this.MenuStack[this.MenuStack.length - 2]);
                lastMenu.active = false;

            if (closeCurrent)
                this.MenuStack.splice(this.MenuStack.length - 2,1);
        }
        return menu;
    },
    
    closeCurrentMenu()
    {
        if (this.MenuStack.length > 1)
        {
            let nextMenu = this.node.getChildByName(this.MenuStack[this.MenuStack.length-2]);
                nextMenu.active = true;
        }
        
        let menu = this.node.getChildByName(this.CurrentMenu);
            menu.active = false;
        
        this.MenuStack.splice(this.MenuStack.length-1, 1);
        this.CurrentMenu = this.MenuStack[this.MenuStack.length];
    },

    closeAllMenu()
    {
        let childs = this.node.children;
            childs.forEach(element => {
                element.active = false;
            });
    },
    
    enterRoom(roomName)
    {
        showMenu("MenuMatchRoom");
    },
});
