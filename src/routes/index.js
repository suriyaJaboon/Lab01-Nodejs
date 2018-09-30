import express from 'express'
import users from '../controllers/users'
const routes = express.Router()

routes.use('/users', users)

// routes.use('/users', users)
routes.get('*', (req, res) => {
    res.json({url: req.path, message: 'not found'})
})
export default routes