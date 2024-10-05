/*
HERANÇA E CADEIA DE PROTÓTIPOS

Prototype chain

- O JS é dinâmico e não dispõe de uma implementação de uma class
- O "class", na verdade é uma syntax sugar
- O JV permanece baseado em prototype


PROTOTYPE

- Quando se trata de herança, o JS só tem um construtor: objetos.
- Cada objeto tem um link interno para outro objeto: prototype.

- O objeto prototype também tem um atributo prototype, e assim por diante até o que o valor null seja encontrado como sendo o seu prototype.
- O null: link final na cadeira de protótipos (sem prototype) -> prototype chain


RESUMO:

- Quando um objeto é criado ele possui automaticamente uma propriedade que referência outro objeto e esse objeto é chamado de prototype

- O objeto protype herda propriedades e métodos do seu protótipo ascendente. Essas propriedades não pertencem ao objeto em si, mas sim ao prototype do objeto.

- O prototype é o mecanismo pelo qual os objetos JS herdam recursos uns dos outros.

- A cadeia termina quando chegamos a um protótipo que tem null por protótipo

- Um objeto pode utilizar qualquer propriedade ou método que existir nesses encadeamento de protótipos.
*/