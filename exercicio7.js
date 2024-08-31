// 7. As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$ 0,25 se
// forem compradas pelo menos doze. Escreva um algoritmo que leia o número de maçãs
// compradas, calcule e escreva o valor total da compra.
const prompt = require("prompt-sync")(); // Importa o módulo 'prompt-sync' para permitir a entrada de dados pelo usuário no console.

let numeroMacas = Number(prompt("Digite a quantidade de maças compradas: "))

if (numeroMacas >= 12){
      let dozeMacas = (numeroMacas * 0.25)
      console.log(`valor total das maças com o desconto ${dozeMacas}`)
} else {
      let poucasMacas = (numeroMacas * 0.30)
      console.log(`valor das maças normal ${poucasMacas}`)
} 