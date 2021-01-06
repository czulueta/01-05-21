const express = require("express")
const app = express()
const mongoose = require("mongoose")
const morgan = require("morgan")

app.use(express.json())
app.use(morgan("dev"))

mongoose.connect("mognogdb://loccalhost:27017/dbblackjack", 
    { useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false
    },
    () => console.log("connected to the database"))

app.use("/shoes", require("./routes/shoeRouter.js"))
app.use((err, req, res, next) => {
    console.log(err)
    return res.send({errMsg: err.message})
})
app.listen(9000, () => {
    console.log("successfully running on port 9000")
})