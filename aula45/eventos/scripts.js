// Eventos em um elemento específico

const ul = document.querySelector("ul")
//quando a interação acontecer com esse elemento
ul.addEventListener("scroll", (event) => {
    console.log(ul.scrollTop) //toda vez que eu interajo, é revelado no console a distância percorrida em relação ao topo.

    if(ul.scrollTop > 300){
        //console.log("fim da lista.")

        //leva o usuário até o topo da lista novamente.
        ul.scrollTo({
            top: 0,
            behavior: "smooth", //deixa mais suave
        })
    }
})

const button = document.querySelector("button")
button.addEventListener("click", (event) => {
    event.preventDefault() //para o botão não reinicicar

    console.log("clicou!")
})