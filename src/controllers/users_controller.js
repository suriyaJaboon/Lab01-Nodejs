import express from 'express'
import authen_service from '@/services/authen_service'
import users_service from '@/services/users_service'
import validator from '@/utils/validator'
const users_route = express.Router()

users_route.get('/:id', async (req, res) => {
    let id = await authen_service.login(req.params.id)
    return res.json({'users': id})
})

users_route.post('', async (req, res) => {
    let valid = validator.create_user(req, res)
    if(valid) {
        try {
            let user = req.body
                delete user.confirmPassword
                let data = await users_service.create(user)
                return res.send(data)
        } catch(e) {
            return res.sendStatus(500).json(e)
        }
    } else {
        return valid
    }
})

export default users_route