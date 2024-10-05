// MÉTODO ESTÁTICO -> o Método pode ser executado/acessado sem instanciar a classe
// É só usar o "static" antes do método, assim, utiliza " 'O nome da classe' . 'O nome do método' () "

class User {
    static showMessage(){
        console.log("Essa é uma mensagem")
    }
}

// const user = new User()
// user.showMessage()

User.showMessage()