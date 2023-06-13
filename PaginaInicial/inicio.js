// Botão para navegar até a média

const botaoMedia = document.getElementById('botaoMedia')

function irParaMedia() {
    setTimeout(function(){
        window.location.href = "../Media/media.html";
    }, 400);
}

botaoMedia.addEventListener('click', irParaMedia);



// Botão para navegar até a regra de três

const botaoRegraDeTres = document.getElementById('botaoRegraDeTres')

function irParaRegraDeTres() {
    setTimeout(function() {
        window.location.href = "../RegraDeTres/regraDeTres.html";
    }, 400);
}

botaoRegraDeTres.addEventListener('click', irParaRegraDeTres)