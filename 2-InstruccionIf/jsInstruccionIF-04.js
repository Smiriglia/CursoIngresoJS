function mostrar()
{
	/*
	Proposito:
		-Al ingresar una edad debemos informar si la persona es
		 adolescente, edad entre 13 y 17 años (inclusive).
	*/
	let edadIngresada;
	//tomo la edad
	edadIngresada = document.getElementById("txtIdEdad").value;
	edadIngresada = parseInt(edadIngresada);

	if (edadIngresada >= 13 && edadIngresada <= 17) 
	{
		alert("Sos un adolescente");
	}


}//FIN DE LA FUNCIÓN