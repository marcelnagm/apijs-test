exports.checaParam = (req,res,next) => {
//  console.log(req.query);
    if(req.query.teste =='vai'){
        req.session = {nome: "marcel"};
        console.log('foi');
    }else console.log('Nao pego');

next();
}