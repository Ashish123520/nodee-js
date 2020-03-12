const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var cartschema=Schema({

    user:{
        type:Schema.Types.ObjectId
    }, 
    status:{
        
        type:String,
        enum:['active','expire'],
        default:'active'
    
    },


    totalprice:{
                 
        type:String

    },

 product:[{
   
    type: Schema.Types.ObjectId, ref: 'Product'

 }]
    
})
const cart=mongoose.model('cart', cartschema);

module.exports =cart