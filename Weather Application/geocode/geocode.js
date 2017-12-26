const request = require('request');

var geocodeAddress = (address , callback) => {
	var encodedAddress = encodeURIComponent(address);

	request({
	// passed dynamic args through string template
	url:`https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
	json: true
	},(error , response, body)=>{
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
				address : body.results[0].formatted_address ,
				lattitude: body.results[0].geometry.location.lat,
				longitude:	body.results[1].geometry.location.lng
			});
		}
		
	});
};

// passing functions to exports module
module.exports = {
	geocodeAddress
	};