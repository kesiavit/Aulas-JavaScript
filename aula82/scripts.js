// Exibindo data e hora formatadas de acordo com a localidade

let date = new Date("2024-10-05T08:50:00")

// Mostra a data no formato local
console.log(date.toLocaleDateString())

// Mostra o horário no formato local
console.log(date.toLocaleTimeString())

// Exibe a data e hora no formato escolhido (ex.: no formato americano)
console.log(date.toLocaleDateString("en")) 
console.log(date.toLocaleTimeString("en"))