// Valores considerados como falsy

console.log(false ? "verdadeiro" : "falso")
console.log(0 ? "verdadeiro" : "falso")
console.log(-0 ? "verdadeiro" : "falso")
console.log("" ? "verdadeiro" : "falso")
console.log(null ? "verdadeiro" : "falso")
console.log(undefined ? "verdadeiro" : "falso")
console.log(NaN ? "verdadeiro" : "falso")

// Valores considerados como truthy

console.log(true ? "verdadeiro" : "falso")
console.log({} ? "verdadeiro" : "falso")
console.log([] ? "verdadeiro" : "falso")
console.log(1 ? "verdadeiro" : "falso")
console.log(2.34 ? "verdadeiro" : "falso")
console.log("Keke" ? "verdadeiro" : "falso")
console.log(" " ? "verdadeiro" : "falso")
console.log(Infinity ? "verdadeiro" : "falso")