
var Schema=require('../model/catagories.js')



var Catagoriesview={catagoriesview:function(req,res){
    
  Schema.find({},function(err,data)
  {

    if(err){
  
      res.status(404).json({massege:"data not found"})
    }
  
  
    res.status(200).json({data,catagoriescount:data.length})
  })
  
    }
   }
  
module.exports=Catagoriesview