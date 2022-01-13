const dotenv = require('dotenv')
const JWT = require('jsonwebtoken')
const { User } = require('../models/User')



dotenv.config()


const Key = {
    gravar: async (id, key)=> {

        
    },
    exebirKey: async (req) => {
        const [authType, token] = req.headers.authorization.split(' ')
            if (authType === 'Bearer') {

                try{
                    const decoded = JWT.verify(token, process.env.JWT_SECRET_KEY)

                    console.log(decoded)
                } catch(err){
                    
                }
            }
    }

}


const Auth = {
    private: (req, res, next)=> {
        // console.log(req)
        let success = true
        // verificação
        if (req.headers.authorization) {
            
            const [authType, token] = req.headers.authorization.split(' ')
            if (authType === 'Bearer') {

                try{
                    const decoded = JWT.verify(token, process.env.JWT_SECRET_KEY)
                } catch(err){
                    
                }
            }

        }

        if(success){
            next()
        } else {
            res.status(403)
            res.json({ error: 'Não autorizado' })
        }

    }
}

module.exports.Auth = Auth
module.exports.Key = Key