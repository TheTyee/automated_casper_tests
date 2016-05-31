
var address="http://thetyee.ca";

//Create Casper Object
var casper = require('casper').create({
	verbose: false,
	logLevel: 'debug'
});


//Fire up the browser
casper.start(address, function(){

	}).then(function() { 
		//use this spot for any one-off	
		console.log('Here we go!');	
});

//include fs so we can write the results to a JSON file for later manipulation.
var fs=require('fs');

//Check if the page has the support popup
casper.then(function(){		
	if (this.exists('div#modalSupport.modal.fade.support-modal.in')){
		//If it does, close it
		casper.waitForSelector('div#modalSupport.modal.fade.support-modal.in', function() {
	   		this.click('a.builder.link');
   			this.echo('popup closed');
		});
	} else {
		//If not, send a console message.
		this.echo('No modal present');
	}
});

//Screencap the page
casper.then(function(){
	this.wait(20000,function(){
		this.capture('../returned_data/home/images/captured-AM.png');
		this.echo('Page captured');
	});

});


//Next, grab the details of the page we're on, since we'll eventually want to loop through a bunch of them
casper.then(function(){
	//create an array we can add relevant details to when we like
 	var details = new Array();
 	//Get the date/time the script was run
	currentDate = new Date();

	//Push both into our array
	details.push(currentDate);
	details.push(address);

	//Stringify it
    listDetails = JSON.stringify(details);

    //Echo it in the console
    this.echo(listDetails);

    //Create a JSON file
	fs.write('../returned_data/home/AM-details.json', listDetails, 'w');
	this.echo('Details captured');		
});  

//Next, check if the headlines have updated since last script was run
casper.then(function(){
    listItems = this.evaluate(function () {
    	//Get all the titles
        var nodes = document.querySelectorAll('h4 a');
        return [].map.call(nodes, function(node) {
            return  '\n' + node.textContent;
        });
    });
	listItems = JSON.stringify(listItems);
    this.echo(listItems);
	fs.write('../returned_data/home/AM-headlines.json', listItems, 'w');
	this.echo('headlines');
});  //end list headlines


casper.run();


