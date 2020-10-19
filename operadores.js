var atendeAClassificacaoEtária = idade >= 18

var quantidadeVagas = 2 + 5; // resultado: 7
var contratados = 7 - 2; // resultado: 5
var valorContribuicao = 2500 * 0.10; // resultado: 250
var primeiraParcela = 2500 / 2; // resultado: 1250

// Módulo

var resto1 = 15 % 4; // resultado: 3
var resto2 = 3 % 1.2; // resultado: 0.6 retorna o resto de uma divisão

var verificaSeEPar = 20 % 2 == 0; /* Neste exemplo, 20 dividido por 2 dá resultado 10, que é inteiro, e resto 0. Por isso ele é um número par e a variável verificaSeEPar 
terá o valor true.*/

/*Juntando strings com o operador de adição (+)*/
console.log("texto" + "e complemento")

//Também é possivel imprimir variáveis e strings

var valor = 5
console.log("6" + valor)

//Usando outros valores, o operador de adição converte todos e os une, exemplo:
console.log("texto" + 20); // "texto20"
console.log("texto" + true); // "textotrue"
console.log("texto" + null); // "textonull"
console.log("texto" + undefined); // "textoundefined"
console.log([1, 2, 3] + 4) // "1,2,34"
console.log({ nome: 'José' } + 1); // “[object Object]1”