require('dotenv').config();
var http = require('http');
const theirtube = require('./theirtube.js');
const schedule = require('node-schedule');
const argv = require('yargs').argv;
const chalk = require('chalk');

const scrape = async () => {
   await theirtube.initialize();
   //await theirtube.login(process.env.PERSONA1_USERNAME, process.env.PERSONA1_PASSWORD);
   //await theirtube.switchAccount(process.env.PERSONA1_USERNAME);
   await theirtube.scrape([process.env.PERSONA1_USERNAME]);
   return;
};

http.createServer(function (req, res) {
   //res.writeHead(200, { 'Content-Type': 'text/plain' });
   //res.write('Hello World!');
   //res.end();

   (async () => {
      scrape();
   })();
}).listen(process.env.PORT || 3333);