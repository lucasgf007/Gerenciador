// pegar produtos no banco de dados
// ex: 
const { count } = require('console')
const { Model, DataTypes, Sequelize } = require('sequelize')
const { sequelize } = require('../instances/mysql') 

const dadosBanco = sequelize.define("Dados", {
    id: {
        primaryKey: true, // tem o auto incremento
        type: DataTypes.INTEGER
    },
    id_user: {
        type: DataTypes.INTEGER
    },
    data: {
        type: DataTypes.STRING
    },
    nomecard: {
        type: DataTypes.STRING
    },
    tipo: {
        type: DataTypes.STRING
    },
    quantidade: {
        type: DataTypes.STRING
    },
    qtdtotal: {
        type: DataTypes.STRING
    },
    qtdcard: {
        type: DataTypes.STRING
    }
}, {
    tableName: 'dados',
    timestamps: false
})


const dados = async ()=>{
    let users = await dadosBanco.findAll() // pega todos os dados

    return users
}



const Dados = {
    getAll: async () => {
        return await dadosBanco.findAll()
    },
    getSize: async (id_user) => {
        let { count: size, row: dados } = await dadosBanco.findAndCountAll({
            where: { id_user }
        })

        return size
    },
    getUser: async (id_user)=>{
        return await dadosBanco.findAll({ where: {id_user} })
    }
}

module.exports.Dados = Dados
module.exports.dadosBanco = dadosBanco
