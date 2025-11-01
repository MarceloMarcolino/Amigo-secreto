let amigos = [];

function adicionar(){
    let amigo = document.getElementById('nome-amigo');
    if (amigo.value == '') {
        alert('Informe o nome do amigo!');
        return;
    }

    let nomeAmigo = amigo.value.toUpperCase();

    if (amigos.includes(nomeAmigo)) {
        alert ('Nome já adicionado!');
        return;
    }

    let lista = document.getElementById('lista-amigos');
    amigos.push(nomeAmigo);
    if (lista.textContent == '') {
        lista.textContent = nomeAmigo;
    } else {
        lista.textContent = lista.textContent + ', ' + nomeAmigo;
    }
    amigo.value = '';

    atualizarLista();
    atualizarSoteio();
}

function sortear() {
    if (amigos.length < 4) {
        alert('Adicione pelo menos 4 amigos!');
        return;
    }

    embaralhar(amigos);
    let sorteio = document.getElementById('lista-sorteio');
    for (let i = 0; i < amigos.length; i++) {
        if (i == amigos.length - 1) { 
            sorteio.innerHTML = sorteio.innerHTML + amigos[i] + ' --> ' + amigos[0] + '<br>';  
        } else {
            sorteio.innerHTML = sorteio.innerHTML + amigos[i] + ' --> ' + amigos[i + 1] + '<br>';  
        }
    }
}

function excluirAmigo(index) {
    amigos.splice(index, 1);
    atualizarLista();
    atualizarSorteio();
}

function embaralhar(lista) {
    for (let indice = lista.length; indice; indice--) {
        const indiceAleatorio = Math.floor(Math.random() * indice);

        // atribuição via destructuring
        [lista[indice - 1], lista[indiceAleatorio]] = [lista[indiceAleatorio], lista[indice - 1]];
    }
}

function atualizarSorteio() {
    let sorteio = document.getElementById('lista-sorteio');
    sorteio.innerHTML = '';
}

function atualizarLista() {
    let lista = document.getElementById('lista-amigos');
    lista.innerHTML = '';

    for (let i = 0; i < amigos.length; i++) {
        // Cria um elemento de parágrafo para cada amigo
        let paragrafo = document.createElement('p');
        paragrafo.textContent = amigos[i];

        // Adiciona um evento de clique para excluir o amigo
        paragrafo.addEventListener('click', function() {
            excluirAmigo(i);
        });

        // Adiciona o parágrafo à lista
        lista.appendChild(paragrafo)
    }
}

function reiniciar() {
    amigos = [];
    document.getElementById('lista-amigos').innerHTML = '';
    document.getElementById('lista-sorteio').innerHTML = '';
}

/*
DESAFIOS 2 à 5
*/

// Declarando uma variável do tipo array
let minhaLista = [];

// Adicionando elementos com push
minhaLista.push(1, 2, 3);
console.log("Adicionando elementos:", minhaLista);

// Criando uma nova variável
let outrosNumeros = [4, 5, 6];

// Concatenando arrays
let novaLista = minhaLista.concat(outrosNumeros);
console.log("Juntando Arrays;", novaLista);

// Removendo elementos com pop
novaLista.pop();
console.log("Desafio 3:", novaLista);

function embaralharArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Embaralhando novaLista
novaLista = embaralharArray(novaLista);
console.log("Embaralhando a Lista:", novaLista);

// Função para remover duplicatas de um array
function removerDuplicatas(array) {
    return [...new Set(array)];
}

// Testando a função com novaLista
let novaListaSemDuplicatas = removerDuplicatas(novaLista);
console.log("Remover duplicatas:", novaListaSemDuplicatas);

// DESAFIOS COMPLEMENTARES

// Desafio 1

function validarNumero(numero) {
    if (numero > 0) {
        return "Positivo";
    } else if (numero < 0) {
        return "Negativo";
    } else {
        return "Zero";
    }
}

console.log(validarNumero(-1));

// Desafio 2

function verificarIdade(idade) {
    return idade >= 18 ? "Maior de idade" : "Menor de idade";
}

console.log(verificarIdade(18));

// Desafio 3

function validarString(texto) {
    return texto === '' ? "String vazia" : "String não vazia";
}

console.log(validarString("Aqui há um texto?"));
console.log(validarString(""));

// Desafio 4

function verificarAnoBissexto(ano) {
    if ((ano % 4 === 0 && ano % 100 !== 0) || ano % 400 === 0) {
        return "Ano bissexto";
    } else {
        return "Não é bissexto";
    }
}

console.log(verificarAnoBissexto(2025));

// Desafio 5

function calcularMedia(num1, num2) {
    if (isNaN(num1) || isNaN(num2)) {
        return "Um dos números não é válido.";
    }
    return (num1 + num2) / 2;
}

console.log(calcularMedia(8,5));

// Desafio 6

function obterTamanhoArray(arr) {
    return arr.length;
}

// exemplo de uso

const minhaListaDesafio = [1,2,3,4,5,6,7,8,9,10];

console.log(obterTamanhoArray(minhaListaDesafio));

// Desafio 7

const meuArray = [10, 20, 30, 40, 50];
console.log("O array contém o número 30?", meuArray.includes(30));
//saída esperada: "O array contém o número 30?" true

// Desafio 8

// Função que verifica se um elemento está presento no array
function verificarElementoNoArray(arr, elemento) {
    return arr.includes(elemento);
}

// Exemplo de uso
const meuArrayDesafio = [10, 20, 30, 40, 50];
const elementoProcurado = 30;

// Utilizando a função para verificar a presença do elemento no array
const elementoEstaPresente = verificarElementoNoArray(meuArrayDesafio, elementoProcurado);

// Exibindo o resultado
if (elementoEstaPresente) {
    console.log(`O elemento ${elementoProcurado} está presente no array.`);
} else {
    console.log(`O elemento ${elementoProcurado} não está presente no array.`);
}
// Desafio 9

const palavras = ["apple", "banana", "orange", "grape"];
console.log("A palavra 'banana' está no array?", palavras.includes("banana"));

// saída esperada: "A palavra 'banana' está no array?" true

// Desafio 10

// Função que verifica se um objeto está presente no array
function verificarObjetoNoArray(arr, objeto) {
    return arr.some(item => JSON.stringify(item) === JSON.stringify(objeto));
}

// Array de objetos representando alunos
const alunos = [
    { id: 1, nome: "João", idade: 20 },
    { id: 2, nome: "Maria", idade: 22 },
    { id: 3, nome: "Pedro", idade: 21 },
    { id: 4, nome: "Ana", idade: 19 }
];

// Objeto que queremos verificar se está presente no array
const alunoProcurado = { id: 2, nome: "Maria", idade: 22 };

// Utilizando a função para verificar a presença do objeto no array
const objetoEstaPresente = verificarObjetoNoArray(alunos, alunoProcurado);

// Exibindo o resultado
if (objetoEstaPresente) {
    console.log("O aluno está presente no array.");
} else {
    console.log("O aluno não está presente no array.");
}