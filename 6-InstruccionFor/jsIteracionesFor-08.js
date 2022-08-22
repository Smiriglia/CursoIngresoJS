/******************************************************************************
Ejercicio 3

Una fabrica de muebles nos pide realizar una app para gestionar sus productos. 
El programa pide dar de alta cada venta realizada.

Se debe ingresar en cada venta.
-Nombre del mueble
-Material del mueble (Madera, Metal y Vidrio)
-Peso
-Altura
-Anchura 
-Cantidad
-Precio

Debido a la tala excesiva de árboles el gobierno pone un impuesto del 15% ante la compra de 
muebles de madera.
Los muebles de vidrio tienen un 10% de descuento.

Se pide

a)Promedio de precio por mueble vendido
b)Cantidad total de muebles de madera
c)El mueble de metal más alto 
d)El mueble más liviano
e)Porcentaje de muebles de cada tipo de material
f)Monto total recaudado bruto de todos los muebles (sin descuentos ni impuestos)
g)Monto total recaudado, pero solo de los muebles de madera(incluido descuentos e impuestos)

NOTA: Los precios no podran ser cero ni negativo.


*******************************************************************************/
function mostrar()
{
	let nombreIngresado;
	let materialIngresado;
	let pesoIngresado;
	let alturaIngresada;
	let anchuraIngresada;
	let cantidadIngresada;
	let precioIngresado;
	let respuesta;

	let promedio;
	let acumuladorPrecio;
	let acumuladorTotal;

	let acumuladorMueblesMadera;

	let muebleMetalMasAlto;
	let alturaMuebleMetalMasAlto;

	let muebleMasLiviano;
	let pesoMuebleMasLiviano;

	let acumuladorMueblesDeMetal;
	let acumuladorMueblesDeVidrio;
	let porcentajeMueblesDeMadera;
	let porcentajeMueblesDeMetal;
	let porcentajeMueblesDeVidrio;

	let precioFinal;
	let precioPorCompra;
	let aumento;
	let descuento;
	let aumentoAplicado;
	let descuentoAplicado;

	let descuentoTotal;
	let aumentoTotal;



	aumentoTotal = 0;
	descuentoTotal = 0;
	acumuladorDinero = 0;
	acumuladorMueblesDeMetal = 0;
	acumuladorMueblesDeVidrio = 0;
	acumuladorMueblesMadera = 0;
	acumuladorTotal = 0;
	acumuladorPrecio = 0;

	respuesta = true;
	while(respuesta)
	{
		nombreIngresado = prompt("Ingrese el nombre del mueble:");

		materialIngresado = prompt("Ingrese el material:")
		while(materialIngresado != "Madera" && materialIngresado != "Metal" && materialIngresado != "Vidrio")
		{
			materialIngresado = prompt("Error. Reingrese el material:")
		}

		pesoIngresado = prompt("Ingrese el peso:");
		pesoIngresado = parseFloat(pesoIngresado);

		alturaIngresada = prompt("Ingrese la altura:");
		alturaIngresada = parseFloat(alturaIngresada);

		cantidadIngresada = prompt("Ingrese la cantidad:");
		cantidadIngresada = parseInt(cantidadIngresada);
		while(cantidadIngresada < 1)
		{
			cantidadIngresada = prompt("Error. Reingrese la cantidad de goles:");
			cantidadIngresada = parseInt(cantidadIngresada);
		}

		precioIngresado = prompt("Ingrese la cantidad de goles:");
		precioIngresado = parseFloat(precioIngresado);
		while(precioIngresado < 1)
		{
			precioIngresado = prompt("Error. Reingrese la cantidad de goles:");
			precioIngresado = parseFloat(precioIngresado);
		}
		switch(materialIngresado)
		{
			case "Madera":
				acumuladorMueblesMadera += cantidadIngresada;
				descuento = 0;
				aumento = 0.15;
				break;

			case "Metal":
				if(alturaIngresada > alturaMuebleMetalMasAlto || acumuladorMueblesDeMetal == 0)
				{
					muebleMetalMasAlto = nombreIngresado;
					alturaMuebleMetalMasAlto = alturaIngresada;
				}
				acumuladorMueblesDeMetal += cantidadIngresada;
				descuento = 0;
				aumento = 0;
				
				break;

			default: //Vidrio
				acumuladorMueblesDeVidrio++;
				descuento = 0.10;
				aumento = 0;
				break;
		}
		if(pesoIngresado < pesoMuebleMasLiviano || acumuladorTotal == 0)
		{
			muebleMasLiviano = nombreIngresado;
			pesoMuebleMasLiviano = pesoIngresado; 
		}
		precioPorCompra = precioIngresado * cantidadIngresada
		acumuladorPrecio += precioPorCompra;
		acumuladorTotal += cantidadIngresada;

		descuentoAplicado = descuento * precioPorCompra;
		aumentoAplicado = aumento * precioPorCompra;

		descuentoTotal += descuentoAplicado;
		aumentoTotal += aumentoAplicado;

	}

	
	promedio = acumuladorPrecio / contador;
	porcentajeMueblesDeMadera =	acumuladorMueblesMadera  / acumuladorTotal * 100;
	porcentajeMueblesDeMetal = porcentajeMueblesDeMetal / acumuladorTotal * 100;
	porcentajeMueblesDeVidrio = porcentajeMueblesDeVidrio / acumuladorTotal * 100;
	precioFinal = acumuladorPrecio + aumentoTotal - descuentoTotal;

	console.log("El promedio de precio por mueble vendido es: " + promedio);
	console.log("La cantidad total de muebles de madera es: " + acumuladorMueblesMadera);
	console.log("El mueble de metal más alto es: " + alturaMuebleMetalMasAlto);
	console.log("El porcentaje de muebles de madera es de: " + porcentajeMueblesDeMadera);
	console.log("El porcentaje de muebles de Metal es de: " + porcentajeMueblesDeMetal);
	console.log("El porcentaje de muebles de Vidrio es de: " + porcentajeMueblesDeVidrio);

	console.log("Monto total recaudado bruto de todos los muebles es: " + acumuladorPrecio);

	console.log("Monto total recaudado: " + precioFinal);



}
/******************************************************************************
Ejercicio 3

Una fabrica de muebles nos pide realizar una app para gestionar sus productos. 
El programa pide dar de alta cada venta realizada.

Se debe ingresar en cada venta.
-Nombre del mueble
-Material del mueble (Madera, Metal y Vidrio)
-Peso
-Altura
-Anchura 
-Cantidad
-Precio

Debido a la tala excesiva de árboles el gobierno pone un impuesto del 15% ante la compra de 
muebles de madera.
Los muebles de vidrio tienen un 10% de descuento.

Se pide

a)Promedio de precio por mueble vendido
b)Cantidad total de muebles de madera
c)El mueble de metal más alto 
d)El mueble más liviano
e)Porcentaje de muebles de cada tipo de material
f)Monto total recaudado bruto de todos los muebles (sin descuentos ni impuestos)
g)Monto total recaudado, pero solo de los muebles de madera(incluido descuentos e impuestos)

NOTA: Los precios no podran ser cero ni negativo.


*******************************************************************************/