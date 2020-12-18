let express=require('express');
const fieldRoute=express.Router();

//field model
let Field=require("../models/fields");

fieldRoute.route('/').get((req,res,next)=>{
    Field.find((error,data)=>{
        if(error){
            return next(error)
        }
        else{
            res.json(data)
        }
    })
})


module.exports=fieldRoute;