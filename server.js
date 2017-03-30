// loading necessary modules
var express = require('express');
var httpModule = require('http');
const MongoClient = require('mongodb').MongoClient
var bodyParser = require('body-parser');

// Create an express app
var app = express();
var http = httpModule.Server(app);

// Tells app that pictures, etc are located in folder assets
app.use(express.static('assets'));
app.set('view engine', 'ejs');

// urlencoded() extracts data from <form> and
// adds this data to the body element in the request object
app.use(bodyParser.urlencoded({extended: true}));

function responder(req, res) {
  // Sending a file to the user's browser
  res.sendFile(__dirname + '/title.html');
  // print message in the server side console
  console.log('got a request');
}

// Get request to / is given to responder function
app.get('/', responder);

app.get('/shiftleader/inventory',(req,res)=>{
  var cursor = db.collection('Inventory').find();
  // console.log(cursor);  // This has too much info
  // convert to an array to extract the movie data
  cursor.toArray(function (err, results) {
    if (err) {
		return console.log(err);
	}

    console.log(results);
    // Render index.ejs
    res.render('slinventory', {records: results});
  });
});

app.get('/executive/inventory',(req,res)=>{
  var cursor = db.collection('Inventory').find();
  // console.log(cursor);  // This has too much info
  // convert to an array to extract the movie data
  cursor.toArray(function (err, results) {
    if (err)
      return console.log(err);

    console.log(results);
    // Render index.ejs
    res.render('execinventory.ejs', {records: results});
  });
});

app.post('/addItem', (req, res) => {
  console.log('got Post/addItem request');
  console.log(req.body);

  req.body.quantity = Number(req.body.quantity);
  db.collection('Inventory').save(req.body, (err, result) => {
    if (err) {
		    return console.log(err);
      }
    console.log('saved to database');
    updateIds();
    res.redirect('/shiftleader/inventory');
  });

});

app.post('/modify', (req, res) => {
  console.log('got Post /modify request');
  console.log(req.body);

  quant = Number(req.body.quantity);
  console.log('Quant: ' + quant);

  db.collection('Inventory').update(
    {"item":req.body.item} ,
    {$inc:{"quantity":quant},$set:{"date":req.body.date} ,
     $set: { "mylog":req.body.mylog }},
    (err, result) => {
      if (err) {
  		    return console.log(err);
        }
      console.log('saved to database');
      res.redirect('/shiftleader/inventory');
    })
});

app.post('/remove', (req, res) => {
  console.log('got Post /remove request');
  console.log(req.body.num);
  db.collection('Inventory').remove(
    {_id: ids[req.body.num]},
    //{"item":req.body.item},
    (err, result) => {
      if (err) {
  		    return console.log(err);
        }
      console.log('saved to database');
      res.redirect('/shiftleader/inventory');
    })
  });


app.get('/home',(req,res)=>{
  res.sendFile(__dirname + '/title.html');
})

app.get('/shiftleader',(req,res)=>{
  res.sendFile(__dirname + '/shiftleader.html');
})

app.get('/executive',(req,res)=>{
  res.sendFile(__dirname + '/executive.html');
})

app.get('/about',  (req,res)=>{
  res.sendFile(__dirname + '/about.html');
})

function portListener() {
    console.log('Listening on localhost ' + port);
};

var port = process.env.PORT ||  3000;

var db;

var ids = new Array();

MongoClient.connect('mongodb://campuskitchen:prohumanitate@ds113630.mlab.com:13630/campuskitchen',
(err, database) => {
  if (err)
    return console.log(err);

  db = database;
  updateIds((result)=>{
    console.log(result);
  });

  console.log('Connected to database and listening...');
  http.listen(port, portListener);
});

function updateIds(callback) {
  var cursor = db.collection('Inventory').find();
  cursor.toArray(function (err, results) {
    if (err)
    return console.log(err);
    for (var i = 0; i < results.length; i++) {
      ids.push(results[i]._id);
    }
    if (typeof callback != "undefined")
    callback(ids);
  });
}
