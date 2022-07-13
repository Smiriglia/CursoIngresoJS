function mostrar()
{
	/*
	Proposito:
		-Al ingresar una edad que sea igual a 15, mostrar el mensaje "niña bonita".
	*/
	let edadIngresada;
	//tomo la edad 
	edadIngresada = document.getElementById("txtIdEdad").value;
	edadIngresada = parseInt(edadIngresada);

	if (edadIngresada == 15)
	{
		alert("niña bonita");
	}
	

}//FIN DE LA FUNCIÓN