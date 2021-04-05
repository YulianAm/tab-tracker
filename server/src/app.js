const express = require('express')
const bodyparser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const app = express()

app.use(morgan('combined'))
app.use(bodyparser.json());
app.use(cors())

app.get('/register', (req, res) => {
 res.send({
     message: `${req.body.email}ss your user was registered with password test ${req.body.password}`
 })
})

app.listen(process.env.PORT || 8082)

