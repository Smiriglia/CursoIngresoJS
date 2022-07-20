/*
al seleccionar un mes informar.
si estamos en Invierno: "Abrigate que hace frio."
si aún no llego el Invierno: "Falta para el invierno."
si ya paso el Invierno: "Ya pasamos el frio, ahora calor!!!."
ACLARAcIÓN: tomamos a Julio y Agosto como los meses de Invierno.
*/
function mostrar()
{
	//tomo el mes
	let mesIngresado =txtIdMes.value;
	let mensaje;

	switch (mesIngresado)
	{
		//Antes de invierno
		case "Enero":
			mensaje = "Falta para el invierno.";
			break;
		
		case "Febrero":
			mensaje = "Falta para el invierno.";
			break;
		
		case "Marzo":
			mensaje = "Falta para el invierno.";
			break;
		
		case "Abril":
			mensaje = "Falta para el invierno.";
			break;
		
		case "Junio":
			mensaje = "Falta para el invierno.";
			break;

		//Invierno
		case "Julio":
			mensaje = "Abrigate que hace frio.";
			break;
		
		case "Agosto":
			mensaje = "Abrigate que hace frio.";
			break;

		//Pasado invierno
		default:
			mensaje = "Ya pasamos el frio, ahora calor!!!.";
			break;

	}
	alert(mensaje);




}//FIN DE LA FUNCIÓN