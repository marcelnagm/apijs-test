const express = require('express');
const path  = require('path');
const app = express();
const PORT = 3000;
const routes = require('./routes')

app.use(express.urlencoded({ extended: false }));
app.set('views',path.resolve(__dirname,'views'));
app.set('view engine','ejs');
app.use(routes);




app.listen(PORT, function (err) {
    if (err) console.log(err);
    console.log("Server listening on PORT", PORT);
});