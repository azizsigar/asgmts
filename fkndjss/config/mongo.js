// mongodb+srv://aziz:<password>@aziz.fjez7sn.mongodb.net/?retryWrites=true&w=majority
// password=1234
// 1234

const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://aziz:1234@aziz.fjez7sn.mongodb.net/?retryWrites=true&w=majority')
.then(()=>{console.log(`Db connected`)
})
.catch((err)=> {console.log('erroror db')})