/**O método percorre automaticamente os elementos do array.
O método pode executar uma função sobre cada elemento do array. */

// Método forEach()
const frutas = ['apple', 'orange', 'cherry', 'amora'];
frutas.forEach(minhaFuncao);
function minhaFuncao(item, index) {
console.log(`Índice: ${index}`);
console.log(`Elemento: ${item}`);
}

/**O arrow function, é uma forma muito mais prática e que
também torna o código mais enxuto e elegante. Utilizando
o mesmo código anterior com arrow function:
 */

// Método forEach() com Arrow Function
console.clear();
const frutas01 = ['apple', 'orange', 'cherry'];
frutas.forEach((index, item) => {
console.log(`Índice: ${index}`);
console.log(`Elemento: ${item}`);
});

// forEach() com array de objetos
console.clear();
const tarefas = [
{
id: 1,
texto: 'Levar o lixo para fora',
isCompleted: true,
},
{
id: 2,
texto: 'Encontrar com o chefe',
isCompleted: true,
},
{
id: 3,
texto: 'Consulta no dentista',
isCompleted: false,
},
];
tarefas.forEach((teste) => console.log(teste.texto));

/**O map() executa uma vez função para cada elemento de array que
possui um valor atribuído e constrói um novo array com base nos
valores retornados pela execução da função */

// Método map()
const numeros = [4, 9, 16, 25];
const newArray = numeros.map(Math.sqrt); //Math.sqrt (Raiz quadrada)
console.clear();
console.log('Números:');
console.log(numeros);
console.log('Novo array:');
console.log(newArray);

/**O filter() executa uma vez a função para cada elemento de array que
possui um valor atribuído e constrói um novo array com os
elementos que retornarem true para a condição no filtro.
 */
// Método filter
console.clear();
const idades = [32, 33, 16, 40];
let filtroIdade = idades.filter((idade) => {
return idade >= 18;
});
console.log(filtroIdade);

/**o find() executa uma vez função a para cada elemento de array e
retorna os valores que retornarem true para a condição configurada
no filtro.
 */

// Método find()
console.clear();
const meuArray = [
{nome: 'apples', quantidade: 2 }, 
{nome: 'bananas', quantidade: 0 },
{nome: 'cerejas', quantidade: 5 }, 
];

console.log(
meuArray.find((fruta) => {
return fruta.nome === 'cerejas';
}) );