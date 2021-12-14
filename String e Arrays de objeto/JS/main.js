// Array de objetos 
/// EXERCÍCIO 1
const alunas = [
    {
        id: 1,
        firstName: 'Luna',
        lastName: 'Kim',
        idade: '17',
        materiaDestaque: 'Inglês',
        notas:[10, 10, 10, 9.5, 10, 8],
        endereço:['Av. Rosa Bueno', 49, ' SP'],
    },
    {
        id: 2,
        firstName: 'Aya',
        lastName: 'Lee',
        idade: 18,
        materiaDestaque: 'Matemática',
        notas:[8, 10, 10, 10, 7, 5],
        endereço:['Rua Vasconcelos', 102, ' SP'],

    },
    {
        id: 3,
        firstName: 'Wenndy',
        lastName: 'Kimoto',
        idade:'17',
        materiaDestaque: 'Química',
        notas:[10, 8, 6, 8, 5, 7],
        endereço:['Rua Dois corações', 77,' SP'],
    },
];


for(let aluna = 0; aluna < alunas.length; aluna++){ //Aqui irá percorrer as alunas e seus array
    let nota = alunas[aluna].notas;
    let total = 0;
    for(let i = 0; i < nota.length; i++ ){ // irá percorrer os array dos arrays
        total = total + nota[i]; // Para somar as notas
        media = total / nota[i] // para dividir as notas pela contidade de notas
        function alunaMedia(mediaTotal = media){
            if (mediaTotal > 7){
                return 'Aprovada'
            }else{
                return 'Reprovada'
            }
        }
        
    }   
    
    console.log(`Aluna ${alunas[aluna].firstName} com as notas (${alunas[aluna].notas}), mora no endereço: ${alunas[aluna].endereço}. Teve a média ${media}, portanto foi ${alunaMedia()}`);
}
    
console.log('')



 
// /// EXERCÍCIO 2   
const pizza = [
    {
        id: 1,
        sabor: 'Queijo',
        ingredientes:['Massa ', 'Queijo ', 'Molho de tomate ', 'Oregano'],
        tamanho: ['P ','M ', 'G'],
        promoção: true,
        diaDaPromoção: 'Terça-feira'
    },
      {
        id: 2,
        sabor: 'Calabresa',
        ingredientes:['Massa ', 'Calabresa ', 'Molho de tomate ', 'Cebola'],
        tamanho: ['P ','M ', 'G'],
        promoção: false,
        diaDaPromoção: 'Sexta-feira'
    },
   {
        id: 3,
        sabor: 'Portuguesa',
        ingredientes:['Massa ', 'Queijo ', 'Presunto ', 'Molho de tomate'],
        tamanho: ['P ','M ', 'G'],
        promoção: false,
        diaDaPromoção: 'Quarta-feira'
    },
];

for(let cont = 0; cont < pizza.length; cont++){
let promoDia = pizza[cont].promoção
let valor = 50;

function promocaoDoDia(){
    if(promoDia == true){
        let desc = (valor * 0.25);
        let totalDesc = valor - desc;
        return `está por apenas $${totalDesc} reais, promoção do dia 25% de desconto. Proveite`
    
    }else{
        return 'não está na promoção';
    }
    
}
console.log(`A pizza ${pizza[cont].sabor.toUpperCase()} ou ${pizza[cont].sabor.substr(1,5)} de $${valor} reais, ${promocaoDoDia()}!`)
}