exports.mostraForm = function (req, res) {
    res.send ('<form method="POST" action="/process-form"><input  type="text" name="nome" > <input type="submit" value="vai!"></form>');
}

exports.trataForm = function (req, res) {
    const nome = req.body.nome;
    res.send ('o que foi enviado eh:'+nome);
}