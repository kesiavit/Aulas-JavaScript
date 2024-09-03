// Elementos que o array aceita

let myArray = [
    "Um texto",
    10,
    true,
    function(){
        console.log("Função dentro do Array!")
    },
    {
        name: "Keke",
        email: "Kel@email.com",
    },
]

// Texto.
console.log(myArray[0])

// Número.
console.log(myArray[1])

// Boolean.
console.log(myArray[2])

// Função.
myArray[3]()

// Objeto.
console.log(myArray[4].name, myArray[4].email)
