exports.auth = function(req,res){
    
    let body = [];
    let requestBody = {};

    req.on('data', (chunk) => {
        body.push(chunk);
    }).on('end', () => {
        body = Buffer.concat(body).toString();
        try {
            requestBody = JSON.parse(body);

            


            var MongoClient = require('mongodb').MongoClient;
            var url = 'mongodb://localhost:27017';

            MongoClient.connect(url, function (err, db) {
                if (err) {
                    throw err;
                }

                var dbo = db.db('takwira');

                dbo.collection('users').findOne({email:requestBody.email, password:requestBody.password },function(err,r){
                    if(err) throw err;
                    console.log(r);
                    if (r) {
                        res.send({success:true,token:r._id});
                    }else{
                        res.send({success:false,message:"wiouww"});
                    }
                    
                })


            })





        } catch (e) {
            console.log(e);
            res.send({success:false,message:"wa3"});
        }

    })
}