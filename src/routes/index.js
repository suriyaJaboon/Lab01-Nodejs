import express from 'express'
import users from '@/controllers/users_controller'
import authen from '@/controllers/authen_controller'
const routes = express.Router()

routes.use('/users', users)
routes.use('/login', authen)

routes.get('*', (req, res) => {
    res.json({url: req.path, message: 'not found'})
})
export default routes