const uniqid = require('uniqid')
const db = require('./../config/db')
class CardRepository {
  async find() {
    const cards = db.getData('/card/list')
    return cards
  }
  async save(card) {
    if (!card._id) {
      card._id = uniqid()
    }
    db.push(`/card/list[]`, card)
    return card
  }
  async update(card) {
    const cards = await this.find()
    db.push(
      `/card/list`,
      cards.map(c => {
        if (c._id === card._id) {
          c = card
        }
        return c
      })
    )
    return card
  }
}

module.exports = new CardRepository()
