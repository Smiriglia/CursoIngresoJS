/*
una agencia de viajes debe sacar las tarifas de los viajes , se cobra $15.000 por cada estadia como base,
 se pide el ingreso de una estacion del año y localidad para vacacionar para poder calcular el precio final

en Invierno: bariloche tiene un aumento del 20% cataratas y Cordoba tiene un descuento del 10% Mar del plata
 tiene un descuento del 20%

en Verano: bariloche tiene un descuento del 20% cataratas y Cordoba tiene un aumento del 10% Mar del plata tiene
 un aumento del 20%

en Otoño y Primavera: bariloche tiene un aumento del 10% cataratas tiene un aumento del 10% Mar del plata tiene
 un aumento del 10% y Cordoba tiene el precio sin descuento
*/
function mostrar()
{
	let estacionIngresada;
	let destinoIngresado;
	let mensaje;
	let precio;
	let descuento;
	let aumento;

	estacionIngresada =txtIdEstacion.value;
	destinoIngresado = txtIdDestino.value;

	precio = 15000;
	descuento = 0;
	aumento = 0;

	switch (estacionIngresada)
	{
		case "Invierno":
			switch(destinoIngresado)
			{
				case "Bariloche":
					aumento = 0.2;
				break;

				case "Cataratas":
				case "Cordoba":
					descuento = 0.1;
				break;
			
				case "Mar del plata":
					descuento = 0.2;
				break;
			}
		break;
		
		case "Verano":
			switch(destinoIngresado)
			{
				case "Bariloche":
					descuento = 0.2; 
				break;

				case "Cataratas":
				case "Cordoba":
					aumento = 0.1;
				break;
			
				case "Mar del plata":
					aumento = 0.2;
				break;
			}
		break;
	
		default:
			switch(destinoIngresado)
			{
				case "Bariloche":
				case "Cataratas":
				case "Mar del plata":
					aumento = 0.1;
				break;
			}
		break;
	}

	aumento = precio * aumento;
	descuento = precio * descuento;

	precio = precio + aumento - descuento;

	mensaje = "El precio final es de $" + precio;
	alert(mensaje);

}