function getdata(){
	var name=document.getElementById("name").value;
	var rollno=document.getElementById("rollno").value;
	var year=document.getElementById("year").value;
}
function pre(){
	var d=new Date();
	var pd=document.getElementById("date");
	var put=d.getDate()+"/"+d.getMonth()+"/"+d.getFullYear();
	pd.value=put;
	//alert(put);
	//pd.innerHTML=put;
}
function sendMail() {
    var link = "mailto:proffraja@gmail.com"
             + "?cc=myCCaddress@example.com"
             + "&subject=" + escape("This is my subject")
             + "&body=" + escape("test mail")
    ;

    window.location.href = link;
}

