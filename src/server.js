const express = require('express');

const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: false }));
 

app.get('/testes/:idUser', function (req, res) {
    console.log(req.params);
    res.send ('PEGAAAAAAAAAA');
});

app.get('/profile/:idUser/:page?', function (req, res) {
    console.log(req.params);
    console.log(req.query);
    res.send ('PEGAAAAAAAAAA');
});


app.get('/testes/:idUser', function (req, res) {
    console.log(req.params);
    res.send ('PEGAAAAAAAAAA');
});

app.get('/', function (req, res) {
    console.log(req.body);
    res.send ('PEGAAAAAAAAAA');
});
 
app.listen(PORT, function (err) {
    if (err) console.log(err);
    console.log("Server listening on PORT", PORT);
});