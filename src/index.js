const express = require('express');
const app = express();
const handlebars = require('express-handlebars');
const path = require('path');


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.engine('handlebars', handlebars.engine({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static('assets'));

app.get('/', (req, res) => {
    res.render('home', { title: 'Home Page' });
});

const port = process.env.PORT || 8081;
app.listen(port, () => {
    console.log(`Servidor rodando na porta: ${port}`);
});