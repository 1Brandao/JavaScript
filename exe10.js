/* Uma loja de e-commerce deseja analisar seus dados de vendas mensais. Eles forneceram um array onde cada elemento é um número representando o valor total de vendas em um determinado mês. Implemente as seguintes funcionalidades:

Calcule o total de vendas do ano usando reduce.
Encontre o mês com a maior venda usando Math.max e indexOf.
Filtre os meses com vendas acima de um determinado valor usando filter.
Verifique se houve algum mês com vendas abaixo de um determinado valor usando some.
Divida o array em dois arrays, um com os meses do primeiro semestre e outro com os meses do segundo semestre, usando slice. */

const monthlySales = [
  30000, 45000, 50000, 60000, 75000, 80000, 90000, 100000, 110000, 120000,
  130000, 140000,
];

//Encontrando o total de vendas do ano usando reduce
const totalAnnualSales = monthlySales.reduce(
  (total, currentValue) => total + currentValue
);
console.log("Total de vendas do ano:", totalAnnualSales);

//Encontrando o mês com a maior venda
const maxMonthlySale = Math.max(...monthlySales);
const maxMonthlySaleMonthIndex = monthlySales.indexOf(maxMonthlySale);
console.log("Mês com a maior venda:", maxMonthlySaleMonthIndex + 1);

//Filtrando os meses com vendas acima de um determinado valor

const threshold = 60000;
const aboveThresholdMonths = monthlySales.filter(
  (sale, index) => sale > threshold
);
console.log("Meses com vendas acima de", threshold, ":", aboveThresholdMonths);

//Verificando se houve algum mês com vendas abaixo de um determinado valor

const belowThresholdMonths = monthlySales.some(
  (sale, index) => sale < threshold
);
console.log(
  "Houve algum mês com vendas abaixo de",
  threshold,
  "?",
  belowThresholdMonths
);

//Dividindo o array em dois arrays

const firstSemesterMonths = monthlySales.slice(0, 6);
const secondSemesterMonths = monthlySales.slice(6);
console.log("Meses do primeiro semestre:", firstSemesterMonths);
console.log("Meses do segundo semestre:", secondSemesterMonths);
