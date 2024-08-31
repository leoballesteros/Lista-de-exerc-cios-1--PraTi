// 9. Implemente um programa que exibe uma contagem regressiva de 10 até 1 no console
// utilizando um loop for.
const prompt = require("prompt-sync")(); // Importa o módulo 'prompt-sync' para permitir a entrada de dados pelo usuário no console.

console.log("Contagem regressiva:");
for (let i = 10; i >= 1; i--) {
    console.log(i);
}