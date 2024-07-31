// Nesta ordem resulta em "undefined":

// console.log(user)
// var user = "keke"


// Hoisting

// var user
// console.log(user)

// Escopo global
var email = "abc@email.com"

{
    //Escopo de bloco
    console.log(email)
}

{
    var age = 18
}

console.log(age)

/*
Não dá pra usar o "let" antes da inicialização dele

{
    console.log(address)
    let address = "Rua"
}
*/

// Deve ser colocada depois:

{
    let address = "Rua"
    console.log(address)
}

// ou

{
    address = "Rua2"
    console.log(address)
}