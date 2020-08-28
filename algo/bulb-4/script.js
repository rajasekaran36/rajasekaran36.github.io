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
    getState(){
        return this.buttonState;
    }
}

class Bulb{
    constructor(bulb){
        this.bulb = bulb;
        this.bulbState = 0;
        this.allSwitchesClosed=false;
        this.switches = [new Switch(document.getElementById("switch1")),
                         new Switch(document.getElementById("switch2")),
                         new Switch(document.getElementById("switch3")),
                         new Switch(document.getElementById("switch4"))
                        ];
        
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
        if(this.allSwitchesClosed)
            this.switchOnBulb();
        else
            this.switchOffBulb();
    }
    checkSwitches(){
        this.allSwitchesClosed = true;
        for(let i=0;i<this.switches.length;i++){
            //console.log(this.switches[i]);
            if(this.switches[i].getState()==0){
                this.allSwitchesClosed = false;
                break;
            }
        }
        this.changeStateOfTheBulb();
    }
}

var mybulb = new Bulb(document.getElementById("bulb"));

function tweekBulb(pushedButton){
    switch(pushedButton.id){
        case "switch1":
            mybulb.switches[0].push();  
        break;
        case "switch2":
            mybulb.switches[1].push();     
        break;
        case "switch3":
            mybulb.switches[2].push();     
        break;
        case "switch4":
            mybulb.switches[3].push();     
        break;
    }
    mybulb.checkSwitches();
}

function pushDown(button){
    button.setAttribute("src","pushon.png");
}
function pushUp(button){
    button.setAttribute("src","pushoff.png");
}
