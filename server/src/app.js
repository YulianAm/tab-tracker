const express = require('express')
const bodyparser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const {sequelize} = require('./models')

const config = require('./config/config')
const app = express()

app.use(morgan('combined'))
app.use(bodyparser.json());
app.use(cors())

require('./routes')(app)

sequelize.sync()
.then(() => {
    app.listen(config.port)
    console.log(`Server Started on port ${config.port}`)
})


