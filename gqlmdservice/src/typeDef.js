const{ gql} = require('apollo-server-express')

const typeDefs = gql`
    type Post{
        id:ID
        name:String
        description:String
    }

    type Query{
        hello:String
        getAllPosts:[Post]
        getPost(id:ID):Post
    }

    input PostInput{
        name:String
        description:String
    }

    type Mutation{
        createPost(post:PostInput):Post
        deletePost(id:ID): String
        updatePost(id:ID, post:PostInput):Post
    }

`;

module.exports = typeDefs;



//hello world query
// query Query {
//     hello
//   }


//get single post
// query GetPost {
//     getPost(id:"636ce1c27df17e1b7c0bc2af") {
//       description
//       id
//       name
//     }
//   }


//get all post
// query Query {
//     getAllPosts {
//       description
//       id
//       name
//     }
//   }


//create post
// mutation Mutation{
//     createPost (post: {name:"xyx", description:"xyz des"}){
//       description
//       id
//       name
//     }

// delete post
// mutation Mutation {
//     deletePost(id:"636ce1c27df17e1b7c0bc2af")
//   }


// mutation Mutation {
  
//     updatePost (id:"636cecdc7df17e1b7c0bc2b9", post:{name:"monika" description:"this  update"}){
//       description
//       name
//       id
//     }
//   }