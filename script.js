// const num = parseInt(prompt('Digite um número de 1 a 5: '))

// if (num === 1) {
//     console.log( 'um')
// } else if (num === 2){
//     console.log( 'dois')
// }else if (num === 3){
//     console.log( 'três')
// }else if (num === 4){
//     console.log( 'quatro')
// }else if (num === 5){
//     console.log( 'cinco')
// } else [
//     console.log('Número inválido, digite um número de 1 a 5.')
// ]

// var valor = "ana"

// if (valor) {
//     alert("Valor verdadeiro")
// } else {
//     alert("Valor falso")
// }



// function par() {
//     const numero = parseInt(prompt('Digite um número: '))
//     divisao = numero%2
//     if (divisao === 0){
//         alert('O número'+ numero+ ' é par')
//     }
//     else {
//         alert('O número '+ numero+' é impar')
//     }
//     return
// }

// par()
// par()
// par()

// function calculadora(){
//     const num1 = parseInt(prompt('Informe o primeiro valor: '))
//     const num2 = parseInt(prompt('Informe o segundo valor: '))
//     const operador = prompt('Informe o tipo: *, +, -, /')

//     if (operador === '*'){
//         return resultado = num1 * num2
//     } else if (operador === '+'){
//         return resultado = num1 + num2
//     } else if (operador === '-'){
//         return resultado = num1 - num2
//     } else if (operador === '/'){
//         return resultado = num1 / num2
//     }
// }
// calculadora()
// alert(resultado)

// function maior() {
//     const num1 = parseInt(prompt('Informe o primeiro valor: '))
//     const num2 = parseInt(prompt('Informe o segundo valor: '))

//     if (num1 > num2){
//         return resultado = num1 - num2
//     } else if (num2 > num1){
//         return resultado = num2 - num1
//     } else {
//         return resultado = 'Os valores são iguais'
//     }

// }

// maior()
// console.log(resultado)

// const falar = function(primeiro, segundo){
//     console.log(primeiro + " " + segundo)
// }

// falar('Óla', 'pessoal')

// const divisao = (num1, num2) => { //arrow function
//     console.log(num1/num2)
// }

// divisao(10, 2)


const divisao = (num1, num2) => { 
        alert(num1/num2)
    }

const mult = (num1, num2) => { 
    alert(num1*num2)
}    

const soma = (num1, num2) => { 
    alert(num1+num2)
}

const sub = (num1, num2) => { 
    alert(num1-num2)
}
const calculadora = (num1, num2, operador)=> {
    // const num1 = parseInt(prompt('Informe o primeiro valor: '))
    // const num2 = parseInt(prompt('Informe o segundo valor: '))
    // const operador = prompt('Informe o tipo: *, +, -, /')

    if (operador === '*'){
        return mult(num1, num2)
    } else if (operador === '+'){
        return soma(num1, num2)
    } else if (operador === '-'){
        return sub(num1, num2)
    } else if (operador === '/'){
        return divisao(num1, num2)
    }
}

calculadora(4, 5, '*')