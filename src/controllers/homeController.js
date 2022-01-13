// imports
const Router = require('express')
const sequelize = require('../instances/mysql')

let seq = sequelize.sequelize

const index = async (req, res)=>{
    res.render('pages/index')
}

const logout = async (req, res) => {
    req.session.destroy();

    res.redirect('/')
}


// export
module.exports.index = index
module.exports.logout = logout

