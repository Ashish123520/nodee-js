
var Schema=require('../model/usercartschema.js')



var cartview={viewcart:function(req,res){
var userId=req.query.id

    Schema.findOne({_id:userId}).
    populate('product').
    exec(function (err, cart) {
      if (err) res.status(404).json({massege:"data not found"});
      console.log(cart)
      res.status(200).json({cart,count:cart.product.length})
    })
}
}

module.exports=cartview