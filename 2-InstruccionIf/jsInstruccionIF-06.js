function mostrar()
{
	/*
	Proposito:
		-Al ingresar una edad debemos informar si la persona 
		 es mayor de edad (mas de 18 años)
		 o adolescente (entre 13 y 17 años)
		 o niño (menor a 13 años).
	*/
	let edadIngresada;
	//tomo la edad
	edadIngresada = document.getElementById("txtIdEdad").value;
	edadIngresada = parseInt(edadIngresada);

	if(edadIngresada > 17)
	{
		alert("Sos un adulto");
	}
	else if (edadIngresada > 12 && edadIngresada < 18) 
	{
		alert("Sos un adolescente");
	}
	else
	{
		alert("Sos un niño");
	}

}