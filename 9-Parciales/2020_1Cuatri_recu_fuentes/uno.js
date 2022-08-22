function mostrar()
{
	let nombreIngresado;
	let edadIngresada;
	let cantidadAsientosIngresados;
	let kmViajeIngresados;
	let destinoIngresado;

	let acumuladorDeAsientosOcupados;
	let recaudacionBruta;

	let promedioEdad;
	let acumuladorEdad;
	let contador;

	let aumentoAAplicar;
	let aumentoAplicado;
	let aumentoTotal;
	let descuentoAAplicar;
	let descuentoAplicado;
	let descuentoTotal;
	let precioFinal;
	
	let respuesta;

	contador = 0;
	acumuladorEdad = 0;
	descuentoTotal = 0;
	acumuladorDeAsientosOcupados = 0;
	respuesta = true;
	descuentoAAplicar = 0;
	aumentoAAplicar = 0;
	aumentoTotal = 0;

	while(respuesta)
	{
		nombreIngresado = prompt("Ingrese su nombre:");

		edadIngresada = prompt("Ingrese su edad");
		edadIngresada = parseInt(edadIngresada);
		while(edadIngresada < 13 || edadIngresada > 85)
		{
			edadIngresada = prompt("Error. Reingrese su edad");
			edadIngresada = parseInt(edadIngresada);
		}

		cantidadAsientosIngresados = prompt("Ingrese la cantidad de asientos a reservar");
		cantidadAsientosIngresados = parseInt(cantidadAsientosIngresados);
		while(cantidadAsientosIngresados < 1 || cantidadAsientosIngresados > 5)
		{
			cantidadAsientosIngresados = prompt("Error. Reingrese la cantidad de asientos a reservar");
			cantidadAsientosIngresados = parseInt(cantidadAsientosIngresados);
		}

		kmViajeIngresados = prompt("Ingrese la cantidad km a viajar");
		kmViajeIngresados = parseInt(kmViajeIngresados);
		while(kmViajeIngresados < 3000 || kmViajeIngresados > 18000)
		{
			kmViajeIngresados = prompt("Error. Reingrese la cantidad km a viajar");
			kmViajeIngresados = parseInt(kmViajeIngresados);
		}

		destinoIngresado = prompt("Ingrese el destino:")
		while(destinoIngresado != "rio de janeiro" && destinoIngresado != "italia" && destinoIngresado != "cancun" && destinoIngresado != "japon")
		{
			destinoIngresado = prompt("Error. Reingrese el destino:")
		}
		switch(destinoIngresado)
		{
			case "japon":
				aumentoAAplicar = 0.4;
				break;
			case "rio de janeiro":
				descuentoAAplicar = 0.1;
				break;
			case "italia":
				aumentoAAplicar = 0.25;
				break;
			case "cancun":
				descuentoAAplicar = 0.05;
				break;
		}

		aumentoAplicado = (cantidadAsientosIngresados * 1500) * aumentoAAplicar;
		descuentoAplicado = (cantidadAsientosIngresados * 1500) * descuentoAAplicar;
		descuentoTotal += descuentoAplicado; 
		aumentoTotal += aumentoAplicado;

		acumuladorEdad += edadIngresada;
		acumuladorDeAsientosOcupados += cantidadAsientosIngresados;
		contador++;

		respuesta = confirm("¿Quiere seguir ingresando?")
	}
	recaudacionBruta = acumuladorDeAsientosOcupados * 1500;
	promedioEdad = acumuladorEdad / contador;

	precioFinal = recaudacionBruta + aumentoTotal - descuentoTotal;

	//A
	console.log("la recaudación total bruta del vuelo es de: " + recaudacionBruta);
	//B
	console.log("la cantidad total asientos ocupados es de: " + acumuladorDeAsientosOcupados);
	//C
	console.log("la edad promedio por pasajero es de: " + promedioEdad);
	//D
	console.log("El precio Final es de: " + precioFinal + "$");
}
/*Ejercicio 3

UTN airlines nos pide desarrollar una app para registrar el ingreso de pasajeros a distintos vuelos, 
se le pide a los pasajeros: nombre, edad (validar 13-85), cantidad de asientos que desea reservar 
(validar minimo 1 maximo 5 asientos), cantidad de kilómetros del viaje (validar 3000 kilómetros 
el mínimo - 18000 kilómetros máximo) y el destino (validar río de janeiro, italia, cancún, japón), 
el precio por asiento es 1500 pesos, informar:
1) la recaudación total bruta del vuelo
2) la cantidad total asientos ocupados
3) la edad promedio por pasajero
4) El precio Final:
Tener en cuenta que:

dependiendo el destino seleccionado se aplican aumentos o descuentos según corresponda:
japón 40% de aumento
rio 10% descuento
italia 25% aumento
cancún 5% descuento

según la cantidad de asientos reservados se aplican ciertos descuentos sobre el PRECIO FINAL:
1 pasajero 10% descuento
2-3 pasajeros 15% descuento
4-5 pasajeros 20% descuento

*/