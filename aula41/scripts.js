// Alterando Estilos

const input = document.querySelector("#name")

// Adiciona a classe
input.classList.add("input-error")

// Remove a classe.
input.classList.remove("input-error")

// Se a classe não existe o 'toggle' adiciona, e se ela existe ele remove.
input.classList.toggle("input-error")

// Como mudar a cor de um elemento
const button = document.querySelector("button")
button.style.backgroundColor = "purple"