const mongoose = require('mongoose');
var validate=require("mongoose-validator")
var validator=require('validator')
const Schema = mongoose.Schema;
//  Make tha Schema..
console.log("create schema")
  
var nameValidator = [
    validate({
      validator: 'isLength',
      arguments: [3, 50],
      message: 'Name should be between {ARGS[0]} and {ARGS[1]} characters',
    }),
    validate({
      validator: 'isAlphanumeric',
      passIfEmpty: true,
      message: 'Name should contain alpha-numeric characters only',
    }),
    validate({
        validator: 'matches',
        arguments: /^[a-zA-Z\-]+$/i,
      })]
// Create Collection CblProject

var userschema=Schema({

first_name:{
    type:String,   


    validate: nameValidator 

},  
email: {
    type: String,
    trim: true,
    lowercase: true,
    unique:true,
    
    
    validate(value){
        if(!validator.isEmail(value))
        {
            throw new Error("email not valid")
        }
    }
        
},
password:{
    type:String,
    
},
phone_number: { type: String,
    /*not required by default**/ 
    validate: {
        validator: function(v) {
            var re = /^\d{10}$/;
            return (v == null || v.trim().length < 1) || re.test(v)
        },
        message: 'Provided phone number is invalid.'
    },
    
    
},

    

 
Status:
{
    type:String,
    enum:['active','inactive','delete'],
    default:"active"
},


createdAt: 
{
    type: Date,
     default: new Date()
}
})

const user=mongoose.model('signup', userschema);

module.exports =user

