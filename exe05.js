/* Crie uma aplicação simples de gerenciamento de tarefas usando objetos. Cada tarefa deve ter propriedades como titulo, descricao, status (concluída ou não), e prioridade. Implemente métodos para adicionar, remover, e alterar o status de uma tarefa. */

const tarefas = {
  title: "",
  description: "",
  taskStatus: false,
  priority: 1,

  createTask: function (title, description, taskStatus = false, priority = 1) {
    this.title = title;
    this.description = description;
    this.taskStatus = taskStatus;
    this.priority = priority;
    console.log(`Tarefa criada: ${this.title}`);
    return this;
  },

  removeTask: function () {
    console.log(`Tarefa removida: ${this.title}`);
    this.title = "";
    this.description = "";
    this.taskStatus = false;
    this.priority = 1;
  },

  updateTaskStatus: function (newStatus) {
    this.taskStatus = newStatus;
    console.log(
      `Status da tarefa "${this.title}" alterado para: ${
        this.taskStatus ? "Concluída" : "Não Concluída"
      }`
    );
    return this;
  },

  showTask: function () {
    console.log(`Tarefa: ${this.title}`);
    console.log(`Descrição: ${this.description}`);
    console.log(`Status: ${this.taskStatus ? "Concluída" : "Não Concluída"}`);
    console.log(`Prioridade: ${this.priority}`);
    console.log("-----------------------------");
  },
};

function main() {
  tarefas.createTask("Atividade 01", "Preenceher formulário", false, 2);
  tarefas.showTask();
  tarefas.showTask();

  tarefas.updateTaskStatus(true);
  tarefas.showTask();

  tarefas.removeTask();
  tarefas.showTask();
}

main();
