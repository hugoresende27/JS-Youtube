let num = 33; //declarar var let ou var, const para constantes, valores que não precisam de ser redefinidos
console.log(num);

var valorIngressoAdulto = 20;
valorIngressoAdulto = 30;
console.log(valorIngressoAdulto);

let nome = 'Hugo';      //string literal
let idade = 33.2;       //number literal
let aprovado = true;    //boolean
let sobrenome = undefined;//undefined
let corSelect = null    //Redefinir um valor //typeof = objeto

console.log(sobrenome);

let pessoa = {      //para criar um objeto let var = {};
    nom:'Hugo',     //key : value pair // chave : valor
    age:33,
    apr:true,
    sob:'Resende',
    alt:1.74,
    pes:64
};

console.log(pessoa);