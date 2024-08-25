// Operador de coalescência nula (??)
// Operador lógico que retorna o seu operando do lado direito quando o seu operador do lado esquerdo é null ou undefined. Caso contrário, ele retorna o seu operando do lado esquerdo.

let content = null
console.log(content ?? "conteúdo padrão")

const user = {
    name: "Kel",
    picture: undefined,
}

console.log(user.picture ?? "default.png") //exemplo da foto de perfil não definida