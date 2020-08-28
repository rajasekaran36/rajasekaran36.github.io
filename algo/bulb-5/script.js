class Switch{
    constructor(button){
        this.button = button;
        this.buttonState = Math.round(Math.random());
    }
    push(){
        if(this.buttonState==1){
            this.buttonState=0;
        }
        else{
            this.buttonState=1;
        }
        updateNoPushes();
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
        //this.switchSates = [[Math.round(Math.random()),Math.round(Math.random()),Math.round(Math.random()),Math.round(Math.random())]];
        this.switches = [new Switch(document.getElementById("switch1")),
                         new Switch(document.getElementById("switch2")),
                         new Switch(document.getElementById("switch3")),
                         new Switch(document.getElementById("switch4"))
                        ];
        this.switchSates = [[this.switches[0].getState(),this.switches[1].getState(),this.switches[2].getState(),this.switches[3].getState()]];
        
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
        this.switchSates.unshift([this.switches[0].getState(),this.switches[1].getState(),this.switches[2].getState(),this.switches[3].getState()]);
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
    updateTable(){
        var stateTable = document.getElementById("statetable");
        var tableContent = "<table id='statetable'><tr><th>PushButton 4</th><th>PushButton 3</th><th>PushButton 2</th><th>PushButton 1</th></tr>";
        for(var i=0;i<this.switchSates.length;i++){
            tableContent = tableContent + "<tr>";
            for(var j=0;j<this.switchSates[i].length;j++){
                tableContent = tableContent + "<td>"+this.switchSates[i][j]+"</td>";
            }
            tableContent = tableContent + "</tr>";
        }
        stateTable.innerHTML = tableContent;
    }
}

var mybulb = new Bulb(document.getElementById("bulb"));
var noOfPushes = 0;
mybulb.updateTable();
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
    mybulb.updateTable();
}
function updateNoPushes(){
    noOfPushes = noOfPushes + 1;
    document.getElementById("noofpushes").innerHTML = noOfPushes;
}
function pushDown(button){
    button.setAttribute("src","pushon.png");
}
function pushUp(button){
    button.setAttribute("src","pushoff.png");
}
