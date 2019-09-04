const ItineraryService = require('./../Services/ItineraryService')

module.exports = {
  async index(req, res) {
    const list = await ItineraryService.find()
    res.json(list)
  },
  async getByDate(req, res) {
    const date = req.params.date
    const itinerary = await ItineraryService.findByDate(date)
    res.json(itinerary)
  },

  async removeCard(req, res) {
    const { itineraryId, cardId } = req.params

    const itinerary = await ItineraryService.removeCard(itineraryId, cardId)
    res.json(itinerary)
  },

  async addCard(req, res) {
    const itineraryId = req.params.itineraryId
    const { number, address, neighborhood, name, lat, long, _id } = req.body
    const card = {
      number,
      address,
      neighborhood,
      name,
      lat,
      long,
      _id
    }

    const itinerary = await ItineraryService.addCard(itineraryId, card)
    res.json(itinerary)
  }
}
