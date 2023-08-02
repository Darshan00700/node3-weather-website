const request = require('request')
const forecast = (latitude,longitude, callback) => { 
    const url = `http://api.weatherstack.com/current?access_key=15bb2f405d0ae84822d0dd3cbe269d86&query=${latitude},${longitude}`
    request ({ url ,  json: true}, (error,{body}) => {
           if(error){
                callback("Unable to connect to weather service!",undefined);
           }
           else if(body.error){
            callback(`Unable to find location`,undefined)
           }
           else{
            callback(undefined,`It is currently ${body.current.temperature} in ${body.location.name} degrees out. It feels like ${body.current.feelslike} degrees out`)
           }

})
}

module.exports = forecast