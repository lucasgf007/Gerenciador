// pegar produtos no banco de dados
// ex: 
const { count } = require('console')
const { Model, DataTypes, Sequelize } = require('sequelize')
const { sequelize } = require('../instances/mysql') 
const { Op } = require('sequelize')

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
        type: DataTypes.INTEGER
    },
    qtdtotal: {
        type: DataTypes.INTEGER
    },
    qtdcard: {
        type: DataTypes.INTEGER
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
            where: { id_user },
            [Op.or]: [
                {qtdcard: 1},
            ],
        })

        return size
    },
    getUser: async (id_user)=>{
        return await dadosBanco.findAll({ where: {id_user} })
    }, 
    getSeach: async (id_user, nomecard, data)=>{
        return await dadosBanco.findAll({ 
            where: {
                id_user, 
                [Op.or]: [
                    {data},
                    {nomecard}
                ],
                 
            },
         })
    }
}

module.exports.Dados = Dados
module.exports.dadosBanco = dadosBanco
