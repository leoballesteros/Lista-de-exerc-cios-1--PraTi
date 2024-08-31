// 15. Escreva um programa que gera e imprime os primeiros 10 números da sequência de
// Fibonacci utilizando um loop for.
const prompt = require("prompt-sync")(); // Importa o módulo 'prompt-sync' para permitir a entrada de dados pelo usuário no console.

let num1 = 0, num2 = 1, proximoNumero;

console.log("Os primeiros 10 números da sequência de Fibonacci são:");
for (let i = 1; i <= 10; i++) {
    console.log(num1);
    proximoNumero = num1 + num2;
    num1 = num2;
    num2 = proximoNumero;
}
