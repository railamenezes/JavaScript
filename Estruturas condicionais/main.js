function salarioColaborador(salario = 280, aumento, novoSalario){
    if(salario <= 280){
        aumento = (salario * 20) / 100;

    }else if (salario > 280 && salario <= 700){
        aumento = (salario * 15) / 100;

    }else if(salario > 700 && salario <= 1500){
        aumento = (salario * 10) / 100;

    }else{
        aumento = (salario * 5) / 100;
    }
    
    return (novoSalario = salario + aumento);
}

console.log("O salário do colaborador é :");
console.log(salarioColaborador());






function maiorNumero(num1 = 5, num2 = 10, num3 = 8){
    if(num1 > num2 && num1 > num3){
        return num1;

    }else if (num2 > num3){
        return num2;

    }else{
        return num3;
    }
    
}
console.log('O maior é :')
console.log(maiorNumero());