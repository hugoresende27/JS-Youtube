//Função sem retorno

function dizerNome(){
    console.log("Hugão");
}

dizerNome();

//função com retorno
//posso atribuir a função a uma variável e usar a var
function multiplica2(valor){
    return valor*2;
}

console.log(multiplica2(5));
let resultado = multiplica2(20);
console.log(resultado);