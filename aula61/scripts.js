// Encontrando um conteúdo no texto

let message = "Estou estudando os fundamentos do JS"


// Obter a posição da palavra.

console.log(message.indexOf("estudando")) //6 -> começa pelo 0. Quando não encontra ele retorna -1


// Verificar se existe a palavra na String.
console.log(message.includes("JS")) //true
console.log(message.includes("JavaScript")) // false
