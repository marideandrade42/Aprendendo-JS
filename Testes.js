function marianar(comprimento){
let forma = 'retângulo';
let altura = 5;
let area;

if (forma === 'retângulo') {
    area = altura * comprimento;
} else {
    area = (altura * comprimento) / 2;
}
console.log(area);
}
marianar(20);

//

var respostaDeTudo = 42;
let idade = 29;
idade = 18;
const pi = 3.14;
pi = 3.15;

{
    var respostaDeTudo = 3.14;
    let idade = 42;
    const pi = 29;
    console.log(respostaDeTudo, idade, pi);

}
//respostaDeTudo = 43;
idade = 30;
console.log(respostaDeTudo, idade, pi);