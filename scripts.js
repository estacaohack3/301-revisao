let imagens = document.querySelectorAll('.banner img');
let paragrafo = document.querySelector('.acordeao p');
let posicao = 0;
imagens[0].style.transform = 'translateX(0)';

setInterval(function(){
    imagens[posicao].style.transform = 'translateX(-100%)';
    posicao++;

    if(posicao == imagens.length){
        posicao = 0;

        for(let imagem of imagens){
            imagem.style.transform = 'translate(100%)';
        }
    }
    imagens[posicao].style.transform = 'translateX(0)';
}, 2000);

function mostrarTexto(){
    console.log(paragrafo.style.transform);
    if(paragrafo.style.transform == 'translateY(0px) scale(1)'){
        paragrafo.style.transform = 'translateY(-100%) scale(0)';
    }else{
        paragrafo.style.transform = 'translateY(0px) scale(1)';
    }
    
}