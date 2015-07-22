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
