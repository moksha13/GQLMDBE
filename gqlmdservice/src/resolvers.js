const{ gql} = require('apollo-server-express');
const mongoose = require('mongoose');
const { aggregate } = require('./models/Post.model');
const Post  = require('./models/Post.model');

//const PostE = mongoose.model('Post', { name: String });

const resolvers = {
    Query:{
        hello:()=>{
            return 'Hello World';
        },

        getAllPosts: async() => {
            const posts = await Post.find()
            return posts
        },

        getPost : async(_parent, {id},_context,_info)=>{
            return await Post.findById(id)
        }

        
    },

    Mutation:{
        createPost : async(parent, args,context, info)=>{
            const {name, description} = args.post
            const post = new Post({name, description});
            await post.save();
            console.log(post);
            return post;
        },

        deletePost: async (parent, args, context,info)=>{
            const {id} = args
            await Post.findByIdAndDelete(id)
            return "Ok! post deleted"
        },

        updatePost : async (parent, args, context,info)=>{
            const {id} = args
            const {name, description} = args.post;
            const updates = {}
            if(name!== undefined){
                updates.title = name
            }
            if(description!==undefined){
                updates.description = description
            }

            const post = await Post.findByIdAndUpdate(
                id, 
                // {name, description}, 
                {updates},
                {new:true});
            return post
        }
    }

    
};


module.exports = resolvers;