
var Schema=require('../model/usercartschema.js')


var productupdate={updateproduct:function(req,res){

var body =req.body

var schema=new Schema(body)

schema.findOneAndUpdate({name:body.name},body,{upsert:true},function(err,result){

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
module.exports=productupdate