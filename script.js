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
// }

// verificaNumero(numero)
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

// let numero = parseInt(prompt("Informe um número: "))

// const par_impar = (num) => {
//     divisao = num % 2
//     if (divisao === 0){
//         return alert("É par")
//     } else {
//         return alert("É impar")
//     }
//     window.location.reload()
// }

// par_impar(numero)


// let mes = prompt("Informe o mês: ")

// minusculo = mes.toLowerCase()

// const estacao = (mesm) =>{
//     while(mes != null){
//         switch(mesm){
//             case 'dezembro':
//                 alert('Verão') 
//                 break;
//             case 'janeiro':
//                 alert('Verão')
//                 break;
//             case 'fevereiro':
//                 alert('Verão')
//                 break;
//             case 'março':
//                 alert('Outono')
//                 break;
//             case 'abril':
//                 alert('Outono')
//                 break;
//             case 'maio':
//                 alert('Outono')
//                 break;
//             case 'junho':
//                 alert('Inverno')
//                 break;
//             case 'julho':
//                 alert('Inverno')
//                 break;
//             case 'agosto':
//                 alert('Inverno')
//                 break;
//             case 'setembro':
//                 alert('Primavera')
//                 break;
//             case 'outubro':
//                 alert('Primavera')
//                 break;
//             case 'novembro':
//                 alert('Primavera')
//                 break;
//         }
//     }
    
//     mes = prompt("Informe o mês: ")
//     minusculo = mes.toLowerCase()
// }

// estacao(minusculo)

// let numero = parseInt(prompt("Informe um número: "))

// const cubo = (num) =>{
//     alert(num * num * num)
//     window.location.reload()
// }

// cubo(numero)

// let num_1 = parseInt(prompt("Informe o 1º número: "))
// let num_2 = parseInt(prompt("Informe o 2º número: "))

// const divisivel = (num1, num2) => {
//     if(num1 < 0 && num2 <0){
//         num1 = num1 * (-1)
//         num2 = num2 * (-1)
//     }else if (num1 < 0){
//         num1 = num1 * (-1)
//     }else if (num2 < 0){
//         num2 = num2 * (-1)
//     }

//     divisao = num1%num2
//     console.log(divisao)
//     if (divisao === 0){
//         alert("É divisível")
//     } else{
//         alert("Não é divisível")
//     }
//     window.location.reload()
// }

// divisivel(num_1,num_2)

// let ano = parseInt(prompt("Informe seu ano de nascimento:"))
// let mes = parseInt(prompt("Informe seu mês de nascimento:"))
// let dia = parseInt(prompt("Informe seu dia de nascimento:"))

// const idade = (ano, mes, dia) => {
//     var dataAtual = new Date();
//     const anoAtual = dataAtual.getFullYear();
//     const mesAtual = dataAtual.getMonth() + 1;
//     const diaAtual = dataAtual.getDate();
//     let idadeA = anoAtual - ano
//     let idadeM = mesAtual - mes
//     let idadeD = diaAtual - dia

//     if (idadeD < 0){
//         idadeM --
//         idadeD = idadeD + new Date(anoAtual, mesAtual, 0).getDate()
//     }

//     if (idadeM < 0){
//         idadeA --
//         idadeM = idadeM + 12
//     }

//     console.log('Anos: ', idadeA)
//     console.log('Meses: ',idadeM)
//     console.log('Dias: ', idadeD)
// }

// idade(ano, mes, dia)

// function xicara(c, f, p, cp){
//     this.cor = c;
//     this.forma = f;
//     this.peso = p;
//     this.capacidade = cp
// }

// const xicara1 = new xicara("Branco", "Quadrada",10,100)

// let fruta = {
//     nome: "Pera",
//     cor: "Verde",
//     peso: 5,
//     tipo: "Pé de pera"
// }

// console.log(fruta.nome.length)
// console.log(fruta.cor.toLowerCase())
// console.log(fruta.tipo.toUpperCase())

// class pessoa {
//     constructor(nome, sobrenome, idade){
//         this.nome = nome,
//         this.sobrenome = sobrenome,
//         this.idade = idade
//     }

//     apresentar = () => {

//         console.log()
//     }

// }

// class alimento {
//     constructor(nome, cor, peso, tipo){
//         this.nome = nome,
//         this.cor = cor,
//         this.peso = peso,
//         this.tipo = tipo
//     }

//     apresentar = () => {
//         console.log(`O alimento ${this.nome} tem a cor ${this.cor}, o peso ${this.peso} e é do tipo ${this.tipo}`)
//     }
// }

// const alimento1 = new alimento("Arroz", "Branco", 5, "Grão")
// const alimento2 = new alimento("Couve", "Verde", 2, "Hortaliça")

// alimento1.apresentar()
// alimento2.apresentar()

const arrayNumeros = [1, 2, 3, 4]

arrayNumeros.push(80);

arrayNumeros.unshift("Maria") //adiciona no final

arrayNumeros.pop()//remove último elemento do array

arrayNumeros.shift()//remove o primeiro elemento do array

arrayNumeros.splice(1, 2) //splice(a partir de qual posição?, quantos?)

const caes = ["Puppy", "Fiona", "Thor", "Salsicha"];
const gatos = ["Fifi", "Lion"];

const caesJoin = caes.join("\n");
console.log(caesJoin);

// Join

const caesConcat = caes.concat(gatos);
console.log(caesConcat)

const nomes = ["Rita", "Pedro", "Miguel", "Ana"]

const nomesSliced = nomes.slice(2, 4)

const nReverse = [1, 5, 9, 10]

nReverse.reverse();
console.log(nReverse);

// Includes()

const pesquisa = "Olá, mundooooo!";
let termo = "mundo";


if (pesquisa.includes(termo)) {
    console.log("Olá!");
}

//IndexOf
// Se não existir no array retorna -1
const frutas = ["maçã", "banana", "morango"];
let indiceMorango = frutas.indexOf("morango");
console.log(indiceMorango);

