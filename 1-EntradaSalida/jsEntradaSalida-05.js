function mostrar()
{
	/*
	Proposito:
		-Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
		ej.: "Usted se llama José y tiene 66 años"
		
	Precondicion:
		-Ninguna
	*/
	//Inicializa las variables con los datos que esten ingresados en sus respectivas textbox
	let nombre = txtIdNombre.value;
	let edad = txtIdEdad.value;
	
	//Imprime los datos en pantalla concatenando strings
	alert("Usted se llama " + nombre + " y tiene " + edad + " años");
}

