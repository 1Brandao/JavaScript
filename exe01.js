/* Crie uma função que receba um array de números (notas de um aluno) e calcule a média. Use variáveis let e const adequadamente. Em seguida, use um if-else para verificar se o aluno está aprovado (média ≥ 7) ou reprovado. */

const grades = [9.0, 8.5, 7.0, 10.0];

function calcAvarage(grades) {
  let sum = 0;
  for (let i = 0; i < grades.length; i++) {
    sum += grades[i];
  }

  const average = sum / grades.length;

  if (average >= 7) {
    console.log("Aluno aprovado!");
  } else {
    console.log("Aluno reprovado!");
  }

  return average;
}

function main() {
  const average = calcAvarage(grades);
  console.log(`Média: ${average.toFixed(2)}`);
}

main();
