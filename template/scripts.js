// Visualizar o conteúdo do document.
// console.log(document)

// Obter o title da página

console.log(document.title)


// Acessar um elemento pelo id

const guest = document.getElementById("guest-2")
console.log(guest)


// Para ver as propriedades do objeto

console.dir(guest) 


// Acessar elemento com class (Seletor class)

const guestsByClass = document.getElementsByClassName("guest")
console.log(guestsByClass)


//Para selecionar apenas um dos filhos que contém a classe, utilize ".item(numeração do item, que inicia no '0'). Pode usar os '[]', no lugar dos '()'."

console.log(guestsByClass.item(0))

// Selecionar lista de elementos pela tag
const guestsTag = document.getElementsByTagName("li")
console.log(guestsTag)

