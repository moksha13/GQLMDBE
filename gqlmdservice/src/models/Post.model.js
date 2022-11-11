const mongoose = require('mongoose')

const PostSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    description:{
        type:String,
    },
})

const Post= mongoose.model('post', PostSchema)

const PostE = mongoose.model('Post', { name: String });

module.exports = Post;