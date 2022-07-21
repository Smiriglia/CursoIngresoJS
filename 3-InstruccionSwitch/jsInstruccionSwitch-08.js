/*
Al seleccionar un destino informar si hace FRIO o CALOR en ese destino
*/
function mostrar()
{
	let destinoIngresado;
	let mensaje;

	destinoIngresado =txtIdDestino.value;
	switch (destinoIngresado)
	{
		case "Cataratas":
			mensaje = "Hace calor";
			break;
		
		case "Bariloche":
			mensaje = "Hace frio";
			break;
		
		case "Ushuaia":
			mensaje = "Hace frio";
			break;

		case "Mar del plata":
			mensaje = "Hace frio";
			break;
	}

	alert(mensaje);

}