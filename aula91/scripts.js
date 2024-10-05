// Herança com classes

class Animal {
    constructor(name) {
        this.name = name
    }

    makeNoise() {
        console.log("Algum som genérico do animal")
    }
}

// "Extends" => Você está herdando propriedades e métodos de uma classe
class Dog extends Animal {
    // Não tem nada aqui
}

const dog = new Dog("Floquinho")
console.log(dog.name)
dog.makeNoise()

class Cat extends Animal {
    // Não tem nada aqui
}

const cat = new Cat("Mingal")
console.log(cat.name)
cat.makeNoise()