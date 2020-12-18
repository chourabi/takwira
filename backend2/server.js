let express=require('express');
let mongoose=require('mongoose');
let cors=require('cors');
let bodyParser=require('body-parser');

let dbConfig=require('./database/db');


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
app.use('/api/fields',fieldRoute);



const contactRoute=require('./routes/contact.route');
app.use('/api/contact',contactRoute);

const port=process.env.PORT||3003;
const server=app.listen(port,()=>{
    console.log("connected to port",port);
})