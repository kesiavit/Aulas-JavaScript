// CALLBACK FUNCTION: é uma função passada para outra função como um argumento.

function execute(taskName, callback){
    console.log("Executando a tarefa: ", taskName)

    callback()
}

function callback(){
    console.log("Tarefa finalizada.")
}

// Passando para a função.
execute("Download do arquivo...")

// Criando a função no próprio parâmetro (função anônima).
execute("Upload do arquivo...", function(){
    console.log("Função de callback com uma função anônima.")
})

// Utilizando Arrow Function
execute("Excluindo arquivo...", () => {
    console.log("Arquivo excluído!")
})

execute("Salvando arquivo...", () => console.log("Arquivo Salvo!"))