/* For...of itera sobre valores de um objeto iterável
*/

let students = ["Keke", "Nanda", "Milena"]

for (let student of students){
    console.log(student)
}


// Só é possível usar o "for of" quando se pode percorrer

let user = {
    name: "keke",
    email: "keke@gmail.com",
}

for (let value of user) {
    console.log(value)
}