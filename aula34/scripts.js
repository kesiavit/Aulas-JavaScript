function showMessage(menssage){
    console.log(menssage)
    endLine()

    function endLine(){
        console.log("-----------")
    }
}

showMessage("Olá")


endLine() //não existe nesse escopo