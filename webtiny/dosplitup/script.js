function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}
function doSplitup(){
  let targetSplitUp = document.getElementById("splitmax").value.split(",").map(Number);
  let maxValue = targetSplitUp.reduce((total, arg) => total + arg, 0);
  document.getElementById("max").value = maxValue;
  //console.log(maxValue);

  let targets = document.getElementById("target").value.split("\n").map(Number);
  let resultSplitup = [];
  for(let i=0;i<targets.length;i++){
    let current = targets[i];
    let toReduce = maxValue - current;
    let currentSplitup = targetSplitUp.slice();
    
    for(let j=0;j<toReduce;j++){
      let index = -1;
      do{
        index = getRandomNumber(0,currentSplitup.length);
      }while((currentSplitup[index]-1)<0);
      currentSplitup[index]-=1;
    }
    resultSplitup.push(currentSplitup);
  }
  let result = "";
  for(let i=0;i<resultSplitup.length;i++){
    result += resultSplitup[i].join(",") + "\n";
  }
  document.getElementById("splitup").value = result;
}

function setSplitup(){
  
}