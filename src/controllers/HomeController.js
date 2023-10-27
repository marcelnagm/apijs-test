
const HomeModel = require('../models/HomeModel');

HomeModel.create({
    titulo: 'teste bam bam',
    descricao: 'pegaaaaa'

}).then(dados => console.log(dados)).catch(e => console.log(e));

exports.paginaInicial = (req,res) => {

    console.log(req.session.nome);
res.render('index');
}