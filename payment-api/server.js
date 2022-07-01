/**
 * arquivo: server.js
 * descrição: arquivo responsavel por toda a configuração e execução do back-end ('payment')
 * data: 01/07/20022
 * Autor Pão Queimado
 */

const app = require("./src/app");

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log("Servidor rodadndo na porta:",port);
});
