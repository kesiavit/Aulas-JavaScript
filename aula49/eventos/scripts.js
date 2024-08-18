// Depurando o código

const input = document.querySelector("input")
const form = document.querySelector("form")

    form.onsubmit = (event) => {
        event.preventDefualt()

        const value = input.value
        const hasNumberRegex = /\d+/g

        if(hasNumberRegex.test(value)){
            alert("O texto contém números")
        } else {
            alert("Enviado")
        }
    }

    //Pode ser obsevado passo a passo da funcionalização do seu código na aba "sources" em ao inspecionar.
