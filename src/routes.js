const express = require('express')
const CardController = require('./controllers/CardController')
const ItineraryController = require('./controllers/ItineraryController')

const routes = new express.Router()

routes.get('/card', CardController.index)
routes.post('/card', CardController.store)

routes.get('/itinerary', ItineraryController.index)
routes.get('/itinerary/:date', ItineraryController.getByDate)
routes.delete(
  '/itinerary/:itineraryId/:cardId/',
  ItineraryController.removeCard
)
routes.post('/itinerary/:itineraryId', ItineraryController.addCard)

module.exports = routes
