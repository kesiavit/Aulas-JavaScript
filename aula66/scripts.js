// Usando o índice

let fruits = ["Apple", "Watermelon", "Strawberry"]
// console.log(fruits)


// Encontra e retorna o índice do elemento no Array.
let position = fruits.indexOf("Watermelon")
console.log(position)


// Remove um item pela posição do índice
// fruits.splice(1, 2) // o primeiro parametro é para saber quem qual posição começar a retirar e o segundo é quantos elementos quer remover.

//ou

fruits.splice(position, 2)
console.log(fruits)