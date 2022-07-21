/*
al seleccionar un mes informar.
si tiene 28 días. Febrero
si tiene 30 días. Abril, Junio, Septiembre y Noviembre.
si tiene 31 días. Enero, Marzo, Mayo, Julio, Agosto, Octubre y Diciembre.
*/
function mostrar()
{
	//tomo el mes
	let mesIngresado  = txtIdMes.value;
	let mensaje;
	
	switch (mesIngresado)
	{
		case "Febrero":
			mensaje = "Este mes tiene 28 días";
			break;
		
		case "Abril":
		case "Junio":
		case "Septiembre":
		case "Noviembre":
			mensaje = "Este mes tiene 30 días";
			break;
		
		default:
			mensaje = "Este mes tiene 31 días";
			break;
	}

	alert(mensaje);
}