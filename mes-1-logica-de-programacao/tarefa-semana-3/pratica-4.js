/*
Crie uma função que recebendo como argumento uma lista 
de seriados qualquer, exiba na tela cada um dos seriados 
com o índice de cada um na lista. 
*/

/*
const geradorDeLista = (lista) => {

    for (let [indice, item] of lista.entries())
        console.log(`[${indice}] ${item}`);

}

let lista = ["Breaking Bad", "Game of Thrones", "Stranger Things", "Chernobyl", "Dexter", "The Last Dance", "This is Us"];

geradorDeLista(lista);
*/

let exibeLista = lista => {
    for (let i = 0; i < lista.length; i++)
        console.log(`[${i}] ${lista[i]}`)
}


const listaSeriados = ["Breaking Bad", "Game of Thrones", "Stranger Things", "Chernobyl", "Dexter", "The Last Dance", "This is Us"]
exibeLista(listaSeriados)
