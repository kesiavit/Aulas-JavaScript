/*try {
// tenta executar algo
console.log(result)

}
catch (error) {
// captura o erro para tratar

console.log(error)

// console.log("Não foi possível executar seu pedido. Tente novamente mais tarde!")
}
finally {
    console.log("Fim")
}*/

let result = 1

try {
    if(result === 0) {
        throw new error("O valor é igual a zero.") //gerando uma exceção
    }
} catch (error) {

} finally {
    console.log("Fim")
}