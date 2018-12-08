var MenuScene = require("MenuScene");

var MenuState = cc.Enum({
    LOGIN: 0,
    REGISTER: 1
})

var GSMgr = require("GSMgr");
var UIManager = require("UIManager");

cc.Class({
    extends: MenuScene,

    properties: {
        loginTab: cc.Button,
        registerTab: cc.Button,
        username: cc.EditBox,
        password: cc.EditBox,
        password2: cc.EditBox,
        loginButton: cc.Node,
        loginExtension: cc.Node,
        registerButton: cc.Node,
    },

    start () {
        this.currentState = MenuState.REGISTER;
        this.setDisplay(MenuState.LOGIN);
    },
    
    setDisplay(state)
    {
        if (state != this.currentState)
        {
            switch(state)
            {
                case MenuState.LOGIN:
                    {
                        this.loginTab.interactable = false;
                        this.registerTab.interactable = true;
                        this.registerButton.active = false;
                        this.password2.node.active = false;
                        this.loginButton.active = true;
                        this.loginExtension.active = true;
                    }
                    break;
                case MenuState.REGISTER:
                    {
                        this.loginTab.interactable = true;
                        this.registerTab.interactable = false;
                        this.registerButton.active = true;
                        this.password2.node.active = true;
                        this.loginButton.active = false;
                        this.loginExtension.active = false;
                    }
                    break;
            }
            this.currentState = state;
        }
    },
    
    onLoginTabPress()
    {
        this.setDisplay(MenuState.LOGIN);
    },
    
    onRegisterTabPress()
    {
        this.setDisplay(MenuState.REGISTER);
    },
    
    onLoginButtonPressed()
    {
        this.tryLogin(this.username.string, this.password.string);
    },
    
    onFBLoginPressed()
    {
        
    },
    
    onRegisterButtonPressed()
    {
        UIManager.instance.showLoading(true);
        if (this.username.string.length > 0)
        {
            if (this.password.string.length > 0 && this.password.string == this.password2.string)
            {
                let displayName = "Anh Dinh"; //hardcore
                GSMgr.instance.registrationRequest(displayName, this.username.string, this.password.string, this.onRegisterResponse);
            }
        }
    },
    
    onRegisterResponse(response)
    {
        console.log(response);
        if (!response.error) //register success
        {
            this.tryLogin(this.username.string, this.password.string);
        }
        else
        {
            //TO-DO: handle register error
        }
    },
    
    tryLogin(username, password)
    {
        UIManager.instance.showLoading(true);
        GSMgr.instance.authenticationRequest(username, password, this.onLoginResponse);
    },
    
    onLoginResponse(response)
    {
        console.log(response);
        if (!response.error)
        {
            UIManager.instance.showMenu("MenuGame");
        }
        else
        {
            //TO-DO: handle login error
        }
        UIManager.instance.showLoading(false);
    }
});
