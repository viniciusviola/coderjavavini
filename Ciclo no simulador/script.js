let valor = parseFloat(prompt("Qual o valor do empréstimo? "))
let juros = parseFloat(prompt("Qual a taxa de juros mensal? "))
let prazo = parseInt(prompt("Quantas parcelas? "))

// const com_valor = (num) =>{
//     if(num === null || num === undefined || isNaN(num)){
//         return true
//     }
// }

const parcelas = (quantia, juros, prazo) => {
        parcela = (quantia * (juros/100) * ((1+(juros/100))**prazo))/(((1 + (juros/100))**prazo)-1)
        // return alert(parcela.toFixed(2))
        montante = parcela * prazo
        if(com_valor(quantia)||com_valor(juros)||com_valor(prazo)){
           return console.log('Preencha todos os valores')
        } else{
            for(let i = 1; i <= prazo; i++){
                montante = montante - parcela
                print(console.log(`Saldo devedor: ${montante.toFixed(2)}`))
                if (montante <= 0){
                    return console.log("Parabéns você terminou de pagar seu empréstimo")
                }
                else{
                    continue
                }
            }
        }
    }
    numero = parseInt(prompt("Informe 1 ou 0: "))
    if (numero === 0){
        stop
    } else{
        valor = parseFloat(prompt("Qual o valor do empréstimo? "))
        juros = parseFloat(prompt("Qual a taxa de juros mensal? "))
        prazo = parseInt(prompt("Quantas parcelas? "))
    }


parcelas(valor,juros, prazo)


