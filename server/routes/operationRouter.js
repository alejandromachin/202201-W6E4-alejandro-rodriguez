require("dotenv").config();
const debug = require("debug")("calculator:root");

const { response } = require("express");
const express = require("express");
// const { port } = require("../../index");
const { suma, resta } = require("../../utils/operators");

const router = express.Router();

router.get("/suma", (req, res) => {
  debug(`Resquest arrived at ${req.url} with method ${req.method}`);
  const urlCalculator = new URL(`http://localhost:3001${req.url}`);

  const variables = [];
  urlCalculator.searchParams.forEach((variable) => {
    variables.push(variable);
  });

  const a = variables[0];
  const b = variables[1];

  const resultadoSuma = suma(a, b);

  res.json({ suma: resultadoSuma });

  response.end();
});
router.get("/resta", (req, res) => {
  debug(`Resquest arrived at ${req.url} with method ${req.method}`);
  const urlCalculator = new URL(`http://localhost:3001${req.url}`);

  const variables = [];
  urlCalculator.searchParams.forEach((variable) => {
    variables.push(variable);
  });

  const a = variables[0];
  const b = variables[1];

  const resultadoResta = resta(a, b);

  res.json({ resta: resultadoResta });

  response.end();
});

module.exports = { router };
