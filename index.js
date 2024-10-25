const parameter = {
    access_key: "6c9cb537aafe7484fcc2006a72df69cb",
    query: "Paris"
}
const request = require("postman-request")
request(`http://api.weatherstack.com/current?access_key=${parameter.access_key}&query=${parameter.query}`, function (error, response, body){
    const {location, current} = JSON.parse(body)
    console.log(location)
    console.log(current)
    console.log(`
        Pays : ${location.country}
        Regions : ${location.region}
        Nom : ${location.name}
        Latitude : ${location.lat}
        Longitude : ${location.lon}
        `)
    console.log(`
        Température : ${current.temperature}
        Précipitations : ${current.precip}
        Humidité : ${current.humidity}%
        Vent : ${current.wind_speed}km/h
        `)
})
