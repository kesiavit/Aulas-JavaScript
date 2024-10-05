// Criando propriedades dentro das classes


// ESTA propriedade "name" existe dentro de "Product". O outro name é o próprio parâmetro recebido. Ou seja, o nome do produto recebido é repassado como uma propriedade que fica disponível dentro da classe.

class Product {
    constructor(name){
        this.name = name
    }
}

const product1 = new Product("Mouse")
console.log(product1.name)

const product2 = new Product("Monitor")
console.log(product2.name)