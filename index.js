console.log("Hola mundo!");

let formulario = document.querySelector("form")
let seguro = document.querySelector("select")
let precio = document.querySelector("small")
let valor = 0

seguro.addEventListener("change", function () {
  switch (seguro.value) {
    case "Básico":
      valor = 500
      break;
    case "Intermedio":
      valor = 1000
      break;
    case "Premium":
      valor = 1500
      break;
    default:
      precio.innerHTML = "El seguro no existe";
      break;
  }

  precio.innerHTML = `El precio del seguro es: $${valor}`
})

formulario.addEventListener("submit", function (evento) {
  evento.preventDefault() 
  const data = Object.fromEntries(new FormData(formulario))

  let resumen = `
  RESUMEN
  • Nombre: ${data.nombre}
  • Apellido: ${data.apellido}
  • DNI: ${data.dni}
  • Email: ${data.email}
  • Teléfono: ${data.tel}
  • Tipo de seguro: ${data.seguro}
  • Precio del seguro: $${valor}
  `

  alert(resumen)
  precio.innerHTML = ""
  formulario.reset()
})
