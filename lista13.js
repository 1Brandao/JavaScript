/* Uma empresa realiza pesquisas de satisfação regularmente, armazenando as respostas em um array. Cada resposta é um número de 1 a 5, representando a satisfação do cliente. Implemente as seguintes funcionalidades:

Calcule a média das respostas usando reduce.
Crie um novo array contendo apenas as respostas que foram acima de uma determinada nota usando filter.
Verifique se todos os clientes deram uma nota acima de um determinado valor usando every.
Ordene as respostas da mais alta para a mais baixa usando sort.
Conte quantas vezes cada nota foi dada usando reduce para criar um objeto de contagem. */

const satisfactionRatings = [4, 5, 3, 2, 5, 4, 5, 1, 5, 5];
const average =
  satisfactionRatings.reduce((acc, rating) => acc + rating, 0) /
  satisfactionRatings.length;
const aboveThreshold = satisfactionRatings.filter((rating) => rating > 3);
const allAboveThreshold = satisfactionRatings.every((rating) => rating > 3);
const sortedRatings = satisfactionRatings.sort((a, b) => b - a);

const ratingCount = satisfactionRatings.reduce((acc, rating) => {
  acc[rating] = (acc[rating] || 0) + 1;
  return acc;
}, {});

console.log("Média das respostas:", average);

console.log("Respostas acima de 3:", aboveThreshold);

console.log("Todos os clientes deram uma nota acima de 3:", allAboveThreshold);

console.log("Ordenadas da mais alta para a mais baixa:", sortedRatings);

console.log("Contagem de cada nota:", ratingCount);
