const request = require("postman-request")

const parameter = {
    api_key : "6c9cb537aafe7484fcc2006a72df69cb",
    place : "Dublin"
}

const url = `http://api.weatherstack.com/current?access_key=${parameter.api_key}&query=${parameter.place}`

request(url, function(error, response, body) {
    const content = JSON.parse(body)
    if (content.success === false)
    {
        console.log(content.error.info)
    }
    else
    {
        console.log(`Il fait ${content.current.temperature} degré a ${content.location.name} (${content.location.region},${content.location.country})`)
    }
})