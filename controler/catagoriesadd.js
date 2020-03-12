
var Schema=require('../model/catagories.js')


var catagoriesadd={addcatagories:function(req,res){

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
module.exports=catagoriesadd