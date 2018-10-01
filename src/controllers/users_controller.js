import express from 'express'
import users from '@/services/users_service'
const users_route = express.Router()

users_route.get('/:id', (req, res) => {
    return res.json({'users': 'a'})
})

export default users_route