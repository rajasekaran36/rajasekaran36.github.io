function trimmer(toBeTrimed){
    for(let i=0;i<toBeTrimed.length;i++){toBeTrimed[i] = toBeTrimed[i].trim();}
    return toBeTrimed;
}
function displayableText(toBeDisplayed,es){
    var text = "";
    for(let i=0;i<toBeDisplayed.length;i++){text = text + toBeDisplayed[i]+es;}
    return text;
}

function getsplitup(target,splitmax){
    var splitup = splitmax;
    var sum = splitup.reduce(function(a,b){return a+b});
    while(sum!=target){
        splitup = new Array();
        for(var i=0;i<splitmax.length;i++){
            splitup.push(getRandomInt(0,splitmax[i]));
        }
        sum = splitup.reduce(function(a,b){return a+b});
    }
    return splitup;
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function dosplitup(){
    var max = document.getElementById("max").value;
    var splitmax = document.getElementById("splitmax").value.split(",");
    var target = document.getElementById("target").value.split("\n");
    target = trimmer(target);
    var  = new Array();
    var absent = new Array();
    for(let i=0;i<expected.length;i++){
        if(actual.includes(expected[i])){
            present.push(expected[i])
        }
        else{
            absent.push(expected[i]);
        }
    }
    document.getElementById("missing").value = displayableText(absent,"\n");
}