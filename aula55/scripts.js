// Função construtora -> a mesma estrutura para objetos diferentes


function createProduct(name){
    const createProduct = {}

    createProduct.name = name
    produc.details = function(){
        console.log(`O nome do produto é ${this.name}`)
    }

    return product
}


// O new cria um novo objeto utilizando a estrutura da função construtora.

const product1 = new createProduct("Teclado")
console.log(product1.name)
product1.details()

const product2 = new createProduct("Mouse")
console.log(product1.name)
product2.details()

console.log(product1 === product2) //false

// Exemplos de funções construtoras disponíveis no próprio JS.

let myName = new String("Kel")
console.log(myName)

let price = "40.6".replace(".", "")
console.log(price)

let date = new Date("2024-8-24")
console.log(date)


// Outra forma
function Person(name){
    this.name = name
    this.message = function(){
        console.log(`Olá, ${this.name}`)
    }
}

const Person1 = new Person("Kel")
console.log(Person1.name)
Person1.message()

const Person2 = new Person("Keke")
console.log(Person2.name)
Person2.message()