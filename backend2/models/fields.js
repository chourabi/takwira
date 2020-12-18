const mongoose= require('mongoose');
const Schema=mongoose.Schema;

let FieldSchema=new Schema({
name:{type:String},
phone:{type:String},
location:{type:String},
category:{type:String},
img:{type:String},
},{collection:'fields'});



module.exports=mongoose.model('Fields',FieldSchema);