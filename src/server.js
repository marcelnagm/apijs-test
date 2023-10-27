require('dotenv').config();
const express = require('express');
const path  = require('path');
const app = express();
const mongoose = require('mongoose');



const routes = require('./routes')

app.use(express.urlencoded({ extended: false }));
// app.set('views',path.resolve(__dirname,'views'));
app.set('view engine','ejs');
app.use(routes);


console.log(process.env.DBSQL);
mongoose.connect(process.env.DBSQL,{useNewUrlParser:true ,useUnifiedTopology: true,serverSelectionTimeoutMS: 5000,}).then(() => {
    console.log('Banco conectado com sucesso');
    app.emit('pronto');
}).catch((e) => console.log(e));


app.on('pronto', () => app.listen(process.env.SERVERPORT, function (err) {
    if (err) console.log(err);

    
    console.log("Server listening on process.env.SERVERPORT", process.env.SERVERPORT);
}));
