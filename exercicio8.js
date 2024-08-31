// 8. Escreva um algoritmo para ler 2 valores (considere que não serão lidos valores iguais)
// e escreve-los em ordem crescente.
const prompt = require("prompt-sync")(); // Importa o módulo 'prompt-sync' para permitir a entrada de dados pelo usuário no console.

let valor1 = Number(prompt("Digite o primeiro valor: "));
let valor2 = Number(prompt("Digite o segundo valor: "));

if (valor1 < valor2) {
    console.log(`A ordem crescente é: ${valor1}, ${valor2}`);
} else {
    console.log(`A ordem crescente é: ${valor2}, ${valor1}`);
}
