
const {User}  = require('../models')
module.exports = {
    async register (req, res) {
        try{
        const user = await User.create(req.body)
        res.send(user.toJSON())
        }catch(e){
            console.log(e)
            res.status(400)
            .send({
                error:`Email already exists`
            })
        }
    },
    joke(req,res) {
        res.send({
            message:`Hey ${req.body.email} you silly!`
        })
    }
}