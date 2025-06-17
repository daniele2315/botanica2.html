
const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

// Define o caminho da pasta "pages"
const pagesPath = path.join(__dirname, 'pages');

// Rota para cada página
app.get('/', (req, res) => {
  res.sendFile(path.join(pagesPath, 'index.html'));
});

app.get('/quiz', (req, res) => {
  res.sendFile(path.join(pagesPath, 'quiz.html'));
});

app.get('/contato', (req, res) => {
  res.sendFile(path.join(pagesPath, 'contato.html'));
});

app.get('/curiosidades', (req, res) => {
  res.sendFile(path.join(pagesPath, 'curiosidades.html'));
});

app.get('/oque e botanica', (req, res) => {
  res.sendFile(path.join(pagesPath, 'oque e botanica.html'));
});

// Inicia o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
