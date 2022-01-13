// imports
const { Dados } = require('../models/Dados') // dados de acordo com o usuario
const { dadosBanco } = require('../models/Dados')
const { Key, Auth } = require('../middlewares/auth')
const session = require('express-session')
const { Users } = require('../models/User')


const inicio = async (req, res)=>{
    console.log( 'id: ', req.session.id_user)

    let token = req.session.token_user
    // Auth.private(token)

    let dados = await Dados.getUser(req.session.id_user)

    let adm = req.session.adm_user

    res.render('pages/inicio', {
        dados,
        adm,
    })
}

// POST - lista os dados
const inicioPost = async (req, res)=>{

    if(req.body.data && req.body.nomecard && req.body.quantidade && req.body.tipo){
        let data = req.body.data
        let nomecard = req.body.nomecard
        let quantidade = req.body.quantidade
        let tipo = req.body.tipo
        let qtdtotal = 0
        let qtdcard = 0

        // logica de pontuação
        // qtdTotal
        if(tipo == 'Retificação Layout' || tipo == 'Retificação Folha'){
            qtdtotal = 0
            qtdcard = 0 //qtdcard

        } if (tipo == 'Mod Layout'){
            qtdtotal = quantidade * 0.5
        } if (tipo == 'Layout' || tipo == 'Folha' || tipo == 'Mod Folha') {
            qtdtotal = quantidade
        }
        // qtdcard
        if(tipo == 'Layout' || tipo == 'Folha' || tipo == 'Mod Layout' || tipo == 'Mod Folha'){
            qtdcard = 1
        }

        
        const user_form = await dadosBanco.create({
                id_user: req.session.id_user,
                data: data,
                nomecard: nomecard,
                tipo: tipo,
                quantidade: quantidade,
                qtdtotal: qtdtotal,
                qtdcard: qtdcard
        })

        res.redirect('/inicio');
    }


    let adm = req.session.adm_user

    let dados_error = true
    let dados = await Dados.getUser(req.session.id_user)

    res.render('pages/inicio', {
        dados_error,
        dados,
        adm
    });
}

const dash = async (req, res)=>{
    let geral = await Dados.getAll()
    let unico = await Dados.getUser(req.session.id_user)
    let abas = await Users.getAll()
    let adm = req.session.adm_user
    let unico_dash =await Dados.getUser(1)
    let unico_dash_2 = await Dados.getUser(2)

    let ver = true
    let dados
    if (adm == true) {
        dados = geral
    } else {
        dados = unico
    }
    res.render('pages/dados', {
        dados,
        adm,
        geral,
        abas,
        unico_dash,
        unico_dash_2,
    })
}

module.exports.dash = dash
module.exports.inicio = inicio
module.exports.inicioPost = inicioPost