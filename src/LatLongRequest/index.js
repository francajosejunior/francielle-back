const rp = require('request-promise')
const cheerio = require('cheerio')
const Table = require('cli-table')

rp({
  url:
    'https://www.google.com.br/maps/place/R.+Francisco+Araújo+Chaves,+335+-+Jardim+Europa,+Jandira+-+SP'
})
  .then(body => {
    const $ = cheerio.load(body)
    const x = $.html()
    console.log(x)
  })
  .catch(error => console.log({ error }))
