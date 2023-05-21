
// //ingreso a la página//

class clientes{
    constructor(mail, apellido, dni){
        this.mail= mail;
        this.apellido= apellido;
        this.dni= dni;
    }
}
const carteraClientes =[]

let usuario = prompt("Bienvenid@, sos cliente?");
let nombre= prompt("ingrese su nombre");
if (usuario === "si"&& nombre== "nahuel"|nombre=="german"|nombre=="agustin") {
    alert(`Bienvenido${nombre}`);
    
}
else if(usuario === "si"&& nombre!= "nahuel"|"german"|"agustin"){
        alert("error");
    }
else {
    let mail= prompt("ingrese su mail");
    let apellido= prompt("ingrese su apellido")
    let dni= prompt("ingrese su dni");
   
    let nuevoCliente= new clientes(mail, apellido, dni);
    alert(`Bienvenido/a ${apellido}`);
    carteraClientes.push(nuevoCliente);
}

//descuento promoción nuevos clientes//
const resta = function (a, b) {
    return a - b;
};
const precioProductos = 1000;
const descuento = 10;
let preciopromocion = resta(precioProductos, descuento);
console.log(preciopromocion);


// //clientes//

const clienteNahuel= new clientes ("n.buccafusca@outlook.com.ar", "Buccafusca", 39266921);
const clienteGerman= new clientes ("g.montero@outlook.com.ar", "Montero", 32566921);
const clienteAgustin= new clientes ("a.miraglia@outlook.com.ar", "Miraglia", 35566921);
console.log(clienteNahuel)


carteraClientes.push(clienteNahuel);
carteraClientes.push(clienteGerman);
carteraClientes.push(clienteAgustin);
console.log(carteraClientes)

//array productos//
let capot= {nombre:"capot", numerodepieza:45635,precio:4500};
let puerta= {nombre:"puerta", numerodepieza:45636,precio:4900};
let motor= {nombre:"motor", numerodepieza:45637,precio:14500};
let caja= {nombre:"caja", numerodepieza:45638,precio:10500};

const productos=[capot,puerta,motor,caja]
console.log(productos)

//función busqueda//
let nombreproducto= prompt("ingrese el nombre del producto sobre el cual desea consultar");
const buscar= productos.find(pieza=>pieza.nombre=== nombreproducto);
if(buscar){
    alert(`Articulo: ${buscar.nombre}; numero de pieza: ${buscar.numerodepieza}; Precio ${buscar.precio}`)
}
else{alert("producto incorrecto")};

//función filtrar
let precio= parseInt(prompt("cual es el precio máximo que desea pagar?"));
const filtrado= productos.filter(preciomax=> preciomax.precio < precio);
filtrado.forEach((preciomax)=> { 
    alert (`Articulo: ${preciomax.nombre}; numero de pieza: ${preciomax.numerodepieza}; Precio ${preciomax.precio}`)
});
