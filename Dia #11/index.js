
let nomes = [];
let continuar = true
let posicaoArray = 0;


while (continuar){
    let nomeInserir = prompt('Insira um nome')
          nomes[posicaoArray] = nomeInserir;

    let desejaContinuar = prompt('Insira 1 se deseja adicionar um novo nome')
          if(desejaContinuar != '1') {
              continuar = false
}
 
       posicaoArray++
 }
