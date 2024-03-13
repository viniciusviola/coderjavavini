

class Alimento {
    constructor(nome, cor, peso, tipo) {
        this.nome = nome;
        this.cor = cor;
        this.peso = peso;
        this.tipo = tipo;
    }

    apresentar() {
        console.log(`O alimento ${this.nome} tem a cor ${this.cor}, o peso ${this.peso} e é do tipo ${this.tipo}`);
    }
}

const alimentos = []; // Array para armazenar os alimentos

do {
    let saindo = prompt("Adicionar novo alimento? (Digite 'sair' para sair)");
    
    
    // Verifica se o usuário deseja sair
    if (saindo.toLowerCase() === 'sair') {
        alert('Saindo do programa. Adeus!');
        break;
    }
    let aliment = prompt("Qual o alimento?");
    let cor1 = prompt("Qual a cor?");
    let qtde = parseInt(prompt("Qual o peso?"));
    let tipo1 = prompt("Qual o tipo?");

    const alimento1 = new Alimento(aliment, cor1, qtde, tipo1);

    alimentos.push(alimento1);

    alimento1.apresentar();
} while (true);


// Exibe todos os alimentos adicionados no console
alimentos.forEach(alimento => alimento.apresentar());