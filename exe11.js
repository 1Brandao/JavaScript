/* Uma escola precisa de um sistema para registrar a presença dos alunos em diferentes aulas. Cada dia, a presença é armazenada em um array de objetos com as propriedades nomeDoAluno e presente (true ou false). Escreva funções para:

Adicionar um registro de presença para um dia específico.
Contar quantas vezes um aluno específico esteve presente usando filter e length.
Criar um novo array com os nomes dos alunos que estiveram presentes todos os dias usando filter e every.
Verificar se algum aluno faltou todos os dias usando some.
Ordenar os alunos pelo número de presenças em ordem decrescente.*/

let presences = [
  [
    { studantName: "Guilherme", presence: true },
    { studantName: "Arthur", presence: true },
    { studantName: "Eduardo", presence: false },
    { studantName: "Gabriel", presence: true },
    { studantName: "Natan", presence: false },
  ],
  [
    { studantName: "Guilherme", presence: true },
    { studantName: "Arthur", presence: true },
    { studantName: "Eduardo", presence: false },
    { studantName: "Gabriel", presence: true },
    { studantName: "Natan", presence: false },
  ],
];

function getPresence(presence) {
  return presences.filter((item) => item.presence === presence);
}

function countPresence(studantName) {
  return getPresence(true).filter((item) => item.studantName === studantName)
    .length;
}

function getPresentDays(studantName) {
  return getPresence(true).filter((item) => item.studantName === studantName);
}

function hasAllPresent(studantName) {
  return getPresentDays(studantName).length === presences.length;
}

function hasAnyAbsent(studantName) {
  return getPresence(false).some((item) => item.studantName === studantName);
}

function sortPresences() {
  return presences.sort((a, b) => b.presence - a.presence);
}

console.log(countPresence("Gabriel")); // 2

console.log(getPresentDays("Gabriel")); // [ { studantName: 'Gabriel', presence: true }, { studantName: 'Gabriel', presence: true } ]

console.log(hasAllPresent("Gabriel")); // true

console.log(hasAnyAbsent("Eduardo")); // false

console.log(sortPresences()); // [ { studantName: 'Natan', presence: true }, { studantName: 'Gabriel', presence: true }, { studantName: 'Arthur', presence: true }, { studantName: 'Guilherme', presence: true }, { studantName: 'Eduardo', presence: false } ]
