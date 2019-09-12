const cardRepository = require('./../Repository/CardRepository')

class CardService {
  async find() {
    return cardRepository.find()
  }
  async save(card) {
    if (card._id) {
      return this.update(card)
    }

    return cardRepository.save(card)
  }
  async update(card) {
    return cardRepository.update(card)
  }
}

module.exports = new CardService()
