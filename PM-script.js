
var pageUrls = ['http://thetyee.ca/'];

var casper = require('casper').create({
	verbose: false,
	logLevel: 'debug'
});

//Fire up the browser
casper.start('http://thetyee.ca', function(){



}).then(function() { 
	this.echo('initial snapshot');
	this.capture('images/first.png');





});

//include fs so we can write the results to a file.
var fs=require('fs');


//TESTING START

/* check for phantom user agent
casper.then(function(){

	//don't wrap this in an evaluate function because it's not in page scope, it's in script scope
	this.echo(window.navigator.userAgent);
});
*/

//Shuts the popup so we can manipulate the page

/*
casper.wait(3000, function(){
	var elem = document.getElementsByClassName('support-modal');
	var visibility = window.getComputedStyle(elem[0], null).getPropertyValue("display");
	if (visibility != 'block')

});

*/

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
		this.capture('images/captured-PM.png');
		this.echo('then picture taken');

	});

});


	//Next, check if the headlines have updated since yesterday
	casper.then(function(){
	    listItems = this.evaluate(function () {
	    	//Get all the titles
	        var nodes = document.querySelectorAll('h4 a');
	        return [].map.call(nodes, function(node) {
	            return  '\n' + node.textContent;
	        });
	    });
	    this.echo(this.getCurrentUrl());
	    this.echo(listItems);
	    fs.write('returned_data/PM-headlines.json', JSON.stringify(listItems), 'a');
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
		fs.write('returned_data/PM-images.json', JSON.stringify(listImages), 'a');
	});

	//put all images into an array, write it to json
	//based on the day of the week, if PM headlines != AM headlines, there should be no problem




casper.run();


