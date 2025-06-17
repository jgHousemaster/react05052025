function sayHello(name) {
  console.log("Hello" + name);
}

sayHello("Dan");

const Logger = require("./logger");
// ES:
// import logger from './logger';
const logger = new Logger()
console.log(logger);
logger.log("hh");

const path = require("path");
const pathObj = path.parse(__filename);
console.log(pathObj);

const os = require("os");
const totalMemory = os.totalmem();
const freeMemory = os.freemem();

console.log(`Total Memory: ${totalMemory}, Free Memory: ${freeMemory}`);

const fs = require("fs");

const files = fs.readdirSync("./");
console.log(files);
fs.readdir("./", function (err, files) {
  if (err) console.log("Error", err);
  else console.log("Result", files);
});

const EventEmitter = require('events');
const { log } = require("console");
const emitter = new EventEmitter()

// Register a listener
emitter.on('messageLogged', function(arg){
    console.log('Listener called', arg)
})

logger.on('messageLogged', function(arg){
    console.log('Listener called', arg)
})
logger.log('message')
