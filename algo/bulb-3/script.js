class Switch{
    constructor(button){
        this.button = button;
        this.buttonState = 0;
    }
    push(){
        if(this.buttonState==1){
            this.buttonState=0;
        }
        else{
            this.buttonState=1;
        }
    }
}

class Bulb{
    constructor(bulb){
        this.bulb = bulb;
        this.bulbState = 0;
        this.switch = new Switch(document.getElementById("switch1"));
    }
    switchOnBulb(){
        bulb.setAttribute("src","bulbon.png");
        this.bulbState = 1;
    }
    switchOffBulb(){
        bulb.setAttribute("src","bulboff.png");
        this.bulbState = 0;
    }
    changeStateOfTheBulb(){
        if(this.switch.buttonState == 1)
            this.switchOnBulb();
        else
            this.switchOffBulb();
    }
}

var mybulb = new Bulb(document.getElementById("bulb"));

function tweekBulb(){
    mybulb.switch.push();
    mybulb.changeStateOfTheBulb();
}

function pushDown(button){
    button.setAttribute("src","pushon.png");
}
function pushUp(button){
    button.setAttribute("src","pushoff.png");
}
/*
var bulb = document.getElementById("bulb");
var bulbswitch = document.getElementById("switch");
var bulbstatus = "off";
function pushDown(){
    bulbswitch.setAttribute("src","pushon.png");
}

function pushUp(){
    bulbswitch.setAttribute("src","pushoff.png");
}
function switchOnBulb(){
    bulb.setAttribute("src","bulbon.png");
    bulbstatus = "on";
}

function switchOffBulb(){
    bulb.setAttribute("src","bulboff.png");
    bulbstatus = "off";
}

function doBulbOperations(){
    if(bulbstatus=="off"){
        switchOnBulb();
    }
    else{
        switchOffBulb();
    }
}
*/