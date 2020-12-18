let express=require('express');
const contactRoute=express.Router();

//field model


contactRoute.post('/',(req,res)=>{
    insertRecord(req, res);
});

let Contact=require("../models/contact")
    function insertRecord(req, res) {
        var contact = new Contact();
        contact.name = req.body.name;
        contact.prenom=   req.body.prenom;
        contact.phone=req.body.phone;
        contact.vreclamation= req.body.vreclamation;
        
        contact.save((err, doc) => {
            if (!err)
                res.json("ok")
            else {
                console.log('Error during record insertion : ' + err);
            }    });
    }

    module.exports=contactRoute;