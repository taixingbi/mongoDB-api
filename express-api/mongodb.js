// Retrieve
var MongoClient = require('mongodb').MongoClient;

let host= '54.87.133.19';
var db_= 'test';

//MongoClient.connect('mongodb://54.87.133.19:27017/test', function (err, db) {
MongoClient.connect('mongodb://' + host + ':27017/' + db_, function(err, db) {
  if(err) {
    throw err
  }else{
    console.log(host,"is connected");
  }

//   console.log(db);
//   var collection = db.collection('test');



});


console.log("done")