// 10. Escreva um algoritmo para ler um número inteiro e escrevê-lo na tela 10 vezes.
const prompt = require("prompt-sync")(); // Importa o módulo 'prompt-sync' para permitir a entrada de dados pelo usuário no console.

let numero = Number(prompt("Digite um número inteiro: "));

for (let i = 1; i <= 10; i++) {
    console.log(`${i} - ${numero}`);
}