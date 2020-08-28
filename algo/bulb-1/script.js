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