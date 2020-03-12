var express=require('express');
var Routes=express.Router();
var user=require('../controler/signuplogincontrlr.js');
var cartadd=require('../controler/addcart.js')
var cartview=require('../controler/viewcart.js')
var cartupdate=require('../controler/updatecart.js')
const varify=require('../verifytoken.js')
var productview=require('../controler/viewproduct.js')
var catagoriesviewuser=require('../controler/viewcatagories')


//............................................


Routes.post('/usersignup',user.signup);  
console.log("done here")


//...............................................

Routes.post('/userlogin',user.login);  
console.log("done here")

//...................................................



Routes.post('/addcart',varify,cartadd.addcart);  
console.log("done here")

//.............................................


Routes.post('/viewcart',varify,cartview.viewcart); 


//...................................................


Routes.post('/updatecart',varify,cartupdate.updatecart);  
console.log("done here")


//...............................................

Routes.post('/userviewcatagories',catagoriesviewuser.viewcatagories);  
console.log("done here")

//........................................................

Routes.post('/userviewproduct',productview.viewproduct);  
console.log("done here")

module.exports=Routes