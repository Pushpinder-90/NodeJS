const yargs = require('yargs');

const geocode = require('./geocode/geocode');
const weather = require('./weather/weather');

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
// Here we calling abstract callbacks in geocodeAddress function from geocode.js
//first argument in geocode for passing the address to backend and second callback argument is passed to get the result 
geocode.geocodeAddress(argv.address , (errorMessage, results)=>{
	if(errorMessage){
		console.log('errorMessage :: ',errorMessage);		
	} else{
		console.log(JSON.stringify(results, undefined , 2));
		console.log(results.address);
		// for chaining of callbacks writing weather into gecode api
		weather.getWeather(results.lattitude, results.longitude , (errorMessage ,results) => {
				if(errorMessage){
					console.log(errorMessage);		
				} else{
					console.log(JSON.stringify(results, undefined , 2));
				}
			});
	}
});

// Here we calling abstract callbacks in getWeather function from weather.js
// weather.getWeather(37.8267, -122.4233 , (errorMessage ,results) => {
// 	if(errorMessage){
// 		console.log(errorMessage);		
// 	} else{
// 		console.log(JSON.stringify(results, undefined , 2));
// 	}
// });
