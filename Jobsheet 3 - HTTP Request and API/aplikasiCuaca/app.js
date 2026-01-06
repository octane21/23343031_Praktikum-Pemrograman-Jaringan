const request = require('postman-request')
const url =
  "https://api.weatherstack.com/current?access_key=bd6c2b341c9c38c1eb5d5fbc96a2d331&query=-0.897914,100.349193&units=s";
request({ url: url }, (error, response) => {
  // console.log(response)
  const data = JSON.parse(response.body);
  // console.log(data)
  // console.log(data.current)
  // console.log(data.current)
  // console.log(data.current)
  // console.log(data.current.temperature)
  console.log(
    `Saat ini suhu diluar mencapai ` +
      data.current.temperature +
      ` derajat celcius. Kemungkinan terjadinya hujan adalah
` +
      data.current.precip +
      `%` +
      ` dengan cuaca : ${data.current.weather_descriptions[0]}`
  );
});


const geocodeURL =
  "https://api.mapbox.com/geocoding/v5/mapbox.places/padang.json?access_token=pk.eyJ1IjoiY2FybGkyMTAiLCJhIjoiY21oNmk2cDJuMDkycDJpb2owbm02OWwxNiJ9.DPqfwD7LbAlU8EQQ2l1GSA&limit=2";
request({ url: geocodeURL, json: true }, (error, response) => {
  const latitude = response.body.features[0].center[1]
  const longitude = response.body.features[1].center[0]
  // console.log(response.body)
  console.log(`Koordinat lokasi anda adalah ${latitude}, ${longitude}`);
  console.log(`Data yang anda cari adalah: ${response.body.query[0]}`);
  console.log(
    `Data yang ditemukan adalah: ${response.body.features[0].place_name}`
  );
  console.log(`Tipe lokasi adalah: ${response.body.features[0].place_type[0]}`);
});

