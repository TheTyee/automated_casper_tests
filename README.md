# automated_casper_tests
A basic script for Casper.js/Phantom.js, checking to see if everything is where it should be in the DOM, and whether the site has updated. Currently an MVP.

##Implementation##
The general idea is to set up a cron job that runs auto.sh daily, once at night, and once early in the morning. Casper generates a screencap of the page and populates a list of the current headlines, allowing editorial to check a visual diff at a glance. 

The shell script executes the time-appropriate casper script (AM-script.js or PM-script.js), based on the time the cron job runs at. The scripts trigger Phantom.js to navigate the site, and pass back the desired data from the DOM. Using node, it creates json files with page information, which then populates (at the moment) an HTML page with status bars for each page, and an accordion UI that reveals detailed information (see example.png).

##Main Dependencies##
Casperjs
PhantomJS

##To dos##
Egad. A lot.

[ ] Compare AM-headlines.json and PM-headlines.json to create a simple diff
[ ] Handle the diff in the UI for ease of use and scannability by dynamically generating a status - if there is a diff, that means the site updated overnight. If there isn't, it did not. Ideally updates would be green and non-updates orange.
[ ] Use Casper to loop through all section pages, including polls and Tyee Presents and return data.
[ ] Add functionality that checks for 404 or 500 internal links
[ ] Clean up the hacky code


##Gotchas##
- The popups cause a bit of a hassle in Casper, and the selector has to be hard-coded for specificity. This makes it wicked brittle, and likely to need upkeep or a better dynamic solution.
- Paths in the bash script are obviously specific to my local machine. 
- index.html is built in a table in case sending an email is a preferable solution for editorial.








