// Repetições -> executa um bloco de código várias vezes de acordo com uma condição específica.

// WHILE: executa até que a condição seja VERDADEIRA.

let execute = true

// Continua sendo executada enquanto o "execute" é verdadeiro
while (execute) {
    let response = window.prompt("Deseja continuar: 1 (SIM) ou 2 (NÃO)")

    if(response === "2") {
        execute = false
    }
}

console.log("Segue o fluxo...")