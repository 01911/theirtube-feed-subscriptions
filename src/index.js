require('dotenv').config();
const theirtube = require('./theirtube.js');
const schedule = require('node-schedule');
const argv = require('yargs').argv;
const chalk = require('chalk');

(async () => {
   await theirtube.initialize();
   //await theirtube.login(process.env.PERSONA1_USERNAME, process.env.PERSONA1_PASSWORD);
   //await theirtube.switchAccount(process.env.PERSONA1_USERNAME);
   await theirtube.scrape([process.env.PERSONA1_USERNAME]);
   return;
})();