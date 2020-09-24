
function validateForm() {
  var a = document.getElementById("my_name").value;
  var b = document.getElementById("fname").value;
  var c = document.getElementById("mname").value;
  
  if(a == "")
	{
		document.getElementById("message1").innerHTML =" * Please fill the username field";
		return false;
	}
	
	if(b == "")
	{
		document.getElementById("message2").innerHTML =" * Please fill the name field";
		return false;
	}
	
	if(a == "")
	{
		document.getElementById("message1").innerHTML =" * Please fill the username field";
		return false;
	}
	

}