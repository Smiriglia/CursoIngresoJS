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
		case "Febrero":
		case "Marzo":
		case "Abril":
		case "Mayo":
		case "Junio":
			mensaje = "Falta para el invierno.";
			break;
		//Invierno
		case "Julio":
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