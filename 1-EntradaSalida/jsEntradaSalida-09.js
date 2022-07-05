function mostrarAumento()
{
	/*
	Proposito:
		-Debemos lograr tomar el importe por ID ,
		transformarlo a entero (parseInt), luego
		mostrar el importe con un aumento del 10 %
		en el cuadro de texto "RESULTADO".
	Precondicion:
		-El valor ingresado en la textbox debe ser de tipo numero.
	*/

	//Inicializa la variable tomando el valor de la textbox y convirtiendolo en un float.
	let sueldo = parseFloat(document.getElementById("txtIdSueldo").value);

	//Inicializa la variable calculando el 10% de la variable sueldo.
	let aumento = sueldo * 0.1;

	//Inicializa la variable sumando el sueldo con el aumento.
	let sueldoActualizado = sueldo + aumento;

	//Cambia el valor de la textbox *txtIdResultado* por el sueldo actualizado
	document.getElementById("txtIdResultado").value = sueldoActualizado;
}
