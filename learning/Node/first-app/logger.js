const EventEmitter = require("events");

let url = "";
class Logger extends EventEmitter{
  log(message) {
    // Send an HTTP Request
    console.log(message);
    // Raise an event
    this.emit("messageLogged", { id: 1, url: "url" });
  }
}

module.exports = Logger;

// ES:
// const _log = log;
// export { _log as log };
// export const endPoint = url;
