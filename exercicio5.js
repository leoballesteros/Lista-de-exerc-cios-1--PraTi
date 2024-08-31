// 5. Escreva um programa que calcula o Índice de Massa Corporal (IMC) de uma pessoa e
// determina a categoria de peso (baixo peso, peso normal, sobrepeso, obesidade)
// utilizando if-else.
// const peso = parseFloat(prompt("Digite o seu peso (kg): "))
// const altura = parseFloat(prompt("Digite a sua altura (metro): "))
const prompt = require("prompt-sync")(); // Importa o módulo 'prompt-sync' para permitir a entrada de dados pelo usuário no console.

const imc = peso / (altura * altura);

if (imc < 18.5) { 
    console.log("Você está com baixo peso.");
} else if (imc < 25) { 
    console.log("Você está com peso normal.");
} else if (imc < 30) { 
    console.log("Você está com sobrepeso."); 
} else {
    console.log("Você está com obesidade."); 
}

console.log("Seu IMC é: " + imc.toFixed(2)); 
