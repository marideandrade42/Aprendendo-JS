// Console

// log -> registro

// tratamento de erro!

// console.error('deu erro!');

// Operador ternário

const idadeMinima = 18;
const idadeCliente = 19;

if (idadeCliente >= idadeMinima) {
    console.log("cerveja")
} else {
    console.log("suco")
}

//              condição                   true        false

console.log(idadeCliente >= idadeMinima ? "cerveja" : "suco");  

// template string

const nome = "Mari";
const idade = 2022-1989;
const cidadeDeNascimento = "Brasília";

// const apresentacao = "Meu nome é " + nome + ", tenho " + idade + " anos e nasci em " + cidadeDeNascimento;

const apresentacao = `meu nome é ${nome}, tenho ${idade} anos e nasci em ${cidadeDeNascimento}.`

console.log(apresentacao);

const bebidaMaior = "Gin";
const bebidaMenor = "Coca";
const pedido = `${nome} diz: "Por favor, quero beber ${idade >= 18 ? bebidaMaior : bebidaMenor}"`

console.log(pedido);

