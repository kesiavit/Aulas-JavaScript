/* Aprendendo sobre arrays

Array é uma coleção ordenada de valores

Podemos comparar uma array a uma lista, onde cada item da lista possui uma posição específica, conhecida como índice.

Começa pelo 0.

fruits = (maça, abacaxi, malancia, banana)
console.log(fruits[2]) -> melancia

*/


// Criando um array com um construtor.

const newArray = new Array()
console.log(newArray) //[]

// Retorna o tamanho do Array
console.log(newArray.length)

// [] -> Array
// {} -> Object

// Cria o Array com 10 posições vazias
const availabe = new Array(10)
console.log(availabe) //(10) [empyty x 10]