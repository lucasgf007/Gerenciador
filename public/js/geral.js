//função ao clicar em sair

function sair(){
    return console.log('sair')
}


function logado(nome){
    document.getElementById('menssagem').innerHTML =  `<div class="alert alert-primary alert-dismissible fade show mt-2" role="alert"> <strong>Seja Bem vindo ${nome}!</strong> Pra Cima!!! 📢🚀 <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button></div>` 
}

function dataAtual(){
    data = new Date()
    let mes = parseFloat(data.getMonth()) + 1
    mes = mes.toString()
    let a = mes + " / " + data.getDate() + " / " + data.getFullYear()

    //console.log((new Date(a)).toLocaleDateString('pt-br'))
    document.getElementById('data').value =  (new Date(a)).toLocaleDateString('pt-br')
}

dataAtual()
