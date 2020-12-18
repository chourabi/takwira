
const { ObjectId } = require('bson');
const express = require('express');

const { addNewFeild, getAllFeilds } = require('./modules/terrain');
const { auth } = require('./modules/users');
const app = express()
const port = 3002


app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    res.header('Access-Control-Allow-Methods', "GET,HEAD,PUT,PATCH,POST,DELETE");
    next();
});



app.get('/', (req, res) => {
  res.send('Hello World!')
})




function  requireLogin(req, resg, next) {

  const token = req.headers.authorization;

console.log(token);
      var MongoClient = require('mongodb').MongoClient;
      var url = 'mongodb://localhost:27017';
  
      MongoClient.connect(url,function(err,db){
          if (err) {
              throw err;
          }
  
          var dbo = db.db('takwira');
  
          dbo.collection('users').findOne({ _id:ObjectId(token) },function(err,response){
            console.log(response);
            
            if (response) {
                

                next();
            } else {
                resg.send({ success:false, message:'access denied' })
            }

          })
        })
            



}

// Automatically apply the `requireLogin` middleware to all
// routes starting with `/admin`
app.all("/app/*", requireLogin, function(req, res, next) {
  next();
});


app.post('/app/hi', (req,res) =>{

  res.send({success:true,message:"route is accessible"});

});



app.post('/app/add',function(req,res){
    addNewFeild(req,res);
});

app.get('/app/all',function(req,res){
    getAllFeilds(req,res);
})



app.post('/auth', (req,res) =>{

  auth(req,res);

});




app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})


