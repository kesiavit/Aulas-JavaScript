// Manipulando Conteúdo

const guest = document.querySelector("#guest-1") 

/*
// com o '#guest-1 span', vc manipula o que está entro dela

console.log(guest.textContent) //Essa propriedade faz aparecer algo específico -> '.textContent', retorna o conteúdo como texto

guest.textContent = "Keke" // Você pode mudar o valor assim.
// Substituiu tudo por um texto
*/

console.log(guest.textContent) // retorna o conteúdo visível e oculto.
console.log(guest.innerText) // retorna o texto sem formatação -> somente o conteúdo visível.
console.log(guest.innerHTML) // retorna o HTML como texto.