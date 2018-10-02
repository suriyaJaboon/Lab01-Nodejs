import express from 'express'
import authen_service from '@/services/authen_service'
const users_route = express.Router()

users_route.get('/:id', async (req, res) => {
    let id = await authen_service.login(req.params.id)
    return res.json({'users': id})
})

export default users_route