// Eventos de formulário

const form = document.querySelector("form")

//onsubmit -> Funciona só o último que vc cria
form.onsubmit = (event) => {
    event.preventDefault()
    console.log("Você fez submit no formulário 1")
}

form.onsubmit = (event) => {
    event.preventDefault()
    console.log("Você fez submit no formulário 2")
}

//addEventListener -> Funciona todos
form.addEventListener("submit", (event) => {
    event.preventDefault()
    console.log("Você fez submit no formulário 3")
})

form.addEventListener("submit", (event) => {
    event.preventDefault()
    console.log("Você fez submit no formulário 4")
})