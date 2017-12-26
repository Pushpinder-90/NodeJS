const yargs = require('yargs');

const geocode = require('./geocode/geocode');
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
// Here we calling abstract callbacks in geocodeAddress function
//first argument in geocode for passing the address to backend and second callback argument is passed to get the result to frontend 
geocode.geocodeAddress(argv.address , (errorMessage, results)=>{
	if(errorMessage){
		console.log('errorMessage :: ',errorMessage);		
	} else{
		console.log(JSON.stringify(results, undefined , 2));
	}
});




