/**
 * arquivo: routes/index.js
 * descrição: arquivo responsavel pela chamada da API na aplicação no lado da back-end
 * Autor Pão Queimado
 */

const express = require("express");

const router = express.Router();

router.get("/api", (req, res) => {
  res.status(200).send({
    success: true,
    message: "Seja bem-vindo(a) a API Node.js + MySql + Azure ",
    version: "1.0.0",
  });
});

module.exports = router;
