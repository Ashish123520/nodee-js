
var model=require('../model/adminschema.js')
const Bcrypt = require("bcryptjs");
const jwt=require('jsonwebtoken')

console.log("controller method")

var adminpage = {adminsignup:function(req,res){
  var body = req.body
 body.password=Bcrypt.hashSync(body.password, 10)
  var schema=new model(body)
schema.save(function(err,result){
     if(err)
  {
    res.status(400).json({massege:"mongoose error"})
   
  }
      else
   {
  
      console.log(result);
      res.status(200).json({result})
    }
})
 
},

//...................................
adminlogin: function(req,res){

var email=req.body.email;
var password=req.body.password;

model.findOne({email:email},{},{lean:true},function(err, user) 
    {
        if (err)
        {
            res.status(404).json({massege:"data not found"})
        } 
        else if(user)
        {
            // if email is valid now check the password....
            if(Bcrypt.compareSync(password, user.password))
                        {
                    delete user.password
                     const token =  jwt.sign({_id:user._id},'mywebtoken')
                     
            
                    res.status(200).json({user:user,token:token});
                    console.log("login success"+user)
                    
                }
            // if password doesnt match....
            else       
            {
                res.status(404).json({massege:'password not match'});
            }
        }  
        // if the email doesn't exist.......simply through the meassage that user not exit 
        else
        {
            res.status(404).json({massege:'user with email doesnt not exist'});
        }
    })

}
 }

module.exports=adminpage

 


