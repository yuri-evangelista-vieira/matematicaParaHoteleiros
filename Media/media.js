const formulario = document.getElementById('formulario')
const botaoCalcular = document.getElementById('botaoCalcular')
const botaoAdicionar = document.getElementById('botaoAdicionar')
const botaoZerar = document.getElementById('botaoZerar')
const h1Resultado = document.getElementById('valorMedia')

let totalN = 4;
let camposAdicionados = [];


// função para adicionar um novo campo
function adicionarNumero() {
    if(totalN > 500) {
        alert('Não é possível adicionar mais números');
        return;
    }

    
    let labelNums = document.createElement('label');
    labelNums.htmlFor = 'numero' + totalN;
    labelNums.textContent = 'n' + totalN + ': ';
    // labelNums.id = 'valor' = totalN;
    camposAdicionados.push(labelNums)
    formulario.appendChild(labelNums);
    
    let campoNums = document.createElement('input');
    campoNums.type = 'number';
    campoNums.id = 'valor' + totalN;
    campoNums.className = 'numero';
    camposAdicionados.push(campoNums)
    
    formulario.appendChild(campoNums);
    
    console.log(camposAdicionados)
    
    totalN++
}

botaoAdicionar.addEventListener('click', adicionarNumero);



// adicionando o evento que vai remover o último campo adicionado.
botaoZerar.addEventListener('click', function() {
    const ultimoCampo = camposAdicionados.pop();
    const ultimoLabel = camposAdicionados.pop();

    if(ultimoCampo && ultimoLabel) {
        ultimoCampo.remove();
        ultimoLabel.remove();
    }
})



// função para calcular a média. 
function calcularMedia() {
    const campos = document.querySelectorAll('.numero');
    let soma = 0;

    for (let i = 0; i < campos.length; i++) {
        soma += Number(campos[i].value)
    }

    let resultado = soma / campos.length;

    h1Resultado.textContent = resultado.toFixed(2);x
}


botaoCalcular.addEventListener('click', calcularMedia)