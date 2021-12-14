// Funções (simples)
//var num3 = 3;
function addNums  (num1 = 2, num2 = 5 ) {
    return num1 + num2; 
}

console.log(addNums());
console.log(addNums);

let x = addNums(10, 8); 

// Função com IF 
function valida (x) {
    if(x == 25)
        return "Igual"; 
    else  
      return "Diferente";
}               

console.log(valida()) 

// Faz a chamada da Função e depois cria a mesma 
let z = myFunc (1, 5);
console.log(z);

function myFunc (num1, num2){
    return num1 * num2; 
}

// ARROW FUNCTION 
const hello = () => {
    return "Olá Arrow Function"
}

 console.log(hello());
 console.clear(); 

const addNums2 = (num1 = 1, num2 = 1) => {
     return num1 + num2; 
}
console.log(addNums2()); 

// Arrays 
const bicicleta = { 
    rodas: 4, 
    cor : "verde", 
    name : "BMX",
    peso : 300,
    modelo : "XJT200", 
    marca : "Roberslei",
    peça : "guidao",
}

console.clear();

// Função boasVindas() carregando evento onload 
//(Função Simples)
function boasVindas() {
    alert("Bem vindo a nossa página");
    console.log("Bem vindo a nossa página");
}

// Função eventClique() carregando evento onclick 
//(Arrow Function)
const eventClique = () => {
    alert("Você clicou em um botão");
    console.log("Você clicou em um botão"); 
}

// Função eventClique() carregando evento onclick 
// (Arrow Function)
const mouseEmCima = ()  => {
    console.log("Mouse está em cima do título")
}




// Crie uma função que calcule a média de 4 notas e exiba o resultado no console.log
const media = (nota1 =5, nota2 = 7, nota3 = 6, nota4 = 10)=>{
    return notal + nota2 + nota3 + nota4 / 4; 
}

console.log(media()); 


// crie uma função que faça a conversão de Celsius para fahrenheit e exiba o resultado no console.log 

const celsius = (num1 = 23) => {
    return (num1*1.8) + 32; 
}

console.log(celsius()) 
 