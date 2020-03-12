const mongodb=require('mongodb');
MongoClient = require('mongodb').MongoClient

const connectionURL='mongodb://localhost:27017';
    const databaseName='ecommerce';
    
    MongoClient.connect(connectionURL, {useNewUrlParser: true, useUnifiedTopology:true},(error, client)=>{
    
    
    if(error)
    {
        return console.log("unable to connect.....")
    }
    
    
    console.log("connect successfuly......") 
    
     global.db=client.db(databaseName)
    })