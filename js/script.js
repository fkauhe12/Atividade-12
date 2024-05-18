const a = [1 ,2 ,3 ,4 ,5 ,6 ,7 ,8 ,9 , 10, 11, 12, 13, 14, 15];

//Acrescenta 27 ao final da lista
a.push(27);
console.log(a);
//Excluir Número 9
a.splice(8,1);
console.log(a);
//Excluir elemento da posição 10
a.splice(10,1);
console.log(a);
//Soma dos elementos
let soma = a.reduce(function(soma , i){
    return soma + i;
}) 
console.log(soma)

//Menor elemento da lista
let min = Math.min(...a);
console.log(min);

//Numeros Pares
let par = a.filter(function(i){
    return i % 2 == 0;
})
console.log(par);

//Numero Impar
let impar = a.filter(function(i){
    return i % 2 != 0;
})
console.log(impar);

//Acrecentar Numero 89 e 81 apos 4
a.splice(4,0,89,81);
console.log(a);

//Tamanho da lista
console.log(a.length);

//02 Lista Vingadores
const vingadores = ['Homem de Ferro','Capitão América','Thor','Hulk','Viúva Negra','Gavião Arqueiro'];
console.log(vingadores)
//Incluir Homem aranha no final e destacar posiçao do thor
vingadores.push('Homem Aranha');
console.log(vingadores);
console.log(vingadores.indexOf('Thor'));

//Retirar Viúva negra e Homem de Ferro
vingadores.splice(0,1);
vingadores.splice(3,1)
console.log(vingadores);

//03 Programa armezenar 15 números int no vetor depois permitir sua busca através de um digito do user caso encontrado informar posição caso não encontrado informar não encontrado

const numeros = [];
for (let i = 0; i < 15; i++) {
    let numero = parseInt(prompt('Digite 15 números: '));
    numeros.push(numero);
}
console.log(numeros);
let numeroprocurado = parseInt(prompt('Digite o número procurado: '));
let posicao = numeros.indexOf(numeroprocurado);
if (posicao == -1) {
    console.log('Não encontrado!');
} else {
    console.log('Número está na posição ' + posicao);
}


