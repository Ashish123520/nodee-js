
var Schema=require('../model/products.js')



var productview={viewproduct:function(req,res){
  var limit=req.body.limit
  var skip=req.body.skip

    Schema.find({}).limit(limit).skip(skip).exec(function (err, result)
    {
      if(err)
      {
        res.status(404).json({massege:"data not found"})

        }
        res.status(200).json({result})

    })

}
}
module.exports=productview