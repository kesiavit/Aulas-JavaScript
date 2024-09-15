/* For...in executa iterações a partir de um objetivo e percorre as propriedades
*/

let person = {
    name: "Keke",
    surname: "Gomes",
    email: "keke@email.com",
}

// Está acontecendo 3 interações, porque tem 3 propriedades

for (let property in person){

    // Exibe o nome da propriedade.
    console.log(property)

    // Exibe o conteúdo da propriedade.
    console.log(person[property])
}


// Em um array
let students = ["Rodrigo", "João", "Amanda"]

for(let index in students){
    console.log(index)
    console.log(students[index])
}