const fs = require('fs')
const path = require('path')
const Sequelize = require('sequelize')
const config = require('../config/config')
const db = {}

const sequelize = new Sequelize(
    config.db.database,
    config.db.user,
    config.db.password,
    config.db.options
)

// const sequelize = new Sequelize('database', 'username', 'password', {
//     host: 'localhost',
//     dialect: 'sqlite'
//   });

  console.log(__dirname)
fs.readdirSync(__dirname)
.filter((file) => 
 file !== 'index.js'
)
.forEach((file) => {
    console.log("file " + file)
    console.log("path.join(__dirname,file) " + path.join(__dirname,file))
    const model = require(path.join(__dirname,file))(sequelize, Sequelize.DataTypes)
    console.log("model " + model)
    db[model.name] = model
})

db.sequelize = sequelize
db.Sequelize = Sequelize

module.exports = db