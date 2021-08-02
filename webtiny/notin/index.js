function trimmer(toBeTrimed){
    for(let i=0;i<toBeTrimed.length;i++){toBeTrimed[i] = toBeTrimed[i].trim();}
    return toBeTrimed;
}
function displayableText(toBeDisplayed,es){
    var text = "";
    for(let i=0;i<toBeDisplayed.length;i++){text = text + toBeDisplayed[i]+es;}
    return text;
}
function process(){
    var expected = document.getElementById("expected").value.split("\n");
    var actual = document.getElementById("actual").value.split("\n");
    var missing = document.getElementById("missing").value.split("\n");
    /* console.log(expected);
    console.log(actual);
    console.log(missing); */
    expected = trimmer(expected);
    actual = trimmer(actual);
    var present = new Array();
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