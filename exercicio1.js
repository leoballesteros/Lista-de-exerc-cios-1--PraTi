// 1. Escreva um programa que recebe um número inteiro e verifica se ele é par ou ímpar
// utilizando uma estrutura de controle if.
// let number = Number(prompt("Digite um número: ")); 
const prompt = require("prompt-sync")(); // Importa o módulo 'prompt-sync' para permitir a entrada de dados pelo usuário no console.

let number = Number(prompt("Digite um número: ")); 

if (number % 2 === 0) { 
    console.log("Esse número é par."); 
} else { 
    console.log("Esse número é ímpar."); 
}