import express from 'express'
import authen from '@/services/authen_service'
const login_route = express.Router()

login_route.post('', (req, res) => {
    return res.json({token: authen.login(req.body), message: 'successfully'})
})
export default login_route