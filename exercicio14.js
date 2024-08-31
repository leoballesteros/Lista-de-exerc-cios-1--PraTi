// 14. Crie um programa que calcula o fatorial de um número fornecido pelo usuário
// utilizando um loop for ou while.
const prompt = require("prompt-sync")(); // Importa o módulo 'prompt-sync' para permitir a entrada de dados pelo usuário no console.

let numeroFatorial = Number(prompt("Digite um número para calcular o fatorial: "));
let fatorial = 1;

for (let i = 1; i <= numeroFatorial; i++) {
    fatorial *= i;
}

console.log(`O fatorial de ${numeroFatorial} é: ${fatorial}`);
