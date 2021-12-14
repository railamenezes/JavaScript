//Exercício

const funcionarios = [
    {
        id: 1,
        nome: 'Wally',
        salario: 4800,
    },
    {
        id: 2,
        nome: 'Bob',
        salario: 2100,
    },
    {
        id: 3,
        nome: 'Ketty',
        salario: 3800,
    },
    {
        id: 4,
        nome: 'Cameron',
        salario: 2900,
    },
    {
        id: 5,
        nome: 'John',
        salario: 1900,
    },
];



funcionarios.forEach((funcio) => console.log(`Funcionário: ${funcio.nome} têm o sálario $${funcio.salario} reais.`));
//Reajuste
console.log('')
let newSalario = funcionarios.map((novoSalario) =>{
    let reaju = novoSalario.salario * 0.05;

      return reaju + novoSalario.salario;
   
});

console.log(`Com o reajuste: ${newSalario} `)
console.log('')

//Recebem mais de 5000
let filtroSalario = newSalario.filter((salari) =>{
    return salari >= 5000;
})

console.log(`O salário mais alto: ${filtroSalario}`);
console.log('')


//Pesquisar o funcionário Wally
console.log(funcionarios.find((funcionario) =>{
    console.log('Dados do funcionario:')
    return funcionario.nome === 'Wally';
}));