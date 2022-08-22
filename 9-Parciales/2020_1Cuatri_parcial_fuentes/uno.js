/*
Debemos realizar la carga de 5(cinco) productos de prevención de contagio,
de cada una debo obtener los siguientes datos:
el tipo (validar "barbijo" , "jabón" o "alcohol") ,
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
la Marca y el fabricante.
Se debe Informar al usuario lo siguiente:
a) Del más barato de los alcohol, la cantidad de unidades y el fabricante
b) Del tipo con mas unidades, el promedio por compra
c) Cuántas unidades de jabones hay en total
*/
function mostrar()
{
	//planteo
	var contador;
	var tipoIngresado;
	var precioIngresado;
	var cantidadIngresada;
	var marcaIngresada;
	var fabricanteIngresado;
	//A 
	var precioAlcoholBarato;
	var cantidadAlcoholBarato;
	var fabricanteAlcoholBarato;
	//B
	var tipoConMasUnidades;
	var cantidadAlcohol;
	var cantidadBarbijo;
	var cantidadJabon;
	var contadorAlcohol;		
	var contadorBarbijo;
	var contadorJabon;
	var cantidadTipoConMasUnidades;
	var promedioTipoConMasUnidades;

	cantidadAlcohol = 0;
	cantidadBarbijo	= 0;
	cantidadJabon = 0;
	contadorAlcohol = 0;
	contadorBarbijo = 0;
	contadorJabon = 0;
	
	esPrimerAlcohol = true;
	contador = 0;
	while(contador <5)
	{
		tipoIngresado = prompt("Ingrese un producto");
		while(tipoIngresado != "barbijo" && tipoIngresado != "jabón" && tipoIngresado != "alcohol");
		{
			tipoIngresado = prompt("Error, ingrese un producto");
		}

		precioIngresado = prompt("Ingrese precio del producto");
		precioIngresado = parseInt(precioIngresado);
		while(precioIngresado < 100 || precioIngresado > 300)
		{
			precioIngresado = prompt("Error reingrese precio del producto");
			precioIngresado = parseInt(precioIngresado);
		}

		cantidadIngresada = prompt("Ingrese cantidad de unidades");
		cantidadIngresada = parseInt(cantidadIngresada);
		while(cantidadIngresada < 1 || cantidadIngresada > 1000)
		{
			cantidadIngresada = prompt("Error reingrese cantidad de unidades");
			cantidadIngresada = parseInt(cantidadIngresada);
		}
		marcaIngresada = prompt("Ingrese la marca del producto");
		fabricanteIngresado = prompt("Ingrese fabricante del producto");

		//a) Del más barato de los alcohol, la cantidad de unidades y el fabricante
		
		//b) Del tipo con mas unidades, el promedio por compra
		switch (tipoIngresado) {
			case "barbijo":
				cantidadBarbijo = cantidadIngresada + cantidadBarbijo;
				contadorBarbijo++;
				break;

			case "jabón":
				cantidadJabon = cantidadIngresada + cantidadJabon;
				contadorJabon++;
				break;

			case "alcohol":
				cantidadAlcohol = cantidadIngresada + cantidadAlcohol;
				if(precioIngresado < precioAlcoholBarato || contador == 0)
				{
					precioAlcoholBarato = precioIngresado;
					cantidadAlcoholBarato = cantidadIngresada;
					fabricanteAlcoholBarato = fabricanteIngresado;
				}
				contadorAlcohol++;
				break;
		}
		contador++;
	}

	if(cantidadBarbijo > cantidadJabon && cantidadBarbijo > cantidadAlcohol)
	{
		tipoConMasUnidades = "barbijo";
		cantidadTipoConMasUnidades = cantidadBarbijo;
		promedioTipoConMasUnidades = cantidadTipoConMasUnidades / contadorBarbijo;
	}
	else
	{
		if(cantidadJabon > cantidadAlcohol)
		{
			tipoConMasUnidades = "jabón";
			cantidadTipoConMasUnidades = cantidadJabon;
			promedioTipoConMasUnidades = cantidadTipoConMasUnidades / contadorJabon;
		}
		else
		{
			tipoConMasUnidades = "alcohol";
			cantidadTipoConMasUnidades = cantidadAlcohol;
			promedioTipoConMasUnidades = cantidadTipoConMasUnidades / contadorAlcohol;
		}
	}
	


//A
	if(contadorAlcohol > 0)
	{
		console.log("La cantidad de unidades del alcohol mas barato es: " + cantidadAlcoholBarato);
		console.log("El fabricante del alcohol mas barato es: " + fabricanteAlcoholBarato);
	}
	else
	{
		console.log("No se ha ingresado ningun alcohol")
	}
//B
	console.log("El tipo con mas unidades es: " + tipoConMasUnidades);
	console.log("El promedio por compra es: " + promedioTipoConMasUnidades);
//C
	console.log("La cantiad de jabon es: " + cantidadJabon);
	

	
}