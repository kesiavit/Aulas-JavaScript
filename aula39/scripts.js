// Query Selector


// Acessa o elemento pelo selector ID

const guest = document.querySelector("#guest-1")
console.log(guest)

// Acessa o elemento pelo selector class
// const guests = document.querySelector(".guest") -> aqui ele traz a primeira classe

const guests = document.querySelectorAll(".guest")
console.log(guests) // aqui ele traz todos os elementos encontrados
