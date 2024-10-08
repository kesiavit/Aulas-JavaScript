/*
FUSO HORÁRIO

IIMESTAMP => Uma data representada como um número (carimbo de data/hora)

É um valor que representa um ponto específico no tempo

- A data de referência do JS: baseado no valor de tempo em milissegundos desde a meia noite de 01 de janeiro de 1970, UTC.


DUAS FORMAS DE INTERPRETAR DATA E HORA:
- Local (determinado pelo ambiente que está executando - dispositivo do usuário)
- Tempo Universal Coordenado (UTC)
*/



// Intl (usada também para manipular data e hora) é a API de Internacionalização do ECMAScript.


// Obtém informações da localidade.
const currentLocale = Intl.DateTimeFormat().resolvedOptions()

console.log(currentLocale)



// Exibe no formato de acordo com a localidade

console.log(new Intl.DateTimeFormat("pt-BR").format(new Date())) // Passou a data e hora atual (new date()), e mandou formatar usando o padrão ("pt-BR")

console.log(new Intl.DateTimeFormat("en-US").format(new Date()))


const date = new Date()

// Obtém a diferença em minutos do timezone.
console.log(date.getTimezoneOffset())

// Obém a diferença em horas do timezone.
console.log(date.getTimezoneOffset() / 60)