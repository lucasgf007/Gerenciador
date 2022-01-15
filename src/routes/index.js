// import { Router } from "express";
const { query } = require('express')
const Router = require('express')
const router = Router()

// import de controllers
const homeController = require('../controllers/homeController')
const dadosController = require('../controllers/dadosController')
const verificarUser = require('../controllers/verificarUser')
const tabelaController = require('../controllers/tabelaController')
const usuarios = require('../controllers/usuarios')
const pesquisa = require('../controllers/pesquisa')
const excel = require('../controllers/export')
const { Auth } = require('../middlewares/auth')

          //rota "/" primeira a exibir
// home
router.get('/', homeController.index)

// METODH GET
router.get('/inicio', Auth.private, dadosController.inicio)
router.get('/dash', Auth.private, dadosController.dash)
router.get('/usuarios', Auth.private, usuarios.users_geral)


// mudar dados
router.get('/usuario/:id/delet', tabelaController.delet)
router.get('/usuario/:id/:nomecard/:tipo/:quantidade/atualizar', tabelaController.atualizar)
router.get('/usuario/:id/mude', tabelaController.mude)

// mudar user
router.get('/user/:id/delet_user', tabelaController.deletUser)
router.get('/user/:id/:nome/:senha/:adm/atualizar_user', tabelaController.atualizarUser)
router.get('/user/:id/mude_user', tabelaController.mude_user)
router.get('/logout', homeController.logout)

// Rota de pesquisa
router.get('/pesquisa', pesquisa.pesquisa)

// export
router.get('/exportar', excel.excel)

// METODH POST
router.post('/enviado', dadosController.inicioPost)
router.post('/user', verificarUser.veryUser)
router.post('/enviado_user', usuarios.cadastro)





//export
module.exports.router = router
