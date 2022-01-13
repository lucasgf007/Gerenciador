// imports
const dotenv = require('dotenv')
const { User } = require('../models/User')
const JWT = require('jsonwebtoken')

const { Key } = require('../middlewares/auth')
const { Auth } = require('../middlewares/auth')
const { equal } = require('assert')

dotenv.config()

// POST - lista os dados
const veryUser = async (req, res)=>{

    if(req.body.nome && req.body.senha){
        let nome = req.body.nome
        let senha = req.body.senha

        let user = await User.findOne({
            where: { nome, senha }
        })
        if(user){
            console.log(user.id, user.adm)
            const token = JWT.sign(
                { id: user.id, adm: user.adm },
                process.env.JWT_SECRET_KEY,
                { expiresIn: '3h' }
            )

            let admin

            if (user.adm == 'sim') {
                admin = true
            } else {
                admin = false
            }
            const id = user.id


            req.session.id_user = id
            req.session.adm_user = admin
            req.session.token_user = token
            res.redirect('/inicio')
        } 
    }
    
    let msg_error = true
    res.render('pages/index', {
        msg_error,
    })

}

module.exports.veryUser = veryUser


