const { Model, DataTypes, Sequelize } = require('sequelize')
const { sequelize } = require('../instances/mysql') 

const User = sequelize.define("User", {
    id: {
        primaryKey: true, // tem o auto incremento
        type: DataTypes.INTEGER
    },
    nome: {
        type: DataTypes.STRING
    },
    senha: {
        type: DataTypes.STRING
    },
    adm: {
        type: DataTypes.STRING
    },
    key: {
        type: DataTypes.STRING
    } 

}, {
    tableName: 'usuario',
    timestamps: false 
})

const Users = {
    getAll: async () => {
        return await User.findAll()
    },
    getUser: async (id_user)=>{
        return await User.findAll({ exclude: {id_user} })
    }
}

module.exports.User = User
module.exports.Users = Users