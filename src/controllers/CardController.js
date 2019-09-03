const Card = require('./../models/Card')

const path = require('path')

module.exports = {
  async index(req, res) {
    const Cards = await Card.find()
    res.json(Cards)
  },
  async store(req, res) {
    const { number, address, neighborhood, name, lat, long } = req.body

    const card = await Card.create({
      number,
      address,
      neighborhood,
      name,
      lat,
      long
    })

    res.json(card)
  }
}
