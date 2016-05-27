// Click the first link in the casperJS page

var casper = require('casper').create({
	verbose: false,
	logLevel: 'debug'
});

//Fire up the browser
casper.start('http://thetyee.ca/').thenClick('.close span', function() { 

//include fs so we can write the results to a file.
var fs=require('fs');

//set up the headlines array
var headlines = new Array();

	//TESTING START

/* check for phantom user agent
casper.then(function(){

	//don't wrap this in an evaluate function because it's not in page scope, it's in script scope
	this.echo(window.navigator.userAgent);
});
*/


casper.waitForSelector('div#modalSupport.modal.fade.support-modal.in', function() {

   	this.click('a.builder.link');
   	this.echo('popup closed');
});





casper.then(function(){
	this.wait(20000,function(){
		this.capture('images/captured.png');
		this.echo('then picture taken');

	});

});


	//Next, check if the headlines have updated since yesterday
/*	casper.then(function(){
	    listItems = this.evaluate(function () {
	    	//Get all the titles
	        var nodes = document.querySelectorAll('h4');
	        return [].map.call(nodes, function(node) {
	            return  '\n' + node.textContent;
	        });
	    });
	    this.echo(listItems);
	    fs.write(new Date()+'-file.txt', listItems, 'a');
	});  //end list headlines
*/
/*
	casper.then(function(){
		//Returns all image paths
		  listImages = this.evaluate(function () {
			var images = document.querySelectorAll('img');
			return [].map.call(images, function(node){

				  if (this.visible('#hplogo')) {
        this.echo("I can see the logo");
    } else {
        this.echo("I can't see the logo");
    }
				return  '\n' + node.attributes.item().nodeValue;

				});
			});
		this.echo(listImages);
	});
*/
	casper.on("page.error", function(msg, trace) {
	  this.echo("Error:    " + msg, "ERROR");
	  this.echo("file:     " + trace[0].file, "WARNING");
	  this.echo("line:     " + trace[0].line, "WARNING");
	  this.echo("function: " + trace[0]["function"], "WARNING");
	  errors.push(msg);
	});



});

casper.run();


