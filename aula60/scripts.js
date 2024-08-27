// Separando e unindo strings


// Separando strings

let text = "Estudar, Aprender, Praticar"

let separate = text.split(",") // O parametro linaliza onde vai cortar
console.log(separate)

let message = "Estou aprendendo JS"
console.log(message.split(" ")) // Usa o espaço para separar as palavras, mas também pode ser qualquer outra coisa que queira "recortar".


// Unindo strings
let joined = separate.join(" - ") // Faz uso de um novo caracter para unir o conteúdo como um divisor
console.log(joined)



