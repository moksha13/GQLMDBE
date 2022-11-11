const express = require('express')
const{ApolloServer, gql} = require('apollo-server-express')
const typeDefs = require('./src/typeDef')
const resolvers = require('./src/resolvers')
const mongoose = require('mongoose')


mongoose.connect('mongodb://localhost:27017/backend');
const startServer=async()=>{

    const app = express();
    const apolloServer = new ApolloServer({
        typeDefs, 
        resolvers,
    });
    await apolloServer.start()
    apolloServer.applyMiddleware({app:app, path:'/moksha'});

    app.use((req, res)=>{
        res.send("Hello from apollo server")
    });

    await mongoose.connect('mongodb://localhost:27017/backend', {
        useUnifiedTopology:true,
        useNewUrlParser:true,
        
    });
    console.log('connected')

    app.listen(5000, ()=>console.log("Server is running at port 5000"));

}

startServer()