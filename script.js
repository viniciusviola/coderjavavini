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


// const divisao = (num1, num2) => { 
//         alert(num1/num2)
//     }

// const mult = (num1, num2) => { 
//     alert(num1*num2)
// }    

// const soma = (num1, num2) => { 
//     alert(num1+num2)
// }

// const sub = (num1, num2) => { 
//     alert(num1-num2)
// }
// const calculadora = (num1, num2, operador)=> {
//     // const num1 = parseInt(prompt('Informe o primeiro valor: '))
//     // const num2 = parseInt(prompt('Informe o segundo valor: '))
//     // const operador = prompt('Informe o tipo: *, +, -, /')

//     if (operador === '*'){
//         return mult(num1, num2)
//     } else if (operador === '+'){
//         return soma(num1, num2)
//     } else if (operador === '-'){
//         return sub(num1, num2)
//     } else if (operador === '/'){
//         return divisao(num1, num2)
//     }
// }

// calculadora(4, 5, '*')

// let num = parseInt(prompt("Insira um número de 1 a 10: "))

// if (num > 10 || num < 1){
//     alert("Número inválido")
// } else {
//     for(let i = 1; i <= num; i++){
//         sub = num - i
//         console.log(sub)
//     }
// }for

// let num = parseInt(prompt("Informe um número maior que zero: "))

// if (num <= 0){
//     prompt("Número inválido")
// } else{

//     let fator = 1
//     while (num > 0){
        
//         fator = fator * num
//         num = num -1
        
//     }
//     console.log(fator)
// }

// let numero = parseInt(prompt("Informe um número maior que zero: "))


// const verificaNumero = (numero) => {
// while (numero != -1){    
//     switch (numero){
//         case 5:
//             console.log("O número é 5")
//             break;
//         case 10:
//             console.log("O número é 10")
//             break;
//         case 15:
//             console.log("O número é 15")
//             break;
//         default:
//             console.log("O número é incorreto")
//             break;
//     }
//     numero = parseInt(prompt("Informe um número maior que zero: "))
// }

// let numero = parseInt(prompt("Informe um número maior entre 1 e 100: "))

// switch (numero){
//     case numero >= 1 && numero <= 19:
//         console.log("Família dos 10")
//         break;
//     case numero >= 20 && numero <= 29:
//         console.log("Família dos 20")
//         break;
//     case numero >= 30 && numero <= 39:
//         console.log("Família dos 30")
//         break;
//     case numero >= 40 && numero <= 49:
//         console.log("Família dos 40")
//         break;
//     case numero >= 50 && numero <= 59:
//         console.log("Família dos 50")
//         break;
//     case numero >= 60 && numero <= 69:
//         console.log("Família dos 60")
//         break;
//     case numero >= 70 && numero <= 79:
//         console.log("Família dos 70")
//         break;
//     case numero >= 80 && numero <= 89:
//         console.log("Família dos 80")
//         break;
//     case numero >= 90 && numero <= 99:
//         console.log("Família dos 90")
//         break;
// }   