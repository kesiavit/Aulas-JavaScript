// Criando uma data e hora com fuso horário

const dateWithTimezone = new Date("2024-10-05T14:04:05.647+03:00")


console.log(new Date().toLocaleString()) // Sem o fuso horário
console.log(dateWithTimezone.toLocaleString()) // Com o fuso horário

