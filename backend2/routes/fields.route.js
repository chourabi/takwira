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
});

fieldRoute.route('/:id').get((req,res,next)=>{
    Field.findById(req.params.id,(error,data)=>{
        if(error){
            return next(error)
        }
        else{
            res.json(data)
        }
    })
});


module.exports=fieldRoute;