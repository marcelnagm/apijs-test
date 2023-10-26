exports.checaParam = (req,res,next) => {
//  console.log(req.query);
    if(req.query.teste =='vai'){
        console.log('foi');
    }else console.log('Nao pego');

next();
}