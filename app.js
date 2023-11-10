const { log } = require('console');
const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "/views/home.html"))
});

app.get('/crea_tu_cuenta', (req, res) => {
    res.sendFile(path.join(__dirname, "/views/registro.html"))
});

app.post('/crea_tu_cuenta', (req, res) => {
 console.log(req.body);
 res.redirect("/")
});

app.get('/ingresa', (req, res) => {
    res.sendFile(path.join(__dirname, "/views/login.html"))
});

app.post('/ingresa', (req, res) => {
    console.log(req.body);
    res.redirect("/")
   });


app.use(express.static("public"));

app.listen(3000,()=>console.log("Levantando un servidor 3000"))