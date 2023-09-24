const express = require('express');
const app = express();
const port = 80;

app.get('/', (req, res) => {
  res.send('Seja bem vindo ao DevOps na Infra, o DevOps bem explicado!');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});