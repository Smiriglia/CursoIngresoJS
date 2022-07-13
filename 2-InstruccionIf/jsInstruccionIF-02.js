function mostrar()
{
	/*
	Proposito:
		-Al ingresar una edad debemos informar solo si la persona es mayor de edad
	*/
	let edadIngresada;
	//tomo la edad
	edadIngresada = document.getElementById("txtIdEdad").value;
	edadIngresada = parseInt(edadIngresada);

	if (edadIngresada >= 18)
	{
		alert("Sos mayor de edad");
	}
}//FIN DE LA FUNCIÓN