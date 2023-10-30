require('dotenv').config();
const express = require('express');
const path  = require('path');
const app = express();
const mongoose = require('mongoose');

const session = require('express-session');

const MongoStore = require('connect-mongo');

app.use(session({
    secret: 'keyboard cat',
    saveUninitialized: false, // don't create session until something stored
    resave: false, //don't save session if unmodified,  
    cookie: {
      sameSite: true,
      httpOnly: true,
      maxAge  : 24*60*60*1000
    },
    store: MongoStore.create({
      mongoUrl: process.env.DBSQL,
      collection: 'session',
      touchAfter: 24 * 3600 // time period in seconds
    })
  }));
const flash = require('connect-flash');

const routes = require('./routes')


app.use(flash());
app.use(express.urlencoded({ extended: false }));
app.set('views',path.resolve(__dirname,'views'));
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
