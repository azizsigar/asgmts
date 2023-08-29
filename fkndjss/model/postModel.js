const mongoose= require('mongoose')
const schema = mongoose.Schema

const postModel1 = new schema({
    email:{
        type:String,
        required:true,
    },
    title:{
        type:String,
        required:true,
    },
    desc:{
        type:String,
        required:true,
    }
},{timestamps:true})

module.exports = mongoose.model('Post',postModel1)