/*
Crie uma função que recebendo uma lista de depósitos e retiradas, 
exiba um resumo completo do extrato mensal de sua conta com 
as seguintes informações no exemplo abaixo. 
Para exibir, utilize o console.log() dentro da função.
*/

let exibeExtratoCompleto = lista => {
    let saldoFinal = 0;
    let totalDepositos = 0;
    let qtdDepositos = 0;
    let qtdRetiradas = 0;


    for (item of lista) {
        const ehDeposito = item > 0
        qtdDepositos += ehDeposito ? 1 : 0
        qtdRetiradas += !ehDeposito ? 1 : 0
        totalDepositos += ehDeposito? item : 0
        saldoFinal += item

    }

    const positivoOuNegativo = saldoFinal > 0 ? "positivo" : "negativo"

    console.log(`Total de depósitos: ${qtdDepositos}`)
    console.log(`Total de retiradas: ${qtdRetiradas}`)
    console.log(`O valor total depositado foi de: R$ ${totalDepositos}`)
    console.log(`O valor total retirado foi de: R$ ${totalDepositos - saldoFinal}`)
    console.log(`O saldo final de sua conta foi ${positivoOuNegativo} no valor de R$ ${Math.abs(saldoFinal)}`)
}


let listaDepositosRetiradas = [100, -20, -30, 10, -7, -21, -5]
exibeExtratoCompleto(listaDepositosRetiradas)
