
function displayText(){
	var name = document.getElementById("user_name").value;
	document.getElementById("display_result").innerHTML = name;
}
function textFormat1(){
	
	document.getElementById("display_result").style.color="blue";
}

function textFormat2(){
	document.getElementById("display_result").style.fontFamily="courier";
}


function textFormat3(){
	document.getElementById("display_result").style.fontSize="30 px";
}
