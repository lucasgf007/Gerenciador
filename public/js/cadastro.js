function cadastrarDados(){

    class Dados_{
        constructor(data, nome, trabalho, quantidade, qtdTotal, qtdCard){
            this.data = data
            this.nome = nome
            this.trabalho = trabalho
            this.quantidade = quantidade
            this.qtdTotal = qtdTotal
            this.qtdCard = qtdCard
        }
    
        validarDados(){
            for(let i in this){
                if(this[i] == null || this[i] == undefined || this[i] == ''){
                    return false // vai retornar para o if da function
                }
            }// vai percorrer o construct
            return true
        }
    }
    
    //ID
    let data = document.getElementById('data')
    let nome = document.getElementById('nomecard')
    let trabalho = document.getElementById('trabalho')
    let quantidade = document.getElementById('quantidade')
    let qtdTotal = 'nenhum valor'
    let qtdCard = 'nenhum valor'

    let dados = new Dados_(
        data.value, // recupero o valor do ID
        nome.value,
        trabalho.value,
        quantidade.value,
        qtdTotal,
        qtdCard
    )

    // logica de pontuação

    // qtdTotal
    if(trabalho.value == 'Retificação Layout' || trabalho.value == 'Retificação Folha'){
        dados.qtdTotal = '0'
        dados.qtdCard = '0' //qtdCard

    } if (trabalho.value == 'Mod Layout'){
        var qtd = parseFloat(quantidade.value) * 0.5
        dados.qtdTotal = qtd.toString()

    } if (trabalho.value == 'Layout' || trabalho.value == 'Folha' || trabalho.value == 'Mod Folha') {
        dados.qtdTotal = quantidade.value
    }
    // qtdCard
    if(trabalho.value == 'Layout' || trabalho.value == 'Folha' || trabalho.value == 'Mod Layout' || trabalho.value == 'Mod Folha'){
        dados.qtdCard = '1'
    }


    if(dados.validarDados()){
    //passagem correta

    validar = true // validação de dados

    // menssagem de sucesso
    document.getElementById('fraseRetorno').innerHTML = '<i class="fas fa-check-circle text-success mt-1"></i>'
    //document.getElementById('modal_msg').className = 'text-success'

    // limpando os campos do formulario 
    //data.value = ''
    

    console.log(dados)

    } else { // qd for falso

    // menssagem de erro
    document.getElementById('fraseRetorno').innerHTML = '<i class="fas fa-times-circle text-danger mt-1"></i>'
    document.getElementById('msgError').innerHTML = '<div class="alert alert-danger alert-dismissible fade show mt-3" role="alert"> Ops, você preecheu seus dados de forma incorreta, verifique se tem algum campo vazio e envie novamente. 🤨<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button></div>'
    //document.getElementById('modal_msg').className = 'text-danger'


    // error 
    }

    
    

}
