/*
	Smiriglia, Fausto DIV Z
	E/S Ejercicio 5
*/
function mostrar()
{
	/*
	Proposito:
		-Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
		ej.: "Usted se llama José y tiene 66 años"
		
	Precondicion:
		-Ninguna
	*/
	//Declara las variables
	let nombre;
	let edad;
	
	//Asigna el valor a las variables,con el valor ingresado en su respectiva textbox
	nombre = txtIdNombre.value
	edad = txtIdEdad.value;
	
	//Imprime los datos en pantalla concatenando strings
	alert("Usted se llama " + nombre + " y tiene " + edad + " años");
}

