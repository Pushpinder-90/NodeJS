const request = require('request');

request({
	url:'https://maps.googleapis.com/maps/api/geocode/json?address=89%20near%20sharma%20store%20nangal%20town%20ship',
	json: true
},(error , response, body)=>{
	// below statement will return the object
	// console.log('body:',body); 

	// below statement will return the object as a string
	// console.log(JSON.stringify(body, undefined ,2));

	// can replace body with response
	// console.log(JSON.stringify(response, undefined ,2));
	
	// can replace body with error
	// console.log(JSON.stringify(error, undefined ,2)); // if domain is wrong
	
	// how to fetch data from JSON view Array 
	// console.log(`address: ${body.results[0].formatted_address}`);

	// to print lattitude and longitude
	console.log(`Geometry Lattitude: ${body.results[0].geometry.location.lat}`);
	console.log(`Geometry Longitude: ${body.results[1].geometry.location.lng}`);
});