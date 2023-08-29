const express = require('express');
require('./config/mongo');
const app = express();
// const route =require('../timeline/config/route');
app.set('view engine','ejs');
app.listen(3001,()=>console.log('server 3001'));


app.get('/', (req, res) => {
    const data = { name: 'John' }; // Data to pass to the view
    res.render('index', data); // Render the 'index' view with the provided data
  });
  