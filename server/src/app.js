console.log('nice');
const express = require('express')
const bodyparser = require('body-parser')
const cors = require('cors')
const morgan = require('moragn')

const app = express()

app.use(moragn('combine'))
