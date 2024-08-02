// Conversão de tipos
//type casting ou type conversion -> você usa de forma consciente para transformar um valor de um tipo para outro.

let value = "9"
console.log(typeof Number(value))

let age = 18
console.log(typeof age.toString())
console.log(typeof String(age))

let option = 1 //0 = false
console.log(Boolean(option)) //true
console.log(typeof Boolean(option))

// Coerção de tipos
// Acontece de forma automática. O JS tenta automaticamente converter um dos valores para um tipo compatível antes de realizar a operação

console.log(typeof ("10" + 7))