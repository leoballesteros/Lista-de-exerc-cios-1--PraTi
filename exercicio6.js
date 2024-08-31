// 6. Ler três valores para os lados de um triângulo: A, B e C. Verificar se os lados fornecidos
// formam realmente um triângulo. Caso forme, deve ser indicado o tipo de triângulo:
// Isósceles, escaleno ou eqüilátero.
// Para verificar se os lados fornecidos formam triângulo: A < B + C e B < A + C e C < A + B
// Triângulo isósceles: possui dois lados iguais (A=B ou A=C ou B = C)
// Triângulo escaleno: possui todos os lados diferentes (A<>B e B <> C)
// Triângulo eqüilátero: possui todos os lados iguais (A=B e B=C)
const prompt = require("prompt-sync")(); // Importa o módulo 'prompt-sync' para permitir a entrada de dados pelo usuário no console.
const ladoUm = Number(prompt("Digite o valor do primeiro lado: "))
const ladoDois = Number(prompt("Digite o valor do segundo lado: "))
const ladoTres = Number(prompt("Digite o valor do terceiro lado: "))

if (
  ladoUm < ladoDois + ladoTres &&
  ladoDois < ladoUm + ladoTres &&
  ladoTres < ladoUm + ladoDois
) {
  console.log(" ---- Você inseriu valores que formam um triângulo ----")
  
  if (ladoUm === ladoDois && ladoDois === ladoTres) {
    console.log("Triângulo equilátero") // Verifica se todos os lados são iguais.
  } else if (ladoUm === ladoDois || ladoDois === ladoTres || ladoTres === ladoUm) {
    console.log("Triângulo isósceles")  // Verifica se todos os lados são diferentes
  } else { 
    console.log("Triângulo escaleno") // Caso contrário, o triângulo é "Isósceles" (dois lados iguais e um diferente)
  }
} else {
  console.log("Não é possível formar um triângulo com essas informações dadas.")
}
