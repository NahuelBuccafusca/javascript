let sucursales= document.getElementById("contacto");

fetch("./contacto.json")
.then(response=> response.json())
.then((sucursal)=>{
    sucursal.forEach(local => {
        const li= document.createElement("li");
        li.className="local"
        li.innerHTML=`
        <h2>°Sucursal ${local.sucursal}</h2>
        <p>Telefono: ${local.telefono}</p>
        <p> Dirección: ${local.dirección}</p>
        <a href="${local.mapa}"> Cómo llegar?</a>
        <hr/>
        `
        sucursales.append(li);
    });
})