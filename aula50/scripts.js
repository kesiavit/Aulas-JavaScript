/*
    Objeto
    - Uma coleção de dados e/ou funcionalidades;
    - Podem ter propriedades e métodos.
*/

// Cria um objeto vazio.
const obj = {}
console.log(obj)
console.log(typeof obj) // Para verificar o tipo

// Cria um objeto com propriedades e métodos.
const user = {
    email: "keke@email.com",
    age: 18,
    name: {
        firstName: "Kesia",
        surname: "Gomes"
    },
    address: {
        street: "Rua X",
        number: 23,
        city: "São Paulo",
        postal_code: "12345-123"
    },
    message: function () { // atribuindo uma função como o conteúdo de uma propriedade.
        console.log("hello")
    },
}

// Acessando propriedades e métodos usando a notação de ponto.
console.log(user.email)

// Acessando propriedades de objetos.
console.log(user.name.firstName)

// Executa o método do objeto.
user.message()

// Notação de colchetes
console.log(user["email"])
console.log(user["name"]["firstName"])
user["message"]()