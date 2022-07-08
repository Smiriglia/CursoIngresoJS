/*
	Smiriglia, Fausto DIV Z
	E/S Ejercicio 9
*/
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

	//declara las variables
	let sueldo;
	let porcentajeIngresado;
	let aumento;
	let sueldoActualizado;

	porcentajeIngresado = parseFloat(prompt("Ingrese el porcentaje de aumento:"));

	//asigna a la variable el valor de la textbox y convirtiendolo en un float.
	sueldo = parseFloat(document.getElementById("txtIdSueldo").value);

	//Asigna la variable con el 10%(10/100) de la variable sueldo.
	aumento = sueldo * porcentajeIngresado / 100;

	//asigna la variable con la suma del sueldo con el aumento.
	sueldoActualizado = sueldo + aumento;

	//Cambia el valor de la textbox *txtIdResultado* por el sueldo actualizado
	document.getElementById("txtIdResultado").value = sueldoActualizado;
}
