
//ingreso a la página//
let usuario = prompt("Bienvenid@, sos cliente?");
if (usuario === "si") {
    let nombre = prompt("Ingresá tu nombre");
    alert(`Hola, ${nombre}`);
}
else {
    let nuevocliente = prompt("Por favor, registráte ingresando tu nombre a continuación");
    alert(`Bienvenid@ ${nuevocliente}, conocénos`);
}

//descuento promoción nuevos clientes//
const resta = function (a, b) {
    return a - b;
};
const precioProductos = 1000;
const descuento = 10;
let preciopromocion = resta(precioProductos, descuento);
console.log(preciopromocion);



//turnos diarios//
let turno = 1;
while (turno <= 20) {
    let nombre = prompt("Ingrese su nombre y recibirá un turno para hoy:");
    alert(`${nombre}, tu turno es el numero ${turno}`);
    turno++;
}
alert("No hay mas turnos disponibles, volvé mañana");
