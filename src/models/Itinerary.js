const mongosse = require('mongoose')
const { CardShema } = require('./Card')

const ItineraryShema = new mongosse.Schema(
  {
    date: Date
    // cards: [CardShema],
    // removedCards: [CardShema]
  },
  {
    timestamps: true
  }
)

module.exports = mongosse.model('Itinerary', ItineraryShema)
