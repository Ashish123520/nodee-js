const mongoose = require('mongoose');
const Schema = mongoose.Schema;


var catagoryschema=Schema({

    name:{
        type:String , 
        lowercase: true,
        uppercase:true,
        unique:true
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

const catagories=mongoose.model('catagories', catagoryschema);

module.exports =catagories
