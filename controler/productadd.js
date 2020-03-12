
var Schema=require('../model/products.js')


  var addproduct={productadd:function(req,res)  
  
{


        var myfile=req.file
        console.log(myfile)
        var data={}
        data.name=req.body.name
        data.title=req.body.title
        data.description=req.body.description


        data.price=req.body.price
        data.quantity=req.body.quantity
        
        data.catagories_id=req.body.catagories_id
        data.image=myfile.path
        
        console.log(data)
        
        var schema=new Schema(data)
        console.log(schema)
        schema.save(function(err,result){
        
        if(err)
        {
          res.status(400).json({massege:"mongoose error"})
        }
        else{
        console.log(result)
        res.status(200).json({result})
        }
        })
        
    }
}
module.exports=addproduct