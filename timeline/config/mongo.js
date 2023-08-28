// 
// aziz
// 1234

const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://aziz:1234@aziz.fjez7sn.mongodb.net/')
.then(()=>{console.log(`Db connected`)})
.catch(err=> console.log(err))