const { JsonDB } = require('node-json-db')
// const { Config } = require('node-json-db/lib/JsonDBConfig')

const db = new JsonDB(__dirname + '/db', true, true, '/')

module.exports = db
