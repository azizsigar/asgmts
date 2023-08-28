const express = require('express')
require('../config/mongo.js')
const app = express()

const route=require('./config/route.js')
app.set('view engine','ejs')
app.use(route)
let port = 3000;
app.listen(port,()=>{
    console.log(`app is workin ${port}`)})