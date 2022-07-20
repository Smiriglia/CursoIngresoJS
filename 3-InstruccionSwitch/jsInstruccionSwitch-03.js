/*
al seleccionar un mes informar.
si es Febrero: " Este mes no tiene más de 29 días."
si NO es Febrero: "Este mes tiene 30 o más días"
*/
function mostrar()
{
	//tomo el mes
	let mesIngresado = txtIdMes.value;
	let mensaje;

	switch (mesIngresado)
	{
		case "Febrero":
			mensaje = "Este mes no tiene más de 29 días.";
			break;
		
		default:
			mensaje = "Este mes tiene 30 o más días";
	}
	
	alert(mensaje);
}