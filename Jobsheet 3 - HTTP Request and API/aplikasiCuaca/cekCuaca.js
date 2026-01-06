const request = require('postman-request')
const urlCuaca = "http://api.weatherstack.com/current?access_key=bf391ef1f581f98b5aefd201b38dafe0&query=-0.896801319255869,%20100.35021044879353&units=m";
request({ url: urlCuaca, json: true }, (error, response) => {
console.log(`Saat ini suhu diluar mencapai ` +
response.body.current.temperature +
` derajat celcius. Kemungkinan terjadinya hujan adalah
` + response.body.current.precip+ `%` + ` dengan cuaca : ${response.body.current.weather_descriptions[0]}`) 
})