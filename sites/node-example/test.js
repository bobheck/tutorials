var fs = require('fs');
var https = require('https');

fs.writeFile(__dirname + "/index.html","<h1>HTML is GREAT</h1>",function(error){
	if(error){
			return console.log(error);
		}
		else {
			return console.log("Congrats");
		}
	});
	
var url = 'https://raw.githubusercontent.com/LearnWebCode/welcome-to-git/master/images/dog.jpg';	
https.get(url,function(response){
	response.pipe(fs.createWriteStream(__dirname+ "/mydog.jpg"));
})