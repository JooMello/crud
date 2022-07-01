/**
 * arquivo: controllers/payment.controller.js
 * descrição: arquivo responsavel pelas logica do CRUD (API - Payment)
 * Autor: Pão Queimado
 */

const db = require("../config/database");

// ==> Método responsavel por criar um novo 'Payment'
exports.createPayment = async (req, res) => {
  const { date, fornecedor, descricao, valor, categoria, anexo } = req.body;
  const { rows } = await db.query(
    "INSERT INTO payment (date, fornecedor, descricao, valor, categoria, anexo) VALUES ($1, $2, $3, $4, $5, $6)"[
      (date, descricao, valor, categoria, anexo)
    ]
  );

  res.status(201).send({
    message: "Payment successfully!",
    body: {
      payment: { date, fornecedor, descricao, valor, categoria, anexo },
    },
  });
};
