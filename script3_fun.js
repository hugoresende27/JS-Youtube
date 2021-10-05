/*
funções
Verbo + Substantivo

resetarCor
transformarObjeto
alterarTamanho

*/
let corSite="azul";

function resetarCor(){  //função sem parametros para definir a var corSite de "azul" para vazio
    corSite="";
};

console.log("A cor é ",corSite);
resetarCor();
console.log("A cor é ",corSite);

function resetarCor2(cor,tom){  //função q passa o parametro cor e tom
    corSite=cor+" "+tom;
};

console.log("A cor é ",corSite);
resetarCor2("Verde","Escuro");
console.log("A cor é ",corSite);