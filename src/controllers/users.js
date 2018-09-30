import express from 'express'
import users from '../services/users'
const users_route = express.Router()

users_route.get('/:id', (req, res) => {
    // let a = await users.getID(req.params.id)
    return res.json({'users': 'a'})
})

export default users_route