/*
Crie uma função que recebendo uma lista de 
depósitos e retiradas, exiba o resumo do extrato 
mensal de sua conta.
*/

  let exibeExtratoCompleto = lista => {
    let saldoFinal = 0;
    let totalDepositos = 0;
    let totalDeRetiradas = 0;


    lista.forEach(function(item) {
        if(item.movimentacao === "deposito") 
            totalDepositos += item.valor
        else
            totalDeRetiradas -= item.valor
    });
  
    saldoFinal = totalDepositos + totalDeRetiradas;
  
    let positivoOuNegativo = saldoFinal > 0 ? "positivo" : "negativo"

    console.log(`O valor total depositado foi de: R$ ${totalDepositos}`)
  
    console.log(`O valor total retirado foi de: R$ ${totalDepositos - saldoFinal}`)
  
    console.log(`O saldo final de sua conta foi ${positivoOuNegativo} no valor de R$ ${saldoFinal}`)

   
  };

let l = [{
    valor: 100.00,
    movimentacao: "deposito",
    dataMovimentacao: "2021-08-02T07:46:36.611Z"
  },
  {
    valor: 20.00,
    movimentacao: "retirada",
    dataMovimentacao: "2021-09-17T09:46:36.611Z"
  },
  {
    valor: 30.00,
    movimentacao: "retirada",
    dataMovimentacao: "2022-02-24T09:46:36.611Z"
  },
  {
    valor: 10.00,
    movimentacao: "deposito",
    dataMovimentacao: "2022-03-02T09:46:36.611Z"
  },
  {
    valor: 7.00,
    movimentacao: "retirada",
    dataMovimentacao: "2022-04-20T09:46:36.611Z"
  },
  {
    valor: 21.00,
    movimentacao: "retirada",
    dataMovimentacao: "2022-03-20T09:46:36.611Z"
  },
  {
    valor: 5.00,
    movimentacao: "retirada",
    dataMovimentacao: "2022-06-08T09:46:36.611Z"
  }];


  exibeExtratoCompleto(l);

  /*
  //SOLUÇÃO 
let exibeExtratoSimples = listaMovimentacoes => {
  let saldoFinal = 0;
  let depositos = 0;
  let retiradas = 0;
  listaMovimentacoes.forEach(movimentacao => {
      depositos += movimentacao.movimentacao === "deposito" ? movimentacao.valor : 0;
      retiradas += movimentacao.movimentacao === "retirada" ? movimentacao.valor : 0;
      saldoFinal += movimentacao.movimentacao === "deposito" ? movimentacao.valor : 0;
      saldoFinal += movimentacao.movimentacao === "retirada" ? -movimentacao.valor : 0;
  })
  const positivoOuNegativo = saldoFinal >= 0 ? "positivo" : "negativo";
  
  console.log(`O valor total depositado foi de: R$ ${depositos}`);
  console.log(`O valor total retirado foi de: R$ ${retiradas}`);
  console.log(`O saldo final de sua conta foi ${positivoOuNegativo} no valor de R$ ${Math.abs(saldoFinal)}`);
};

//TESTANDO A SOLUÇÃO 
const listaMovimentacoes = [{
  valor: 100.00,
  movimentacao: "deposito",
  dataMovimentacao: "2021-08-02T07:46:36.611Z"
},
{
  valor: 20.00,
  movimentacao: "retirada",
  dataMovimentacao: "2021-09-17T09:46:36.611Z"
},
{
  valor: 30.00,
  movimentacao: "retirada",
  dataMovimentacao: "2022-02-24T09:46:36.611Z"
},
{
  valor: 10.00,
  movimentacao: "deposito",
  dataMovimentacao: "2022-03-02T09:46:36.611Z"
},
{
  valor: 7.00,
  movimentacao: "retirada",
  dataMovimentacao: "2022-04-20T09:46:36.611Z"
},
{
  valor: 21.00,
  movimentacao: "retirada",
  dataMovimentacao: "2022-03-20T09:46:36.611Z"
},
{
  valor: 5.00,
  movimentacao: "retirada",
  dataMovimentacao: "2022-06-08T09:46:36.611Z"
}];
exibeExtratoSimples(listaMovimentacoes);
*/