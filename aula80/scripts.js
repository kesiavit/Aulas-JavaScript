// Formatando uma data e uma hora

let date = new Date("2024-07-02T14:30:00")

// Para ter dois dígitos (02) -> pede para transformar em string e adiciona o início um "0" caso não tenha 2 dígitos.
let day = date.getDate().toString().padStart(2, "0")
console.log(day)

// Formata para o mês ter sempre dois dígitos
let month = (date.getMonth() + 1).toString().padStart(2, "0")
console.log(month)


let year = date.getFullYear()
let hour = date.getHours()
let minutes = date.getMinutes()

console.log(`${day}/${month}/${year} às ${hour}:${minutes}`)