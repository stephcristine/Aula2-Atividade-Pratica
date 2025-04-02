const express = require('express');
const cors = require('cors');

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

let frases = [
    "Frase 1",
    "Frase 2",
    "Frase 3"
];

app.get('/frases', (req, res) => {
    res.json(frases);
});

app.post('/frases', (req, res) => {
    const { frase } = req.body;
    if (frase) {
        frases.push(frase);
        res.status(201).json(frases);
    } else {
        res.status(400).json({ mensagem: "Frase inválida." });
    }
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
