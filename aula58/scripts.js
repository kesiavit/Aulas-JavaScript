// Substituindo e fatiando um texto

let message = "Estou estudando os fundamentos de JS"

// Substituindo parte de um texto.
console.log(message.replace("JS","JavaScript")) //Na primeira string se coloca o que quer substituir, e na segundo se coloca o que quer colocar no lugar

// Extraindo uma parte da string (start, end)
console.log(message.slice(0, 5)) //fica andando casinhas pelos caracteres

// Extraindo uma parte da string de trás para frente.
console.log(message.slice(-5))

let textWithSpace = "   Texto de exemplo   "
console.log(textWithSpace.length)

// Remove espeços em branco no início e no final da string.
console.log(textWithSpace.trim())
