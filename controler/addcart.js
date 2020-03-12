
var Schema=require('../model/usercartschema.js')
// var product=require('../model ')


var cartadd={addcart:function(req,res){


console.log('error a rha h ')


var body =req.body

var schema=new Schema(body)

schema.save(function(err,result){

    if(err)
    {
        res.status(400).json({massege:"mongoose error"})
    }
else{
    res.status(200).json({result})
    console.log(result)
} 
})
}
}
module.exports=cartadd