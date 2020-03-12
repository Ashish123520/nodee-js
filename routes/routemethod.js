var express=require('express');
var multer=require('multer')
 var router=express.Router();
var admin=require('../controler/adminsignuplogincontroler');
var product=require('../controler/productadd.js')
var productupdate=require('../controler/updateproduct.js')
var catagoriesadd=require('../controler/catagoriesadd.js')
var productview=require('../controler/viewproduct.js')
var catagoriesviewadmin=require('../controler/admincatagoriesview.js')
var varify2=require('../varifytoken2.js')



//...............................................

router.post('/adminsignup',admin.adminsignup);  
console.log("done here")

//................................................

router.post('/adminlogin',admin.adminlogin);  
console.log("done here")

//................................................

var Storage = multer.diskStorage({
    destination: "upload/",

    filename: function ( req,file, cb) {
      console.log(file)
      cb(null, file.originalname + '-' + Date.now()+'.jpg')
    }
  })
  
  var upload = multer({storage:Storage})

    router.post('/addproduct',varify2,upload.single('image'),product.productadd)

//..................................................

router.post('/updateproduct',varify2,productupdate.updateproduct);  
console.log("done here")

//.......................................................

router.post('/viewproduct',varify2,productview.viewproduct);  
console.log("done here")

//............................................................

router.post('/addcatagories',varify2,catagoriesadd.addcatagories);  
console.log("done here")
//..........................................................

router.post('/viewamincatagories',varify2,catagoriesviewadmin.catagoriesview);  
console.log("done here")

//.............................................................

module.exports=router; 