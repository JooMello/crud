/**
 * arquivo: app.js
 * descrição: arquivo responsavel por fazer a conexão com  o arquivo 'server.js'
 * Autor Pão Queimado
 */

const express = require("express");
const cors = require("cors");

const app = express();

// ==> Rotas da API (payment):
const index = require("./routers/index");
const paymentRouter = require("./routers/payment.routes");

app.use(express.urlencoded({ extend: true }));
app.use(express.json());
app.use(express.json({ type: "application/vnd.api+json" }));
app.use(cors());

app.use(index);
//app.use("/api/, paymentRoute");

module.exports = app;
