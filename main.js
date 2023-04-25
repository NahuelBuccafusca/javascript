
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
    //     return a - b;
};
const precioproductos = 1000;
const descuento = 10;
let preciopromocion = resta(precioproductos, descuento);
console.log(resta(precioproductos, descuento));

//turnos diarios//
for (let turno = 1; turno <= 20; turno++) {
    let nombre = prompt("ingrese su numbre y recibirá un turno para hoy");
    alert(`${nombre}, tu turno es el numero ${turno}`);
}
alert("No hay mas turnos disponibles, volvé mañana");