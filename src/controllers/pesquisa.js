const { Dados } = require('../models/Dados') // dados de acordo com o usuario


const pesquisa = async (req, res)=>{

    let dados


    let data = req.query.data
    let nome = req.query.nome
    let tipo = req.query.tipo
 
    dados = await Dados.getSeach(req.session.id_user, nome, data, tipo)

    let adm = req.session.adm_user

    res.render('pages/inicio', {
        dados,
        adm,
    })
}

module.exports.pesquisa = pesquisa