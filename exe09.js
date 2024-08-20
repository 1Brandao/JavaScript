/* Você foi contratado para desenvolver um sistema de gestão de tarefas para uma pequena empresa. Cada tarefa é representada por um objeto contendo as propriedades titulo, descricao, prioridade e status. Crie um array que armazene todas as tarefas. Implemente funções para:

Adicionar uma nova tarefa ao array.
Remover uma tarefa específica do array usando splice.
Atualizar o status de uma tarefa (concluída ou pendente).
Ordenar as tarefas por prioridade usando sort.
Listar todas as tarefas pendentes. */

let task = {
  title: "",
  description: "",
  prority: 0,
  status: false,
};

let tasks = [];

function addTask(title, description, prority, status = false) {
  let newTask = {
    title: title,
    description: description,
    priority: prority,
    status: status,
  };
  tasks.push(newTask);
  console.log(`Tarefa ${newTask.title} adicionada com sucesso!`);
}

function removeTask(index) {
  tasks.splice(index, 1);
  console.log("Tarefa removida com sucesso!");
}

function updadeTaskStatus(index, newSatus) {
  tasks[index].status = newSatus;
  console.log("Status da tarefa atualizado com sucesso!");
}

function listPendingTasks() {
  let pendingTask = tasks.filter((task) => tasks.status === false);
  if (pendingTask.length === 0) {
    console.log("Nenhuma tarefa pendente!");
  } else {
    console.log("Tarefas pendentes:");
    pendingTask.forEach((task, index) => {
      console.log(`${index + 1}. ${task.title}`);
    });
  }
}

function orderByPriority() {
  tasks.sort((a, b) => a.priority - b.priority);
  console.log("Tarefas ordenadas por prioridade:");
  tasks.forEach((task, index) => {
    console.log(`${index + 1}. ${task.title} - Prioridade: ${task.priority}`);
  });
}

// Testes
addTask("Tarefa 1", "Descrição da tarefa 1", 3);
addTask("Tarefa 2", "Descrição da tarefa 2", 2);
addTask("Tarefa 3", "Descrição da tarefa 3", 1);
removeTask(1);
updadeTaskStatus(0, true);
listPendingTasks();
orderByPriority();
