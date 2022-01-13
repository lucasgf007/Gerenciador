const Router = require('express')

const router = Router()

router.get('/', (req, res)=>{
    res.send('painel do adm')
})
router.get('/dash', (req, res)=>{
    res.send('painel do dash adm ')
})

//export
module.exports.router = router