const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('assets'));

app.get('/', (req, res) => {
    res.send('Hello World!');
});

const port = process.env.PORT || 8081;
app.listen(port, () => {
    console.log(`Servidor rodando na porta: ${port}`);
});