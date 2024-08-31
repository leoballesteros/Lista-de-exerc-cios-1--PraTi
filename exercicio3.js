// 3. Implemente um programa que recebe uma nota de 0 a 10 e classifica como
// "Aprovado", "Recuperação", ou "Reprovado" utilizando if-else if.
// let nota = Number(prompt("Digite a nota: ")) 
const prompt = require("prompt-sync")(); // Importa o módulo 'prompt-sync' para permitir a entrada de dados pelo usuário no console.
let nota = Number(prompt("Digite a nota: ")) 

if (nota < 0 || nota > 10) {
    console.log("Somente notas de 1 a 10")
} else if (nota >= 7){
    console.log("Aprovado")
}else if (nota >= 4 && nota <= 6){
    console.log("Recuperação")
} else console.log("Reprovado")
