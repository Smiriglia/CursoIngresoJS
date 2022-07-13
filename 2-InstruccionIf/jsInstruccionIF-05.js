function mostrar()
{
	/*
	Proposito:
		-Al ingresar una edad solo debemos informar si la persona NO es adolescente.
	*/
	let edadIngresada;
	//tomo la edad
	edadIngresada = document.getElementById("txtIdEdad").value;
	edadIngresada = parseInt(edadIngresada);

	if (edadIngresada < 13 || edadIngresada > 17) 
	{
		alert("No sos un adolescente");
	}
}//FIN DE LA FUNCIÓN