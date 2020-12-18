let express=require('express');
let mongoose=require('mongoose');
let cors=require('cors');
let bodyParser=require('body-parser');

let dbConfig=require('./database/db');
var terrin = require('./modules/terrain'); 

mongoose.Promise=global.Promise;
mongoose.connect(dbConfig.db,{useNewUrlParser:true}).then(()=>{
    console.log('database connected successfully');
},error=>{
    console.log('database connection error!',error);
})


const app=express();
app.use(function(req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    res.header('Access-Control-Allow-Methods', "GET,HEAD,PUT,PATCH,POST,DELETE");

});


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));


app.use(cors());

const fieldRoute=require('./routes/fields.route');
const { addNewFeild } = require('./modules/terrain');
const { auth } = require('./modules/users');
app.use('/api/fields',fieldRoute);




app.post('/add',function(req,res){
   terrin.addNewFeild(req,res);
})


app.post('/auth',function(req,res){
   auth(req,res);
 })

const port=process.env.PORT||3002;
const server=app.listen(port,()=>{
    console.log("connected to port",port);
})