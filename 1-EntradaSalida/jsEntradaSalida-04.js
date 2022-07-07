/*
	Smiriglia, Fausto DIV Z
	E/S Ejercicio 4
*/
function mostrar()
{
	/* 
	Proposito:
		-Debemos lograr tomar un dato por 'PROMPT' 
		y lo muestro por 'ID' al presionar el botón 'mostrar'

	Precondicion:
		-Ninguna
	*/

	//Declara una variable asignandole un valor con un prompt y 
	let nombreIngresado = prompt("Ingrese su nombre:");

	//Se le asigna el valor del textbox el valor de variable ingresada.
	txtIdNombre.value = nombreIngresado;
}