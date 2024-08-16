// Criando Elementos

const guests = document.querySelector("ul")

// Como criar um novo elemento
const newGuest = document.createElement("li")
newGuest.classList.add("guest") // para adicionar a classe do elemento

const guestName = document.createElement("span")

// guestName.textContent = "Kel"

const guestSurname = document.createElement("span")
guestSurname.textContent = "Gomes"

newGuest.append(guestName) //adiciona o novo elemento -> adiciona após o último filho.

// Adiciona antes do primeiro filho
newGuest.prepend(guestSurname)

// É mais simples que o append e aceita apenas um argumento
// newGuest.appendChild(guestName)

console.log(newGuest)

//Para aparecer no front
guests.append(newGuest)