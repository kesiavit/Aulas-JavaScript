// Eventos em input

const input = document.querySelector("input")

// Keydown - quando uma tecla é pressionada (captura tudo, incluindo CTRL, SHIFT, ...)

/*input.addEventListener("keydown", (event) =>{
    console.log(event.key)
})*/


// keypress - quando uma tecla do tipo caractere é pressionada (letras, números, pontos, etc.)
input.addEventListener("keypress", (event) => {
    console.log(event.key) //o .key faz com que apareça só o caractere no console
})


//acionada quando sai do imput
//input.addEventListener("change") or
input.onchange( () => {
    inputChange()
})

function inputChange () {
    console.log("O input mudou")
}