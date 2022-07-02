function mostrar()
{
	/*
	Proposito:
		-Debemos lograr tomar un dato por 'ID'
		y luego mostrarlo por 'Alert' al presionar el botón  'mostrar'
	
	Precondicion:
		-Ninguna
	*/

	//Toma el dato de la textbox y lo almacena en una variable
	let nombreIngresado = document.getElementById("txtIdNombre").value;

	//Imprime la informacion recibida en pantalla
	alert(nombreIngresado);
}