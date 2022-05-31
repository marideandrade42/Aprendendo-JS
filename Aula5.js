// Funções

let x = " ";
//console.log(x);
x = "oi";

// 1) declara a função  
                      //string  
function imprimeTexto(texto) {
    //console.log(texto)
}

// 2) executa a função (1 ou + vezes)

imprimeTexto (soma());
imprimeTexto ("outro texto");

// três formas de escrever funções

function soma(numero1, numero2){
    return numero1 + numero2;
}

//console.log(soma(2, 2));
//console.log(soma(21, 21));
//console.log(soma(22, 245));
//console.log(soma(21, 0));

//console.log(Math.round(4.3));

//console.log(Math.random());

// parâmetros x argumentos

function multiplica(numero1, numero2){
    return numero1 * numero2;
}

//console.log(multiplica(soma(4,5), soma(3, 3)));

// Arrow Functions

const apresentarArrow = nome => `meu nome é ${nome}`;

//const soma = (num1, num2) => num1 + num2;

//console.log(apresentarArrow("Mari"));

const somaNumerosPequenos = (num1, num2) => {
    if ((num1 || num2) >= 10) {
        return "somente números de 1 a 9"
    } else {
        return num1 + num2;
    }
}

console.log(somaNumerosPequenos(2, 7));
console.log(somaNumerosPequenos(11, 7));
