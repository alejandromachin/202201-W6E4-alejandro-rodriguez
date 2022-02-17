require("dotenv").config();
const debug = require("debug")("calculator:root");

const initializeServer = require("./server");

const port = process.env.SERVER_PORT || 3001;

(async () => {
  await initializeServer(port);
  debug("Estamos activos");
})();

module.exports = port;
