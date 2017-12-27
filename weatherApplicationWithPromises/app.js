const yargs = require('yargs');
const axios = require('axios');

// taking the user arguments address by yargs
var argv = yargs
			.options({
				address:{
					demand: true,
					alias: 'a',
					describe:'agruments for geocode address',
					string:true
				}
			})
			.help()
			.argv;
var encodedAddress = encodeURIComponent(argv.address);
var geocodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`;

// axios returns promises which are inbuilt in axios
axios.get(geocodeUrl).then((response)=>{
	// another new error handler
	if(response.data.status === 'ZERO_RESULTS'){
		throw new Error('Unable to find that address');
	}
	console.log(response.data);
	var lat = response.data.results[0].geometry.location.lat;
	var lng = response.data.results[0].geometry.location.lng;
	var weatherUrl = `https://api.darksky.net/forecast/676deffef39df2c4026b4dac4c7a9c2f/${lat},${lng}` ;
	console.log('weatherUrl :;',weatherUrl)
	console.log(response.data.results[0].formatted_address);
	return axios.get(weatherUrl); // chaining another axios call with promises
}).then((response) =>{
	var temperature  = response.data.currently.temperature;
	var apparentTemperature  = response.data.currently.apparentTemperature;
	console.log(`Its currently ${temperature} and it appears ${apparentTemperature}`);
})
  .catch((errorMessage) => {
	console.log(errorMessage);
});

  