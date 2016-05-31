
var address = 'http://thetyee.ca';

var casper = require('casper').create({
	verbose: false,
	logLevel: 'debug'
});



//Fire up the browser
casper.start(address, function(){

}).then(function() { 
	this.echo('initial snapshot');
	this.capture('images/first.png');

});

//include fs so we can write the results to a file.
var fs=require('fs');


casper.then(function(){
	//check if the page has the support popup
	if (this.exists('div#modalSupport.modal.fade.support-modal.in')){
		//If it does, close it
		casper.waitForSelector('div#modalSupport.modal.fade.support-modal.in', function() {
	   		this.click('a.builder.link');
   			this.echo('popup closed');
		});
	} else {
		this.echo('No modal present');
	}
});


casper.then(function(){
	this.wait(20000,function(){
		this.capture('images/captured-AM.png');
		this.echo('then picture taken');

	});

});


//Next, check if the headlines have updated since yesterday
casper.then(function(){
 	var details = new Array();
 	var listDetails;
	currentDate = new Date();

	details.push(currentDate);
	details.push(address);

    listDetails = JSON.stringify(details);
    this.echo(listDetails);
	fs.write('returned_data/AM-details.json', listDetails, 'w');

    
 
});  //end list headlines




	//Next, check if the headlines have updated since yesterday
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
		fs.write('returned_data/AM-headlines.json', listItems, 'w');
	
	    
	 
	});  //end list headlines



//put all headlines into an array, write it to json

	casper.then(function(){
		//Returns all image paths
		  listImages = this.evaluate(function () {
			var images = document.querySelectorAll('img');
			return [].map.call(images, function(node){

				return  '\n' + node.attributes.item().nodeValue;

				});
			});
		this.echo(listImages);
		
			fs.write('returned_data/AM-images.json', JSON.stringify(listImages), 'w');
		
	});

	//put all images into an array, write it to json
	//based on the day of the week, if PM headlines != AM headlines, there should be no problem




casper.run();


