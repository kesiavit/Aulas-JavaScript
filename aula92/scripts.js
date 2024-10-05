// Sobrescrevendo métodos

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
    makeNoise(){
        console.log("au! au!")
    }
}

const dog = new Dog("Floquinho")
console.log(dog.name)
dog.makeNoise()

class Cat extends Animal {
    makeNoise() {
        console.log("Miau... Miau...")
    }

    run(){
        console.log("Correndo...")
    }
}

const cat = new Cat("Mingal")
console.log(cat.name)
cat.makeNoise()

cat.run()