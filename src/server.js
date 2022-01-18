// ------------ imports nodemodules
// express import
const express = require('express')
const server = express();

// path import
const path = require('path')
// mustache import
const mustache = require('mustache-express')
const dotenv = require('dotenv')
// sessoes
const session  = require('express-session')
const flash = require('connect-flash')

// config a sessao
server.use(session({
    secret: 'lalala',
    resave: true,
    saveUninitialized: true
}))
server.use(flash())
// middlewares
server.use((req, res, next)=>{
    res.locals.token = req.flash('token')
    res.locals.error_msg = req.flash('error_msg')

    next()
})


// rotas import
const mainRoutes = require('./routes/index')


// dotenv | gerenciador de ambiente
dotenv.config()

// servidor
server.listen(process.env.PORT || 3000, ()=>{
    console.log('servidor ativo, executando na porta 3000')
})

// tamplate engines
server.set('view engine', 'mustache')
server.set('views', path.join(__dirname, 'views'))
server.engine('mustache', mustache())

// usando rotas
server.use(express.static(path.join(__dirname, '../public')))
server.use(express.urlencoded({extended: true})) // habilita o post
server.use(mainRoutes.router)



// pag 404
server.use((req, res)=>{
    res.status(404).render('error')
})
