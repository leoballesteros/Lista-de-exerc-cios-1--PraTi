// 2. Crie um programa que classifica a idade de uma pessoa em categorias (criança,
// adolescente, adulto, idoso) com base no valor fornecido, utilizando uma estrutura de
// controle if-else.
// let idade = Number(prompt("Digite a idade da pessoa: ")); 
const prompt = require("prompt-sync")(); // Importa o módulo 'prompt-sync' para permitir a entrada de dados pelo usuário no console.

let idade = Number(prompt("Digite a idade da pessoa: ")); 

if (idade >= 0 && idade <= 12) { 
    console.log("A pessoa é uma criança."); 
} else if (idade >= 13 && idade <= 17) { 
    console.log("A pessoa é uma adolescente."); 
} else if (idade >= 18 && idade <= 59) { 
    console.log("A pessoa é um adulto.");
} else  console.log("A pessoa é um idoso."); 
