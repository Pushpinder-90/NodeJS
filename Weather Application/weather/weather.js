const request = require('request');

var getWeather = (lat, lng, callback) => {
	request({
				url:`https://api.darksky.net/forecast/676deffef39df2c4026b4dac4c7a9c2f/${lat},${lng}`,            //dynamic url
				// url:'https://api.darksky.net/forecast/676deffef39df2c4026b4dac4c7a9c2f/37.8267,-122.4233',    //static url
				json: true
	},(error,response,body) => {	
		if(error){
			callback('Unable to connect to Google servers');
		}else if(response.statusCode === 400){
			callback('Unable to find the Address');
		 }else if(response.statusCode === 200){
			callback(undefined , {
				temperature  : body.currently.temperature ,
				apparentTemperature : body.currently.apparentTemperature
			});
		}
	});
}
	
// passing functions to exports module
module.exports = {
	getWeather:getWeather
	};