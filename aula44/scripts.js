// Eventos

window.addEventListener("load", () => {
    console.log("A página foi carregada!")
})

//Olhando para a estrutura
addEventListener("click", (e) => {
    e.preventDefault() //serve para o botão não recarregar a página, já que é um comportamento padrão dele.

    // Retorna todas as informações do evento.
    //console.log(e)

    //console.log(event.target) -> mostra as informações do elemento clicado

    //onsole.log(event.target.textContent) -> retorna o textContent do elemento clicado.
})