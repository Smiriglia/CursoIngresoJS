function mostrar()
{
	let tituloIngresado;
	let generoIngresado;
	let materialIngresado;
	let importeIngresado;
	let respuesta;

	let tituloLibroBarato
	let importeLibroBarato;

	let tituloLibroCaro;
	let importeLibroCaro;

	let contadorDrama;
	let contadorTerror;
	let contadorCF;
	let porcentajeDrama;
	let porcentajeTerror;
	let porcentajeCF;
	let contador;

	let contadorCFMenorA700;

	contadorDrama = 0;
	contadorTerror = 0
	contadorCF = 0;
	contador = 0;
	contadorCFMenorA700 = 0;

	respuesta = true;
	while(respuesta)
	{
		tituloIngresado = prompt("Ingrese el titulo");

		generoIngresado = prompt("Ingrese el genero");
		while(generoIngresado != "ciencia ficcion" && generoIngresado != "Drama" && generoIngresado != "Terror")
		{
			generoIngresado = prompt("Error. Reingrese el genero");
		}

		materialIngresado = prompt("Ingrese el material");
		while(materialIngresado != "rustica" && materialIngresado != "tapa dura")
		{
			materialIngresado = prompt("Error. Reingrese el material");
		}

		importeIngresado = prompt("Ingrese el importe");
		importeIngresado = parseFloat(importeIngresado);
		while(importeIngresado < 0 || importeIngresado > 30000)
		{
			importeIngresado = prompt("Error. Reingrese el importe");
		}

		if(importeIngresado > importeLibroCaro || contador == 0)
		{
			tituloLibroCaro = tituloIngresado;
			importeLibroCaro = importeIngresado;
		}
		switch (generoIngresado)
		{
			case "Drama":
				if(importeIngresado < importeLibroBarato || contadorDrama == 0)
				{
					importeLibroBarato = importeIngresado;
					tituloLibroBarato = tituloIngresado;
				}
				contadorDrama++;
				break;

			case "Terror":
				contadorTerror++;
				break;

			default://Ciencia Ficcion
				if(importeIngresado < 700)
				{
					contadorCFMenorA700++;
				}
				contadorCF++;
				break;
		}
		contador++;
		respuesta = confirm("Quiere seguir ingresando libros:");
	}
	porcentajeDrama = contadorDrama * 100 / contador;
	porcentajeTerror = contadorTerror * 100 / contador;
	porcentajeCF = contadorCF * 100 / contador;

	//A
	if(contadorDrama > 0)
	{
		console.log("El libro más barato de drama es: " + tituloLibroBarato);
		console.log("El importe del libro mas barato es de: " + importeLibroBarato.toFixed(2));
	}
	else
	{
		console.log("No se ha ingresado ningun libro de drama");
	}
	//B
	console.log("El titulos del libro mas caro es: " + tituloLibroCaro);
	//C
	console.log("El porcentaje de libros de Drama es de : " + porcentajeDrama.toFixed(2));
	console.log("El porcentaje de libros de Terror es de : " + porcentajeTerror.toFixed(2));
	console.log("El porcentaje de libros de Ciencia Ficcion es de : " + porcentajeCF.toFixed(2));
	//D
	console.log("La cantidad de libros que sean de ciencia ficción y cuesten menos de $700 es de: " + contadorCFMenorA700)
}
/*Ejercicio 2

Una librería que se especializa en venta de libros importados desea calcular ciertas métricas en base
a las ventas de sus productos.
Se ingresa de cada venta:
Título del libro
Género: (ciencia ficción – Drama – Terror)
Material del libro (rústica – tapa dura)
Importe (No pueden ser números negativos ni mayor a los 30000)
Se pide:                          	
a) El libro más barato de drama con su importe.
b) Del libro más caro, el título.
c) Porcentaje de libros de cada género
d) La cantidad de libros que sean de ciencia ficción y cuesten menos de $700.
*/