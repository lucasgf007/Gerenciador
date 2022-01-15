// excel
const xl = require('excel4node')
const wb = new xl.Workbook()
const ws = wb.addWorksheet('nome da planilha')
const { Dados } = require('../models/Dados') // dados de acordo com o usuario


const excel = async (req, res)=>{

    let dados 

    if (req.session.adm_user == true) {
        dados = await Dados.getAll()
    } else {
        dados = await Dados.getUser(req.session.id_user)
    }

    
    const cabecalho = [
        "id",
        "id_user",
        "data",
        "nomecard",
        "tipo",
        "quantidade",
        "qtdtotal",
        "qtdcard"
    ]

    // titulus da coluna
    let Columindex = 1
    cabecalho.forEach(heading => {
        ws.cell(1, Columindex++).string(heading)
    })


    let rowIndex = 2

    // let excel = JSON.parse(dados)

    dados.forEach(record => {
        let columnIndex = 1
        Object.keys(record).forEach(columnName => {
            ws.cell(rowIndex, columnIndex++).string(record[columnName])
        });
        rowIndex++
    });

    let planilha = wb.write('dados.xlsx')


    let adm = req.session.adm_user

    res.render('pages/dados', {
        planilha
    })
}

module.exports.excel = excel