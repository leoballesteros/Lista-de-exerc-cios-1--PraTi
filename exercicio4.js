// 4. Crie um menu interativo no console que oferece ao usuário a escolha de três opções.
// Utilize switch-case para implementar a lógica de cada opção selecionada.
const prompt = require("prompt-sync")(); // Importa o módulo 'prompt-sync' para permitir a entrada de dados pelo usuário no console.

const a = Number(prompt("Digite o valor para a opção A: "));
const b = Number(prompt("Digite o segundo valor para a opção B: "));
const ESCOLHA = {
  SOMA: 1,
  MULTIPLICACAO: 2,
  SUBTRACAO: 3,
  FINALIZAR: 4,
};
console.log("======= Programa para realizar uma pequena operação matemática =======");
console.log("1 - Somar os números inseridos.");
console.log("2 - Multiplicar os números inseridos.");
console.log("3 - Subtrair os números inseridos.");
console.log("4 - Use esta opção para finalizar o programa.");

let escolha = Number(prompt("Digite sua escolha: "));
switch (escolha) {
  case ESCOLHA.SOMA:
    const soma = a + b;
    console.log(`A soma é: ${soma}`);
    break;
  case ESCOLHA.MULTIPLICACAO:
    const multiplicacao = a * b;
    console.log(`A multiplicação é: ${multiplicacao}`);
    break;
  case ESCOLHA.SUBTRACAO:
    const subtracao = a - b;
    console.log(`A subtração é: ${subtracao}`);
    break;
  case ESCOLHA.FINALIZAR:
    console.log("!!!! Obrigado por participar !!!!");
    break;
  default:
    console.log("Opção inválida.");
}