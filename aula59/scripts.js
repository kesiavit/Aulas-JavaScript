// Completando uma string
// Na prática (cartão de crédito)

const creditCard = "12456782367346"
// console.log(creditCard)

// Pegando os últimos 4 digitos
const lastDigits = creditCard.slice(-4)

// Números mascarados com um "X"
// padStart -> preenche a string a partir do inicio
const maskedNumber = lastDigits.padStart(creditCard.length, "x") // O primeiro parametro é o tamanho que vc quer, e o segundo é o que vc quer colocar no lugar.

console.log(maskedNumber) // XXXXXXXXXXXX7346

// o padEnd preenche a string no final.

const number = "123"
console.log(number.padEnd(10, "#")) //123#######