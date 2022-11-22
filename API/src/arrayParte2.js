const numeros = [2, 4, 6, 8, 10, 15, 20, 4 ];

// Métodos de acesso: node
// .includes()
// .indexOf()
// .slice()
// console.log('Usando includes(): ' + numeros.includes(4, 3 ));

// console.log('Usando indexOf(): ' + numeros.indexOf(4, 2));

// console.log('Usando slice(): ' + numeros.slice(2, 5));

// Métodos de iteração: 
// .filter()
// .map()
// .reduce()

 console.log('Usando .filter(): ' + numeros.filter((element) => element > 6));

// console.log('Usando .map(): ' + numeros.map((element) => {
//   return element * 10;
// }));

// console.log('Usando .reduce(): ' + numeros.reduce((anterior, atual) => {
//   return anterior + atual;
// },0));

