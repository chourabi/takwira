exports.addNewFeild = function(req,res){

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