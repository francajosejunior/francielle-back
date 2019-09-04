const CardService = require('./../Services/CardService')
const db = require('./../config/db')

const path = require('path')

module.exports = {
  async index(req, res) {
    const Cards = await CardService.find()
    res.json(Cards)
  },
  async store(req, res) {
    const card = await CardService.save(req.body)
    res.json(card)
  }
}
