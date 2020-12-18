const mongoose= require('mongoose');
const Schema=mongoose.Schema;

let ContactSchema=new Schema({
name:{type:String},
prenom:{type:String},
phone:{type:String},
vreclamation:{type:String},

},{collection:'contact'});



module.exports=mongoose.model('contact',ContactSchema);