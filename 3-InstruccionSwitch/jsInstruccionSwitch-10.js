/*
una agencia de viajes nos piden informar si hacemos viajes a lugares según la estación del año estemos,
informar si "Se viaja" o "No se viaja" a ese lugar

en Invierno: Solo Bariloche informa "se viaja" los demas destinos "No se viaja"

en Verano: Se viaja a Mar del plata y Cataratas solamente

en Otoño: Se viaja a todos los destinos.

primavera: solo no se viaja a Bariloche

*/
function mostrar()
{
	let estacionIngresada;
	let destinoIngresado;
	let mensaje;

	estacionIngresada =txtIdEstacion.value;
	destinoIngresado = txtIdDestino.value;

	switch (estacionIngresada)
	{
		case "Invierno":
			switch(destinoIngresado)
			{
				case "Bariloche":
					mensaje = "Se viaja";
				break;
				
				default:
					mensaje = "No se viaja";
				break;
			}
		break;

		case "Verano":
			switch(destinoIngresado)
			{
				case "Mar del plata":
				case "Cataratas":
					mensaje = "Se viaja"
				break;

				default:
					mensaje = "No se viaja";
				break;
			}
		break;

		case "Otoño":
			mensaje = "Se viaja";
		break;

		default:
			switch(destinoIngresado)
			{
				case "Bariloche":
					mensaje = "No se viaja";
				break;
				
				default:
					mensaje = "Se viaja";
				break; 
			}

	}

	alert(mensaje);

}