require("dotenv").config();
const express = require("express");
const debug = require("debug")("calculator:root");
const morgan = require("morgan");
const operationRouter = require("./routes/operationRouter");

const app = express();
app.use(morgan("dev"));

const initializeServer = (port) =>
  new Promise((resolve, reject) => {
    const server = app.listen(port, () => {
      debug(`Server listening on http://localhost:${port}`);
      resolve();
    });

    server.on("error", (error) => {
      const message =
        error.code === "EADDRINUSE" ? `Port ${port} busy` : error.message;

      reject(new Error(`Error on server: ${message}`));
    });
  });

app.use("/calculator", operationRouter);

module.exports = initializeServer;
