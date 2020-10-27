let express = require('express');
const mongoose = require("mongoose");

let app = express();

let username='kaden';
let password='1234';
let uri = "mongodb://" + username + ":" + password + "@54.87.133.19:27017/" 


app.get('/api/:db_name/:collection_name', (req, res) => {
  // db_name= 'ml-test';
  // collection_name='col1';
  db_name= req.params.db_name;
  collection_name= req.params.collection_name;

  var URI = uri + db_name;
  console.log(URI);

  mongoose.connect(URI, { useUnifiedTopology: true, useNewUrlParser: true });
  const connection = mongoose.connection;

  connection.once("open", function() {
    console.log(db_name, "connected");

    connection.db.collection(collection_name, function(err, collection){
      collection.find({}).toArray(function(err, data){
          console.log(data); 
          connection.close();
          console.log("close");
          res.send(data);
        })
    });
  });

  // res.send('Your id is ' + req.params.id + '\n');
});

port = 3000
app.listen(port, () => console.log('Server running on port ', port))