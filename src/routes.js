const express = require('express');

const route = express.Router();

const HomeController = require('./controllers/HomeController');
const FormsController = require('./controllers/FormsController');
const checaParamMidleware = require('./middleware/ChecaParm');


route.get('/',checaParamMidleware.checaParam ,HomeController.paginaInicial,);

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