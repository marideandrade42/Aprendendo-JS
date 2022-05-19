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
