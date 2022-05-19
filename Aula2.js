// var

// var altura = 5;
// var comprimento = 7;

// area = altura * comprimento
// console.log(area)
// var area;

// let

let forma = 'retângulo'
let altura = 5;
let comprimento = 7;
let area

if (forma === 'retângulo') {
    area = altura * comprimento;
} else {
    area = (altura * comprimento) / 2;
}

console.log(area);

// truthy ou falsy

//0 => false
//1 => true

console.log(0 == false);
console.log(" " == false);

//null e undefined

let minhaVar;
let varNull = null;
let numero = 3;
let texto = "Alura";

console.log(typeof minhaVar);
console.log(typeof varNull);
console.log(typeof numero);
console.log(typeof texto);

// conversão implícita
const numeroo = 456;
const numeroString = "456";

console.log (numeroo == numeroString);

// conversão explícita

//Number()
//String()

console.log (numeroo + Number(numeroString));


