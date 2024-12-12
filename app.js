const express = require('express');
const path = require('path');
const app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({
    extended: false
}));

app.get('/', (req, res) => {
    res.render('home');
});

app.get('/about', (req, res) => {
    res.render('about');
});

app.get('/prog', (req, res) => {
    res.render('prog');
});

app.get('/prog1', (req, res) => {
    res.render('prog1');
});

app.get('/prog2', (req, res) => {
    res.render('prog2');
});

app.get('/design', (req, res) => {
    res.render('design');
});

app.get('/design1', (req, res) => {
    res.render('design1');
});

app.get('/design2', (req, res) => {
    res.render('design2');
});

app.get('/vr', (req, res) => {
    res.render('vr');
});

app.get('/vr1', (req, res) => {
    res.render('vr1');
});

app.get('/vr2', (req, res) => {
    res.render('vr2');
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}`));