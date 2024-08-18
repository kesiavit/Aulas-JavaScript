// Manipulando valor do input
// Expressão regular

const input = document.querySelector("input")
const form = document.querySelector("form")

/*
input.addEventListener("input", () => {
    const value = input.value

    const regex = /\D+/g //expressão regular

    // Retorna o padrão encontrado na string.
    //console.log(value.match(regex)) //match -> vai verificar

    // Verifica e retorna se é verdadeiro ou falso
    //const isValid = regex.test(value)
    //console.log(isValid)

})
*/

form.addEventListener("submit", (event) => {
    event.preventDefault()

    const regex = /\D+/g

/*
    //Para fazer validações
    if(regex.test(value)) //!regex.test(value) -> se a condição for falsa {
        alert("Padrão encontrado") //aviso do navegador quando a condição for verdadeira
    }
*/
//or

if(regex.test(value)) {
    console.log(value)
} else {
    alert("Padrão não encontrado")
}


    //const value = input.value.replace(regex, "X") //Onde tem letra ele vai substituir por "X", ou se preferir remover as letras é só deixar "".

    //console.log(value)
})