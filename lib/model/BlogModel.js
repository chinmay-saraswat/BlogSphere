import mongoose from "mongoose";

const schema=new mongoose.Schema({
    title:{
        type:String,
        required:true
    },  
    description:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    }    ,
    authorImg:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        default:Date.now(),
        required:true
    }           
})



const BlogModel = mongoose.model.Blog || mongoose.model('Blog', schema);

export default BlogModel;