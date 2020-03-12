
var Schema=require('../model/usercartschema.js')
const mongoose = require('mongoose');


var cartupdate={updatecart:function(req,res){
body=req.body

Schema.update(
    {_id:mongoose.Types.ObjectId(body._id)},
  {$push:{product:mongoose.Types.ObjectId(body.product)}},{},
  function(err,result)
  {
  if(err)
  {
    res.status(400).json({massege:"mongoose error"})
  }
  res.status(200).json({result})
});
  
}
}
module.exports=cartupdate