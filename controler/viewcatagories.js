
var Schema=require('../model/catagories.js')



var Catagoriesview={viewcatagories:function(req,res){
  
  var pageno=parseInt(req.body.pageno)// this function convert the data into integer
  var size=parseInt(req.body.size)  //.............................................

Schema.aggregate([
  {
$lookup:{
  from:"products",
  localField:"_id",
  foreignField:"catagories_id",
  as:"product"
}
  },
{
$project:
{
  name:"$name",
  count:{$size:'$product'},
  product:{$slice:['$product',size,pageno]}


}
}
]).exec()

  .catch(err=>
  {

    res.status(404).json({massege:"data not found"})
  })
.then(data=>
  {

  res.status(200).json({data,catagoriescount:data.length})
})

}
}
  
module.exports=Catagoriesview