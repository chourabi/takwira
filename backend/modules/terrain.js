exports.addNewFeild = function(req,resg){

    let body = [];
    let requestBody = {};

    req.on('data', (chunk) => {
        body.push(chunk);
    }).on('end', () => {
        body = Buffer.concat(body).toString();
        try {
            requestBody = JSON.parse(body);

            var todoG = requestBody.todo;


            var MongoClient = require('mongodb').MongoClient;
            var url = 'mongodb://localhost:27017';

            MongoClient.connect(url, function (err, db) {
                if (err) {
                    throw err;
                }

                var dbo = db.db('takwira');

                dbo.collection('feilds').insertOne(requestBody, function (err, r) {
                    if (err) {
                        throw err
                    }

                    resg.send({ success: true, message: 'successfully inserted' })
                })



            })





        } catch (e) {

        }

    })


}



exports.getAllFeilds = function(req,resg){
    const token = req.headers.authorization;

    console.log(token);
        var MongoClient = require('mongodb').MongoClient;
        var url = 'mongodb://localhost:27017';
    
        MongoClient.connect(url,function(err,db){
            if (err) {
                throw err;
            }
    
            var dbo = db.db('takwira');
    
            dbo.collection('feilds').find({}).toArray(function(err,r){
                if (err) {
                    
                    resg.send({ success:false, message:'access denied' });throw err;
                }
                resg.send({ success:false, feilds:r });

            })


        })
}