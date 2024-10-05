// Como utilizar classes pra lidar com exceções

let obj = [16]
let index = 300

try {
    // obj.execute()

    if(!obj.includes(16)){
        throw new Error("O número 16 não está disponível.")
    } // "throw new" => uma nova exceção

    if (index > 99) {
        throw new RangeError("O número está fora do intervalo. Escolha um número de 0 à 99.")
    }

} catch (error) {
    if(error instanceof TypeError) {
        console.log("Método indisponível.")
    }


    // Para mostrar só a mensagem
    if(error instanceof RangeError) {
        console.log(error.message)
    }

    // console.log(error)
}