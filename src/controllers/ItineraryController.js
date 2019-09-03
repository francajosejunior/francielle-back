const Itinerary = require('./../models/Itinerary')

const path = require('path')

module.exports = {
  async index(req, res) {
    const itinerary = await Itinerary.find()
    res.json(itinerary)
  },
  async getByDate(req, res) {
    const date = req.params.date
    const itinerary = await Itinerary.find({
      date: { $gte: date, $lte: date }
    })

    res.json(itinerary)
  },

  async addCard(req, res) {
    const itineraryId = req.params.itineraryId
    const { number, address, neighborhood, name, lat, long, _id } = req.body

    const itinerary = await Itinerary.findById(itineraryId)
    itinerary.cards.push({
      number,
      address,
      neighborhood,
      name,
      lat,
      long,
      _id
    })

    await itinerary.save()

    res.json(itinerary)
  }

  // async removeCard(req, res) {
  //   const {  itineraryId,cardId } = req.params

  //   const itinerary = await Itinerary.findById(itineraryId)

  //   itinerary.cards = itinerary.cards.filter(c => c._id !== cardId)
  //   itinerary.removedCards = itinerary.cards.filter(c => c._id === cardId)

  //   await itinerary.save()

  //   res.json(itinerary)
  // }
}
