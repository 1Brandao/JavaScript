/* Crie um array de objetos, onde cada objeto representa um usuário com propriedades como nome, idade e email. Em seguida, crie uma função que filtre os usuários maiores de idade e exiba seus nomes no console. */

let users = [
  { name: "Guilherme Brandao", age: 18, email: "guilhermebrandao@example.com" },
  {
    name: "Eduardo Turazzi",
    age: 17,
    email: "eduardoturazzi@example.com",
  },
  { name: "Arthus Conrado", age: 18, email: "arthurconrado@example.com" },
];

function filterUsersByAge(users) {
  let filteredUsers = users.filter((user) => user.age >= 18);
  filteredUsers.forEach((user) => console.log(user.name));
}

filterUsersByAge(users);
