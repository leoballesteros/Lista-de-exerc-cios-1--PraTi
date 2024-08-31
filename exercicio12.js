// 12. Crie um programa que exibe a tabuada de um número fornecido pelo usuário (de 1 a
// 10) utilizando um loop for.
const prompt = require("prompt-sync")(); // Importa o módulo 'prompt-sync' para permitir a entrada de dados pelo usuário no console.

let numeroTabuada = Number(prompt("Digite um número para ver a tabuada: "));

console.log(`Tabuada de ${numeroTabuada}:`);
for (let i = 1; i <= 10; i++) {
    console.log(`${numeroTabuada} x ${i} = ${numeroTabuada * i}`);
}
