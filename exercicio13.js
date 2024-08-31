// 13. Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer
// a média aritmética desses números.
const prompt = require("prompt-sync")(); // Importa o módulo 'prompt-sync' para permitir a entrada de dados pelo usuário no console.

let somaNumeros = 0;
let contador = 0;
let numeroDecimal;

do {
    numeroDecimal = parseFloat(prompt("Digite um número decimal (digite 0 para parar): "));
    if (numeroDecimal !== 0) {
        somaNumeros += numeroDecimal;
        contador++;
    }
} while (numeroDecimal !== 0);

if (contador > 0) {
    let media = somaNumeros / contador;
    console.log(`A média aritmética dos números digitados é: ${media.toFixed(2)}`);
} else {
    console.log("Nenhum número válido foi digitado.");
}