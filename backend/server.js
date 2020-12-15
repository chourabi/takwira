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
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.use(cors());

const fieldRoute=require('./routes/fields.route');
const { addNewFeild } = require('./modules/terrain');
app.use('/api/fields',fieldRoute);



app.post('/add',function(req,res){
   terrin.addNewFeild(req,res);
})

const port=process.env.PORT||3002;
const server=app.listen(port,()=>{
    console.log("connected to port",port);
})