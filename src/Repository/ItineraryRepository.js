const uniqid = require('uniqid')
const db = require('./../config/db')
const moment = require('moment')

class ItineraryRepository {
  async find() {
    const list = db.getData('/itinerary/list')
    return list
  }
  async findById(id) {
    const list = await this.find()
    return list.find(x => x._id === id)
  }
  async findByDate(date) {
    try {
      const list = db.getData('/itinerary/list')
      const itinerary = list.find(
        x => x.date && moment(x.date).isSame(date, 'day')
      )

      return itinerary || null
    } catch (error) {
      return null
    }
  }
  async save(itinerary) {
    if (!itinerary._id) {
      itinerary._id = uniqid()
    }
    db.push(`/itinerary/list[]`, itinerary)
    return itinerary
  }
  async update(itinerary) {
    const list = await this.find()
    db.push(
      `/itinerary/list`,
      list.map(c => {
        if (c._id === itinerary._id) {
          c = itinerary
        }
        return c
      })
    )
    return itinerary
  }
}

module.exports = new ItineraryRepository()
