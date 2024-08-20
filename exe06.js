/* Crie um array de objetos, onde cada objeto representa um livro com propriedades como titulo, autor, ano e disponivel. Escreva funções para adicionar novos livros, remover livros, e listar todos os livros disponíveis. */

const book = {
  title: "",
  author: "",
  year: 0,
  availability: false,
};

var id = 0;
let books = [];

function addLibres(title, author, year, availability = true) {
  const newBook = {
    id: id,
    title: title,
    author: author,
    year: year,
    availability: availability,
  };
  id++;
  books.push(newBook);
  console.log(`Book ${title} has been added sucessfully`);
}

function removeLibres(id) {
  const index = books.findIndex((book) => book.id === id);
  if (index !== -1) {
    const removedBook = books[index];
    books.splice(index, 1);
    console.log(`Book ${id} - ${removedBook.title} has been removed!`);
  } else {
    console.log(`Book ${id} not found!`);
  }
}

function listLibres() {
  const booksAvailable = books.filter((book) => book.availability);
  if (booksAvailable.length === 0) {
    console.log(`No books available at this time`);
  } else {
    console.log(`Books available: `);
    booksAvailable.forEach((book) =>
      console.log(
        `ID: ${book.id} - Ttile: ${book.title}, Author ${book.author}, Year: ${book.year}`
      )
    );
  }
}

function main() {
  addLibres("Teste 01", "Guilherme", 2006);
  addLibres("Teste 02", "Arthur", 2007);
  addLibres("Teste 03", "Izas", 2008, false);

  listLibres();

  removeLibres(0);

  listLibres();
}

main();
