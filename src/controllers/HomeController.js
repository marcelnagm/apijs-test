
// const HomeModel = require('../models/HomeModel');

// HomeModel.create({
//     titulo: 'teste bam bam',
//     descricao: 'pegaaaaa'

// }).then(dados => console.log(dados)).catch(e => console.log(e));

exports.paginaInicial = (req,res) => {
    // req.session.usuario = 'teste';
        console.log(req.session);
res.render('index');
// res.send('Deu certo');
}