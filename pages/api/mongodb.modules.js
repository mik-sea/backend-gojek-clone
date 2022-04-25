const { MongoClient } = require('mongodb');
const url = "mongodb+srv://adminclone:adminclone@cluster0.cr4db.mongodb.net/db_gojek?retryWrites=true&w=majority"
const dbs = "db_gojek"
// MongoClient.connect(url, function(err, db) {
//     if (err) throw err;
//     var dbo = db.db("db_gojek");
//     dbo.createCollection("akun", function(err, res) {
//         if (err) throw err;
//         console.log("Collection created!");
//         db.close();
//     });
// });

let insertAkun = (user,password)=>{
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db(dbs);
        var myobj = { username: user, password: password };
        dbo.collection("akun").insertOne(myobj, function(err, res) {
            if (err) throw err;
            console.log("1 document inserted");
            db.close();
        });
    });
}

let getAkun = (user,password,cb)=>{
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db(dbs);
        var myobj = { username: user, password: password };
        dbo.collection("akun").findOne(myobj, function(err, result) {
            if (err) throw err;
            cb(result);
            db.close();
        });
    });
}

let getMenu = (restaurant,cb)=>{
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db(dbs);
        var myobj = { restaurant:restaurant };
        dbo.collection("go_food").findOne(myobj, function(err, result) {
            if (err) throw err;
            cb(result);
            db.close();
        });
    });
}

let getRestaurant = (cb)=>{
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db(dbs);
        dbo.collection("go_food").find({}).toArray(function(err, result) {
            if (err) throw err;
            cb(result);
            db.close();
        });
    });
}



module.exports = {insertAkun,getAkun,getRestaurant,getMenu}