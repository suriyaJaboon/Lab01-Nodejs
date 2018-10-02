export default {
    create_user(req, res) {
        req.checkBody('name', 'Name is required').notEmpty()
        req.checkBody('email', 'Enter a valid Email Address').isEmail()
        req.checkBody('username', 'Username is required').notEmpty()
        req.check('password')
        .isLength({ min: 8, max: 100})
        .withMessage('Password must be between 8-100 characters long.')
        .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.* )(?=.*[^a-zA-Z0-9]).{8,}$/, 'i')
        .withMessage('Password must include one lowercase character, one uppercase character, a number, and a special character.')
        req.check('confirmPassword')
        .isLength({ min: 8, max: 100})
        .withMessage('Password must be between 8-100 characters long.')
        // .equals()
        var errors = req.validationErrors()
        if(errors) {
            return res.send(errors)
        } else {
            if(req.body.password !== req.body.confirmPassword) {
                return res.json({message: 'Password not match'})
            }
            return true
        }
    }
}