const mongoose= require('mongoose')
const schema = mongoose.Schema
const postModel1=new schema({
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
        requiredd:true,
    }
},{timestamps:true})
module.exports=mongoose.model('post',postModel1)