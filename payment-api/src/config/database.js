/**
 * arquivo: config/database.js
 * descrição: arquivo responsavel pelas 'connectrionStrings' (Mysql)
 * Autor Pão Queimado
 */

const { Pool } = require("pg");
const dotenv = require("dotenv");

dotenv.config();

// ==> Conexão com a Base de Dados:

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

pool.on("error", (err, client) => {
  console.log("Unexpected error on idle client", err);
  process.exit(-1);
});

pool.on("connect", () => {
  console.log("Connection success!");
});

module.exports = {
  query: (text, params) => pool.query(text, params),
};
