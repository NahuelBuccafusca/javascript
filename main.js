//ingreso a la página//

class clientes {
  constructor(mail, apellido, dni) {
    this.mail = mail;
    this.apellido = apellido;
    this.dni = dni;
  }
}
const carteraClientes = []
const clienteNahuel = new clientes("n.buccafusca@outlook.com.ar", "Buccafusca", 39266921);
const clienteGerman = new clientes("g.montero@outlook.com.ar", "Montero", 32566921);
const clienteAgustin = new clientes("a.miraglia@outlook.com.ar", "Miraglia", 35566921);

carteraClientes.push(clienteNahuel);
carteraClientes.push(clienteGerman);
carteraClientes.push(clienteAgustin);

localStorage.setItem("clientela", JSON.stringify(carteraClientes));
const formulario = document.getElementById("formulario");

formulario.addEventListener("submit", (e) => {
  e.preventDefault();

  const nombre = document.getElementById("nombre").value;
  const apellido = document.getElementById("apellido").value;
  const mail = document.getElementById("mail").value;
  const dni = document.getElementById("dni").value;

  const clienteNuevo = new clientes(nombre, apellido, mail, dni);

  carteraClientes.push(clienteNuevo);
  localStorage.setItem("clientenuevo", JSON.stringify(clienteNuevo));

  formulario.reset();

  (dni == 39266921 | dni == 32566921 | dni == 35566921) ?
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Usuario ya registrado',
      footer: '<a href="">Intentar de nuevo</a>'
    }) : Swal.fire('Usuario registrado, bienvenido')

})

let guardados = document.getElementById("guardados")
let registrado = document.getElementById("clientes");

registrado.addEventListener("click", () => {
  const cliente = JSON.parse(localStorage.getItem("clientela"));
  cliente.forEach((item) => {
    let persona = document.createElement("div");
    persona.className = "persona"
    persona.innerHTML = `
    <h2>Apellido:${item.apellido}</h2>
    <p>Mail:${item.mail}</p>
    <p>Dni:${item.dni}</p>`
    guardados.append(persona)
  })
})
