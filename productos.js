//array productos//
const listaproductos= document.getElementById("listaproductos");
const contenedor= document.getElementById("contenedor");
const vercarrito= document.getElementById("vercarrito");


let capot= {id:1, nombre:"llanta", numerodepieza:45635,precio:4500, imagen:"./images/llanta.jpg"};
let puerta= {id:2, nombre:"puerta", numerodepieza:45636,precio:4900, imagen:"./images/puerta.jpg"};
let motor= {id:3, nombre:"motor", numerodepieza:45637,precio:14500, imagen:"./images/motor.jpg"};
let caja= {id:4, nombre:"caja", numerodepieza:45638,precio:10500, imagen:"./images/caja.jpg"};

const productos=[capot,puerta,motor,caja]

let carrito = [];
//tarjetas//
productos.forEach((item) =>{
    let tarjeta= document.createElement("div");
    tarjeta.className="tarjetaindividual"
    tarjeta.innerHTML= `
    <h2>Nombre:${item.nombre}</h2>
    <img src="${item.imagen}" alt="${item.nombre}">
    <p>Numero de pieza:${item.numerodepieza}</p>
    <h3>Precio:$${item.precio}</h3>`
    
 listaproductos.append(tarjeta);
 
 //carrito//
 let comprar = document.createElement("button");
 comprar.innerText="Agregar al carrito";
 comprar.className="boton"
 listaproductos.append(comprar);

 comprar.addEventListener("click",()=>{
    carrito.push({
        id: item.id,
        nombre: item.nombre,
        numerodepieza: item.numerodepieza,
        precio: item.precio,
        
    })
    console.log(carrito);

    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Producto sumado al carrito',
        showConfirmButton: false,
        timer: 1500
      })
 })

});

vercarrito.addEventListener("click",()=>{
    carrito.forEach((item)=>{
        const lista= document.createElement("div");
        lista.className= "carrito";
        lista.innerHTML=`
        <h2>Nombre:${item.nombre}</h2>
        <h3>Precio:$${item.precio}</h3>`
        
        vercarrito.append(lista);

        
    })
    const total= carrito.reduce((acc,item)=> acc + item.precio,0);
    const totalcompra= document.createElement("p");
    totalcompra.className="carrito"
    totalcompra.innerHTML=`Total de la compra $${total}`

    vercarrito.append(totalcompra);
    
    carrito.length== 0 && Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Todavía no seleccionó ningun articulo',
        footer: '<a href="">Intentar de nuevo</a>'
      })
    
    const cierre = document.createElement("button");
    cierre.className="boton"
    cierre.innerText= `❌`
    vercarrito.append(cierre);
    cierre.addEventListener("click", ()=>{
        vercarrito.style.display="none";
    })

    localStorage.setItem("carrito", JSON.stringify(carrito));

    
})

contenedor.append(vercarrito);

