//Import the mongoose module
var mongoose = require('mongoose');


//Set up default mongoose connection
//mongoose.connect('mongodb://localhost:27017/markdownApp', { useNewUrlParser: true, useUnifiedTopology: true } );
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/markdownApp');

// Get Mongoose to use the global promise library
mongoose.Promise = global.Promise;
//Get the default connection
var db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on('error', function(err){
  console.log('connection error', err)
})

db.once('open', function(){
  console.log('Connection to DB successful')
})
