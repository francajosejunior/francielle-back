const mongosse = require('mongoose')

const CardShema = new mongosse.Schema(
  {
    number: { type: String, uppercase: true },
    address: { type: String, uppercase: true },
    neighborhood: { type: String, uppercase: true },
    name: { type: String, uppercase: true },
    lat: Number,
    long: Number
  },
  {
    timestamps: true
  }
)
module.exports.CardShema = CardShema
module.exports = mongosse.model('Card', CardShema)
