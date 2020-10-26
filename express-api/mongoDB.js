const mongoose = require("mongoose");

let username='kaden';
let password='1234';


function mongoDB_get(db_name, collection_name){
  console.log("db_name: ", db_name);
  console.log("collection_name: ", collection_name);

  //var uri = "mongodb://54.87.133.19:27017/test";
  var uri = "mongodb://" + username + ":" + password + "@54.87.133.19:27017/" + db_name;

  mongoose.connect(uri, { useUnifiedTopology: true, useNewUrlParser: true });
  const connection = mongoose.connection;

  connection.once("open", function() {
    console.log("MongoDB database connection established successfully");

    connection.db.collection(collection_name, function(err, collection){
      collection.find({}).toArray(function(err, data){
          console.log(data); // it will print your collection data
      })
    });

  });
}

// db_name= "ml-test";
// collection_name= "col3";

db_name= "aws-transcribe-result-test-tmp";
collection_name= "col1";
mongoDB_get(db_name, collection_name);


function mongoDB_post(db_name, collection_name){
  console.log("db_name: ", db_name);
  console.log("collection_name: ", collection_name);

  var uri = "mongodb://" + username + ":" + password + "@54.87.133.19:27017/" + db_name;
  // var uri = "mongodb://54.87.133.19:27017/test";

  mongoose.connect(uri, { useUnifiedTopology: true, useNewUrlParser: true });
  const connection = mongoose.connection;

  connection.once("open", function() {
    console.log("MongoDB database connection established successfully");
  });

  const Schema = mongoose.Schema;
  let user = new Schema(
    {
      name: {
        type: String
      },
      age: {
        type: Number
      },
      location: {
        type: String
      }
    },
    { collection: collection_name }
  );

  var data = [
    {
      name: "hunter",
      age: 22,
      location: "New York"
    }
  ];

  module_employee = mongoose.model("document", user);
  module_employee.insertMany(data, function(err, result) {
    console.log(data);
  });
}

// db_name= "ml-test";
// collection_name= "col1";
// db_name= "aws-transcribe-result-test-tmp";
// collection_name= "col1";
// mongoDB_post(db_name, collection_name)

console.log("done");
