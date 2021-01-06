const express = require("express")
const shoeRouter = express.Router()

shoeRouter.get("/", (req, res, next) =>{
    shoe.find((err, shoes) => {
        if(err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(shoes)
    })
})

module.exports = shoeRouter