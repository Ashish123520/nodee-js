const mongoose = require('mongoose');
const Schema = mongoose.Schema;


var productschema=Schema({

    name:{
        type:String ,
        lowercase: true,
        uppercase:true,
        unique:true
    }, 

    title:{
        
        type:String
     
},
image:{
    
    type:String

},

quantity:{
   
    type:Number

},
 description:{
     type:String

 },
 price:
     {
        type:String
      },
     catagories_id:{  
type:mongoose.Schema.Types.ObjectId,
ref:"catagories"

       }
  
})

const product=mongoose.model('Product', productschema);

module.exports =product
