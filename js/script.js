/*
Salidas grupales - 03 destinos
- Cordoba - aereo 10.000 por persona 
- Mendoza - aereo 20.000 por persona
- Salta - aereo 30.000 por persona

Maximo 9 pasajeros por compra
*/



let bienvenida = alert ("Hola! Estas ingresando a nuestro portal coorporativo")


for (let i = 1; i <= 3; i ++) {

    let usuario = prompt("Ingrese su usuario").toLowerCase(); // aalvarez

    let clave = prompt("Ingrese su clave").toLowerCase(); // clave


    if (usuario == "aalvarez" && clave == "clave") {
    alert("Bienvenid@" + " " + usuario);
    break;
    }else{
    alert("Ingresaste datos inválidos");
    } if (i==3){
        alert("Cuenta bloqueada")
    };   
}


function comprar(tarifa,fechaUno,fechaDos){
    let cantidad = parseInt(prompt("¿Cuántas personas viajan? (Máximo 09 pasajeros por reserva)"));
    
    while (cantidad >=10 ) {
        cantidad = parseInt(prompt("Superaste la cantidad maxima permitida de pasajeros por reserva (Máximo 09 pasajeros por reserva) Volvé a ingresar"));
      } 
     let fecha =   prompt ("Elegi fecha de salida "+fechaUno + " " + fechaDos);
     if(fecha >= 3 ){
        alert("Ingrese un valor válido. Ese valor no está en nuestras opciones")
     } else {
        alert("Precio final: $" + ( tarifa * cantidad));
        alert ("Muchas gracias por tu reserva. El precio total se acreditará directamente en tu cuenta corriente")
    };
    }


let destino;
let fechas;

do {

    let opciones = prompt("Ofertas válidas para el mes de NOVIEMBRE 2024. Ingresá 1 para reservar CORDOBA ($10000); ingresá 2 para reservar MENDOZA ($20000); ingresá 3 para reservar SALTA ($30000). Las tarifas son por pasajero. Para salir ingrese 0");

    if (opciones== null){
    alert ("Gracias por elegirnos");
    break;
    } else if(opciones >=3){
    alert ("Ingrese un valor válido. Ese valor no está en nuestras opciones");
    break;
    }else 

    destino = parseInt(opciones);

    switch (destino) {
        case 0:
            alert("Gracias por tu interés! Te esperamos en nuestra próxima promoción.");
            break;
        case 1:
            comprar(10000, "1.Viernes 1/11/24","2.Viernes 8/11/24");
            opcion =0;
            break;
        case 2:
            comprar(20000, "1.Sábado 2/11/24","2.Sábado 9/11/24");
            opcion =0;
            break;
        case 3:
            comprar(30000, "1.Domingo 3/11/24","2.Domingo 10/11/24");
            opcion =0;
            break;
        default:
            alert("Ingrese un valor válido. Ese valor no está en nuestras opciones");
            break;
         }

        

}  while (opcion !== 0);
