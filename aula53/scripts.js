// Encadeamento opcional (Optional chaining)

/*
Quando a propriedade ou função é nula/não existe, a expressão retorna undefined em vez de gerar um erro.

Útil ao explorar o conteúdo de um objeto quando não existe garantia da existência de determinadas propriedades obrigatórias.
*/

const user = {
    id: 1,
    name: "Keke",
    /*
    address: {
        street: "Avenida Brasil",
        city: "São Paulo",
        geo: {
            latitude: 47.8080,
            longitude: 17.322,
        },
    },
    */
    message: function(){
        console.log(`Olá, ${this.name}!`)
    }
}

// Coloca a "?" para verificar se ele existe
console.log(user?.address?.street)