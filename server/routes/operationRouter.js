require("dotenv").config();
const debug = require("debug")("calculator:root");

const express = require("express");

const {
  suma,
  resta,
  multiplicacion,
  division,
} = require("../../utils/operators");

const router = express.Router();

router.get("/suma", (req, res) => {
  debug(`Resquest arrived at ${req.url} with method ${req.method}`);

  const { a } = req.query;
  const { b } = req.query;

  const resultadoSuma = suma(a, b);

  res.json({ suma: resultadoSuma });
});
router.get("/resta", (req, res) => {
  debug(`Resquest arrived at ${req.url} with method ${req.method}`);

  const { a } = req.query;
  const { b } = req.query;

  const resultadoResta = resta(a, b);

  res.json({ resta: resultadoResta });
});
router.get("/multiplicacion", (req, res) => {
  debug(`Resquest arrived at ${req.url} with method ${req.method}`);

  const { a } = req.query;
  const { b } = req.query;

  const resultadoMultiplicacion = multiplicacion(a, b);
  res.json({ multiplicacion: resultadoMultiplicacion });
});

router.get("/division", (req, res) => {
  debug(`Resquest arrived at ${req.url} with method ${req.method}`);

  const { a } = req.query;
  const { b } = req.query;

  const resultadoDivision = division(a, b);
  res.json({ division: resultadoDivision });
});

module.exports = { router };
