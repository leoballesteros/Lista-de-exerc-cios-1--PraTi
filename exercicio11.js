// 11. Escreva um programa que solicita ao usuário 5 números e calcula a soma total
// utilizando um loop for.
const prompt = require("prompt-sync")(); // Importa o módulo 'prompt-sync' para permitir a entrada de dados pelo usuário no console.

let soma = 0;

for (let i = 1; i <= 5; i++) {
    let numero = Number(prompt(`Digite o ${i}º número: `));
    soma += numero;
}

console.log(`A soma total dos números é: ${soma}`);