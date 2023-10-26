const express = require('express');

const route = express.Router();

const HomeController = require('./controllers/HomeController');
const FormsController = require('./controllers/FormsController');

route.get('/', HomeController.paginaInicial);

route.get('/testes/:idUser', function (req, res) {
    console.log(req.params);
    res.send ('PEGAAAAAAAAAA');
});

route.get('/form', FormsController.mostraForm);

route.post('/process-form', FormsController.trataForm);

route.get('/profile/:idUser/:page?', function (req, res) {
    console.log(req.params);
    console.log(req.query);
    res.send ('PEGAAAAAAAAAA');
});


route.get('/testes/:idUser', function (req, res) {
    console.log(req.params);
    res.send ('PEGAAAAAAAAAA');
});

route.get('/', function (req, res) {
    console.log(req.body);
    res.send ('PEGAAAAAAAAAA');
});
 
module.exports = route;