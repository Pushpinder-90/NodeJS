const request = require('request');

var geocodeAddress = (address , callback) => {
	var encodedAddress = encodeURIComponent(address);

	request({
	// passed dynamic args
	url:`https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
	json: true
	},(error , response, body)=>{
		// console.log('body:',body);  // below statement will return the object
		// console.log(JSON.stringify(body, undefined ,2));	// below statement will return the object as a string
		// console.log(JSON.stringify(response, undefined ,2)); // can replace body with response
		// console.log(JSON.stringify(error, undefined ,2)); 	// can replace body with error

		 // if domain is wrong
		if(error){
			callback('Unable to connect to Google servers');
			// console.log('Unable to connect to Google servers'); //using callback here instead of console.log statement
		}else if(body.status === 'ZERO_RESULTS'){
			callback('Unable to find the Address')
			// console.log('Unable to find the Address')
		 //}else if(body.status === 'OVER_QUERY_LIMIT'){
		// 	callback('QUERY IS TOO LONG TO FIND')
			// console.log('QUERY IS TOO LONG TO FIND')
		}else if(body.status === 'OK'){
			//here callback contains two args (error , callback), we have no error so using undefined 
			callback(undefined , {
				Address :body.results[0].formatted_address ,
				Lattitude: body.results[0].geometry.location.lat,
				Longitude:	body.results[1].geometry.location.lng
			});
			// how to fetch data from JSON view Array 
		// console.log(`address: ${body.results[0].formatted_address}`); // printing formatted_address
		// console.log(`Geometry Lattitude: ${body.results[0].geometry.location.lat}`);// to print lattitude 
		// console.log(`Geometry Longitude: ${body.results[1].geometry.location.lng}`); // to print  longitude
		}
		
	});
};

// passing 
module.exports = {
	geocodeAddress
	};