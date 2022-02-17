require("dotenv").config();
const debug = require("debug")("calculator:root");

const express = require("express");
const { suma } = require("../../utils/operators");

const router = express.Router();

router.get("/calculator/suma/", (req, res, next) => {
  const { id } = req.params;
  debug(`they are asking for kitten ${id}`);
  res.json({ kitten: ["lorenzo", "Ermessenda"] });
  next();
});

router.get("/calculator/suma/", (req, res) => {
  debug(`Resquest arrived at ${req.url} with method ${req.method}`);

  const urlCalculator = new URL(`http://localhost:${port}${request.url}`);
  const variables = [];
  urlCalculator.searchParams.forEach((variable) => {
    variables.push(variable);
  });

  const a = variables[0];
  const b = variables[1];

  const resultadoSuma = suma(a, b);

  res.json({ suma: [resultadoSuma] });

  if (urlCalculator.pathname !== "/calculator") {
    response.statusCode = 404;
    response.write("<h1>not found</h1>");
  } else if (variables.length < 2) {
    response.statusCode = 404;
    response.write(
      "<h1>Please, you have to enter two numbers <br>following the next example: http://localhost:3002/calculator?a=6&b=3 </h1>"
    );
  } else {
    response.statusCode = 200;
    response.write(`<h1>HI! THIS ARE THE RESULTS:</h1><br> 
  <h2>${a}+${b} = ${resultadoSuma},<br>
  ${a}-${b} =${resultadoResta},<br>
  ${a}*${b} = ${resultadoMultiplicacion}<br>
  ${a}/${b} = ${resultadoDivision}</h2>`);
  }
  server.on("error", (error) => {
    debug(`error on server: ${error.name}`);
  });

  response.end();
});

module.exports = router;
