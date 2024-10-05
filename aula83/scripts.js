// Usando o toLocaleString()

let date = new Date("2024-10-05T09:30:00")

console.log(date.toLocaleString())

console.log(date.toLocaleString("en"))

// Exibe a data e hora em styles diferentes.

console.log(
    date.toLocaleString("pt-BR", {
        dateStyle: "short",
    })
)

console.log(
    date.toLocaleString("pt-BR", {
        dateStyle: "long",
    })
)

console.log(
    date.toLocaleString("pt-BR", {
        dateStyle: "medium",
    })
)

console.log(
    date.toLocaleString("pt-BR", {
        dateStyle: "full",
    })
)

console.log(date.toLocaleString("pt-BR", {
    day: "2-digit", //dois digitos para o dia
    month: "2-digit", //dois digitos para o mês
    hour: "2-digit", //dois digitos para a hora
    minute: "2-digit", //dois digitos para os minutos
    second: "2-digit", //dois digitos para os segundos
}))


// Manupulação de valores -> no exemplo a seguir, o valor atribuido à variável "amount" foi convertido para moeda (no style: "currency") e, logo em seguida, foi estabelecido com a moeda brasileira (currency: "BRL").
let amount = 12.5
console.log(amount.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL"
}))