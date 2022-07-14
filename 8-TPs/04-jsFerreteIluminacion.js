/*
Smiriglia, Fausto DIV Z
Tps - Trabajo Practico Numero 4

4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 

B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 %
    y si es de otra marca el descuento es del 30%.

C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un
    descuento del 25 % y si es de otra marca el descuento es del 20%.

D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es
    “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.

E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos
    en informar del impuesto con el siguiente mensaje:
    ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
 	let cantidad;
    let marcaIngresada;
    const PRECIOINICIAL = 35;
    let precioTotal;
    let precioFinal;
    let ingresosBrutos;
    

    cantidad = document.getElementById("txtIdCantidad").value;
    cantidad = parseInt(cantidad);

    marcaIngresada = document.getElementById("Marca").value;

    precioTotal = cantidad * PRECIOINICIAL;

    //A
    if(cantidad > 5)
    {
        descuento = porcentaje(precioTotal, 50);
        precioFinal =  precioTotal - descuento;
    }
    //B
    else if(cantidad == 5)
    {
        if (marcaIngresada == "ArgentinaLuz")
        {
            descuento = porcentaje(precioTotal, 40);
            precioFinal =  precioTotal - descuento;
        }
        else
        {
            descuento = porcentaje(precioTotal, 30);
            precioFinal =  precioTotal - descuento;
        }
    }
    //C
    else if(cantidad == 4)
    {
        if (marcaIngresada == "ArgentinaLuz" || marcaIngresada == "FelipeLamparas")
        {
            descuento = porcentaje(precioTotal, 25);
            precioFinal =  precioTotal - descuento;
        }
        else
        {
            descuento = porcentaje(precioTotal, 20);
            precioFinal =  precioTotal - descuento;
        }
    }
    //D
    else if(cantidad == 3)
    {
        if(marcaIngresada == "ArgentinaLuz")
        {
            descuento = porcentaje(precioTotal, 15);
            precioFinal =  precioTotal - descuento;
        }
        else if(marcaIngresada == "FelipeLamparas")
        {
            descuento = porcentaje(precioTotal, 10);
            precioFinal =  precioTotal - descuento;
        }
        else
        {
            descuento = porcentaje(precioTotal, 5);
            precioFinal =  precioTotal - descuento;
        }
    }
    else
    {
        descuento = 0;
        precioFinal = precioTotal;
    }
    //E
    if(precioFinal > 120)
    {
        ingresosBrutos = porcentaje(precioFinal, 10);
        precioFinal = precioFinal + ingresosBrutos;
        alert(`Usted pago ${ingresosBrutos.toFixed(2)} $ de IIBB.`)
    }

    txtIdprecioDescuento.value = precioFinal.toFixed(2);
}
function porcentaje(precio, porcentaje)
{
    /*
    Proposito:
        Devuelve el porcentaje dado del precio dado.
    */
    return(precio * porcentaje/100);
}