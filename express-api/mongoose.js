const mongoose = require("mongoose");

let username='kaden';
let password='1234';

var uri = "mongodb://" + username + ":" + password + "@54.87.133.19:27017/ml-test";
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
  { collection: "test1" }
);


var data = [
  {
    name: "hunter",
    age: 21,
    location: "New York"
  },
  {
    name: "Smith",
    age: 27,
    location: "Texas"
  }
];

module_employee = mongoose.model("test1", user);
module_employee.insertMany(data, function(err, result) {
  console.log(data);
});

console.log("done");
