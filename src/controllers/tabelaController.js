// imports
const Router = require('express')
const { Op } = require('sequelize')
const { Dados } = require('../models/Dados') // dados de acordo com o usuario
const { User } = require('../models/User')
const { dadosBanco } = require('../models/Dados')


const delet = async (req, res)=>{
    let id = req.params.id
    await dadosBanco.destroy({ where: {id} })
    res.redirect('/inicio')
}

const deletUser = async (req, res)=>{
    let id = req.params.id
    await User.destroy({ where: {id} })
    res.redirect('/usuarios')
}

const atualizar = async (req, res)=>{
    let dados = req.params

    let adm = req.session.adm_user

    let nomecard = req.params.nomecard
    let tipo = req.tipo
    let quantidade = req.params.quantidade
    console.log(req.params)

    res.render('pages/atulizar', {
        dados,
        adm,
    })
}

const atualizarUser = async (req, res)=>{
    let user = req.params

    let adm = req.session.adm_user

    res.render('pages/atulizar', {
        user,
        adm
    })
}

const mude = async (req, res)=>{
        let id = req.params.id

        let data = req.query.data
        let nomecard = req.query.nomecard
        let quantidade = req.query.quantidade
        let tipo = req.query.tipo

        if(req.query.data){
            await dadosBanco.update({ 
                data: data,
                nomecard: nomecard,
                tipo: tipo,
                quantidade: quantidade,
            }, { where: { id } })
        } else {
            await dadosBanco.update({ 
                nomecard: nomecard,
                tipo: tipo,
                quantidade: quantidade,
            }, { where: { id } })
        }
    
        


    res.redirect('/inicio')
}

const mude_user = async (req, res)=>{
    let id = req.params.id

    let nome = req.query.nome
    let senha = req.query.senha
    let adm = req.query.adm

    await User.update({ 
        nome: nome,
        senha: senha,
        adm: adm,
    }, { where: { id } })

res.redirect('/usuarios')
}



module.exports.delet = delet
module.exports.atualizar = atualizar
module.exports.mude = mude
module.exports.deletUser = deletUser
module.exports.atualizarUser = atualizarUser
module.exports.mude_user = mude_user