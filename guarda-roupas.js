let guardaRoupa = {
    cabideiro: ['camisa', 'casaco', 'calça', 'blusa', 'jaqueta', 'cinto', 'capa do batman'],
    gavetas: [
        ['meias verdes', 'cueca rasgada', 'cueca box'],
        ['camiseta azul', 'camiseta vermelha', 'camiseta thundercats'],
        ['sapatênis', 'sapato all star', 'kichute'],
    ],
    portas: 'Madeira',
    temEspelho: true
};

let luminarias = ['star wars', 'mario', 'pokemon', 'dragon ball', 'all star'];

for(let umaLuminaria of luminarias){
    guardaRoupa.cabideiro.push(umaLuminaria);    
}

console.log('Vou imprimir o cabideiro');
for(let peca of guardaRoupa.cabideiro){
    console.log(peca);
}

console.log('Vou imprimir as gavetas');
for(let gaveta of guardaRoupa.gavetas){
    for(let peca of gaveta){
        console.log(peca);
    }
}