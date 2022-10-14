function login(){
	var user, pass

	user = document.getElementById("nombre").value;
	pass = document.getElementById("contraseña").value;

	if(user == "profe" && pass == "1234"){

		alert("iniciaste")
	}
	else{
		alert("no iniciaste")
	}
}