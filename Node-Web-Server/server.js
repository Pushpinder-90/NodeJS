const express = require('express');
const hbs = require('hbs');
// process.env is an object that stores all the environemnt variables or set default port 3000
const port = process.env.PORT || 3000 ;


var app = express();

//here telling the express app about view engine
app.set('view engine' , 'hbs');
hbs.registerPartials(__dirname +'/views/partials'); //giving the partials path here


// used to maintenance page
// app.use((req,res, next)=>{
// 	res.render('maintenance.hbs');
// })

// registering helpers to pass the data dynamically to the browser
hbs.registerHelper('getFullYear' , () =>{
	return new Date().getFullYear()
});

hbs.registerHelper('pageTitleHelper' , function(){
	var pagetitle = 'welcome to Home ';
	return pagetitle;
});



app.get('/', (req,res)=>{
	// res.send('<h1>Hello express !!</h1>')
	// res.render is using instead of send method
	res.render('home.hbs', { 
		pageTitle:'Home Page'
	});
});

app.get('/about', (req,res)=>{
	// res.send('About is called');
	res.render('about.hbs' , {
		pageTitle:'About Page',
		// currentDate: new Date().getFullYear() // using registerHelper('getFullYear') instead of this line 
	});
})


app.get('/bad', (req,res)=>{
	res.send({
		errorMesssage : "bad request"
	});
});

// giving the Heroku port here
app.listen(port,()=>{
	console.log(`Server starts on ${port}`);
});