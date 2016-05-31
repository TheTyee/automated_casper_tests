#!/bin/bash
# Find Phantom and Casper
PHANTOMJS_EXECUTABLE=/Applications/MAMP/htdocs/automated_casper_tests/node_modules/phantomjs-prebuilt/bin/phantomjs /Applications/MAMP/htdocs/automated_casper_tests/node_modules/casperjs/bin/casperjs
# Determine if current time is AM or PM
TIMEOFDAY='$(date +"%p")'
# Go to the directory where the casper script lives
cd /Applications/MAMP/htdocs/automated_casper_tests/

# If it's evening, run the PM script; else run AM script
if [ TIMEOFDAY = 'am' ]
then
casperjs AM-script.js
echo 'am'
else
casperjs PM-script.js
echo 'pm'
fi

exit 0

# tailf /var/log/cron
