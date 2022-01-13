// imports
const { Op } = require('sequelize')
const { Users, User } = require('../models/User')

const users_geral = async (req, res)=>{
    let adm = req.session.adm_user
    let user = await Users.getAll()

    res.render('pages/userAdm', {
        adm,
        user,
    })
}

const cadastro = async (req, res)=>{

    if(req.body.nome && req.body.senha && req.body.adm){
        let nome = req.body.nome
        let senha = req.body.senha
        let adm = req.body.adm

        
        const user_form = await User.create({
            nome: nome,
            senha: senha,
            adm: adm,
        })
    } else {
        let nome = req.body.nome
        let senha = req.body.senha
        let adm = 'nao'

        const user_form = await User.create({
                nome: nome,
                senha: senha,
                adm: adm,
        })
    }

    res.redirect('/usuarios');
}

module.exports.users_geral = users_geral
module.exports.cadastro = cadastro
