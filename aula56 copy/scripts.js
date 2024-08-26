// Obtendo o comprimento de uma string

let message = "Estou estudando os fundamentos de JS"

console.log(message.length) //quantidade de caracteres

// Exemplo

let password = "12234"

if(password.length < 6){
    console.log("A senha deve conter pelo menos 6 caracteres")
}

// Quantos dígitos tem o número
let value = 12343
console.log(String(value).length)
// ou
console.log(value.toString().length)