// Parâmetro -> é a variável (escopo da função) que irá receber um valor em uma função.

// Argumentos -> é o valor que é passado para a função.


// Passando o parâmetro username.
function message(username){
    console,log("Olá", username)
}

// Passando argumentos.
message("Keké")
message("Kel")


function sum(a, b){
    console.log(a + b)
}

sum(7, 3)
sum(10, 5)


//definindo um argumento padrão com -> text2 = ""

function joinText(text1, text2 = "", text3){
    console.log(text1, text2, text3)
}

// a ordem importa
joinText("Késia", "Vitória", "Gomes")
joinText("Gomes", "Késia", "Vitória")
