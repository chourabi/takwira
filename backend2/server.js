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



app.post('/api/posts', function (req, res, next) {
    var post = new Post({
        name: req.body.username,
        phone: req.body.phone,
        location:req.body.location,
        category:req.body.category,
        img:req.body.img
    })
    post.save(function (err, post) {
      if (err) { return next(err) }
      res.json(201, post)
    })
  })

const port=process.env.PORT||3003;
const server=app.listen(port,()=>{
    console.log("connected to port",port);
})