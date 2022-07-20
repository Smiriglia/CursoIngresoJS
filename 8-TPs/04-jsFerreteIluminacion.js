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
    let precioInicial;
    let precioFinal;
    let ingresosBrutos;
    let porcentajeDeDescuento;
    let descuento;
    

    cantidad = document.getElementById("txtIdCantidad").value;
    cantidad = parseInt(cantidad);

    marcaIngresada = document.getElementById("Marca").value;

    precioInicial = cantidad * 35;

    //A
    if(cantidad > 5)
    {
        porcentajeDeDescuento = 50;
    }
    //B
    else if(cantidad == 5)
    {
        if (marcaIngresada == "ArgentinaLuz")
        {
            porcentajeDeDescuento = 40;
        }
        else
        {
            porcentajeDeDescuento = 30;
        }
    }
    //C
    else if(cantidad == 4)
    {
        if (marcaIngresada == "ArgentinaLuz" || marcaIngresada == "FelipeLamparas")
        {
            porcentajeDeDescuento = 25;
        }
        else
        {
            porcentajeDeDescuento = 20;
        }
    }
    //D
    else if(cantidad == 3)
    {
        if(marcaIngresada == "ArgentinaLuz")
        {
            porcentajeDeDescuento = 15;
        }
        else if(marcaIngresada == "FelipeLamparas")
        {
            porcentajeDeDescuento = 10;
        }
        else
        {
            porcentajeDeDescuento = 5;
        }
    }
    else
    {
        porcentajeDeDescuento = 0;
    }

    descuento = precioInicial * porcentajeDeDescuento / 100;
    precioFinal =  precioInicial - porcentajeDeDescuento;
    
    //E
    if(precioFinal > 120)
    {
        ingresosBrutos = precioFinal * 10 / 100;
        precioFinal = precioFinal + ingresosBrutos;
        alert(`Usted pago ${ingresosBrutos.toFixed(2)} $ de IIBB.`)
    }

    txtIdprecioDescuento.value = precioFinal.toFixed(2);
}