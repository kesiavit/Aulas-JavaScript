// Acessando propriedades no contexto do objeto

const user = {
    name: "Keke",
    message: function () {
        // console.log(`Olá ${user.name}`)
        console.log(`Olá ${this.name}`)
    },
}

user.massage()