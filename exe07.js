/* Crie uma função que receba um array de produtos (cada produto é um objeto com propriedades como nome, preco, categoria, e estoque). A função deve permitir buscar produtos por nome, filtrar por categoria e ordenar por preço. */

let product = {
  name: "",
  price: 0.0,
  category: "",
  stock: 0,
};

const products = [
  { name: "Camiseta", price: 29.99, category: "roupa" },
  { name: "Calça", price: 49.99, category: "roupa" },
  { name: "Tênis", price: 99.99, category: "calçado" },
  { name: "Boné", price: 19.99, category: "acessório" },
  { name: "Jaqueta", price: 89.99, category: "roupa" },
];

function filterbyName(products, name) {
  return products.filter((product) =>
    product.name.toLowerCase().includes(name.toLowerCase())
  );
}

function filterByCategory(products, category) {
  return products.filter(
    (product) => product.category.toLowerCase() === category.toLowerCase()
  );
}

function orderByPrice(products, order = "asc") {
  return products.sort((a, b) => {
    if (order === "asc") {
      return a.price - b.price;
    } else {
      return b.price - a.price;
    }
  });
}

function searchFilterOrderProduct(
  products,
  { name = "", category = "", order = "asc" }
) {
  let result = products;

  if (name) {
    result = filterbyName(result, name);
  }

  if (category) {
    result = filterByCategory(result, category);
  }

  if (order) {
    result = orderByPrice(result, order);
  }

  return result;
}

const filters = {
  name: "Calça",
  category: "roupa",
  order: "asc",
};

const result = searchFilterOrderProduct(products, filters);
console.log(result);
