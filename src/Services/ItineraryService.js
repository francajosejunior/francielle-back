const itineraryRepository = require('./../Repository/ItineraryRepository')

class ItineraryService {
  async find() {
    return itineraryRepository.find()
  }
  async findByDate(date) {
    let itinerary = await itineraryRepository.findByDate(date)

    if (!itinerary) {
      itinerary = this.save({
        date: new Date(),
        cards: [],
        removedCards: []
      })
    }
    return itinerary
  }
  async save(itinerary) {
    return itineraryRepository.save(itinerary)
  }
  async update(itinerary) {
    return itineraryRepository.update(itinerary)
  }
  async addCard(itineraryId, card) {
    const itinerary = await itineraryRepository.findById(itineraryId)
    itinerary.cards.push(card._id)
    return await itineraryRepository.update(itinerary)
  }
  async removeCard(itineraryId, cardId) {
    const itinerary = await itineraryRepository.findById(itineraryId)
    itinerary.removedCards = [
      ...itinerary.removedCards,
      ...itinerary.cards.filter(x => x === cardId)
    ]
    itinerary.cards = itinerary.cards.filter(x => x !== cardId)
    return await itineraryRepository.update(itinerary)
  }
}

module.exports = new ItineraryService()
