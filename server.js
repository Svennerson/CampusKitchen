// loading necessary modules
var express = require('express');
var httpModule = require('http');
const MongoClient = require('mongodb').MongoClient
var bodyParser = require('body-parser');
var ObjectId = require('mongodb').ObjectId;

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

MongoClient.connect('mongodb://campuskitchen:123456@ds113660.mlab.com:13660/campuskitchen',
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

app.get('/shiftleader/contacts',(req,res)=>{
  var cursor = db.collection('Inventory').find();
  // console.log(cursor);  // This has too much info
  // convert to an array to extract the movie data
  cursor.toArray(function (err, results) {
    if (err)
      return console.log(err);

    console.log(results);
    // Render index.ejs
    res.render('contacts.ejs', {records: results});
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

app.get('/executive/contacts',(req,res)=>{
  var cursor = db.collection('Inventory').find();
  // console.log(cursor);  // This has too much info
  // convert to an array to extract the movie data
  cursor.toArray(function (err, results) {
    if (err)
      return console.log(err);

    console.log(results);
    // Render index.ejs
    res.render('contacts.ejs', {records: results});
  });
});

app.get('/shiftleader/safety1',(req,res)=>{
  var cursor = db.collection('Safety1').find();
  // console.log(cursor);  // This has too much info
  // convert to an array to extract the movie data
  cursor.toArray(function (err, results) {
    if (err)
      return console.log(err);

    console.log(results);
    // Render index.ejs
    res.render('slsafety1.ejs', {records: results});
  });
});

app.get('/shiftleader/safety2',(req,res)=>{
  var cursor = db.collection('Safety2').find();
  // console.log(cursor);  // This has too much info
  // convert to an array to extract the movie data
  cursor.toArray(function (err, results) {
    if (err)
      return console.log(err);

    console.log(results);
    // Render index.ejs
    res.render('slsafety2.ejs', {records: results});
  });
});

app.get('/shiftleader/safety3',(req,res)=>{
  var cursor = db.collection('Safety3').find();
  // console.log(cursor);  // This has too much info
  // convert to an array to extract the movie data
  cursor.toArray(function (err, results) {
    if (err)
      return console.log(err);

    console.log(results);
    // Render index.ejs
    res.render('slsafety3.ejs', {records: results});
  });
});

app.get('/shiftleader/safety4',(req,res)=>{
  var cursor = db.collection('Safety4').find();
  // console.log(cursor);  // This has too much info
  // convert to an array to extract the movie data
  cursor.toArray(function (err, results) {
    if (err)
      return console.log(err);

    console.log(results);
    // Render index.ejs
    res.render('slsafety4.ejs', {records: results});
  });
});

app.get('/shiftleader/safety5',(req,res)=>{
  var cursor = db.collection('Safety5').find();
  // console.log(cursor);  // This has too much info
  // convert to an array to extract the movie data
  cursor.toArray(function (err, results) {
    if (err)
      return console.log(err);

    console.log(results);
    // Render index.ejs
    res.render('slsafety5.ejs', {records: results});
  });
});

app.get('/shiftleader/safety6',(req,res)=>{
  var cursor = db.collection('Safety6').find();
  // console.log(cursor);  // This has too much info
  // convert to an array to extract the movie data
  cursor.toArray(function (err, results) {
    if (err)
      return console.log(err);

    console.log(results);
    // Render index.ejs
    res.render('slsafety6.ejs', {records: results});
  });
});

app.get('/shiftleader/safety7',(req,res)=>{
  var cursor = db.collection('Safety7').find();
  // console.log(cursor);  // This has too much info
  // convert to an array to extract the movie data
  cursor.toArray(function (err, results) {
    if (err)
      return console.log(err);

    console.log(results);
    // Render index.ejs
    res.render('slsafety7.ejs', {records: results});
  });
});

app.get('/shiftleader/safety8',(req,res)=>{
  var cursor = db.collection('Safety8').find();
  // console.log(cursor);  // This has too much info
  // convert to an array to extract the movie data
  cursor.toArray(function (err, results) {
    if (err)
      return console.log(err);

    console.log(results);
    // Render index.ejs
    res.render('slsafety8.ejs', {records: results});
  });
});

app.get('/executive/safety1',(req,res)=>{
  var cursor = db.collection('Safety1').find();
  // console.log(cursor);  // This has too much info
  // convert to an array to extract the movie data
  cursor.toArray(function (err, results) {
    if (err)
      return console.log(err);

    console.log(results);
    // Render index.ejs
    res.render('execsafety1.ejs', {records: results});
  });
});

app.get('/executive/safety2',(req,res)=>{
  var cursor = db.collection('Safety2').find();
  // console.log(cursor);  // This has too much info
  // convert to an array to extract the movie data
  cursor.toArray(function (err, results) {
    if (err)
      return console.log(err);

    console.log(results);
    // Render index.ejs
    res.render('execsafety2.ejs', {records: results});
  });
});

app.get('/executive/safety3',(req,res)=>{
  var cursor = db.collection('Safety3').find();
  // console.log(cursor);  // This has too much info
  // convert to an array to extract the movie data
  cursor.toArray(function (err, results) {
    if (err)
      return console.log(err);

    console.log(results);
    // Render index.ejs
    res.render('execsafety3.ejs', {records: results});
  });
});

app.get('/executive/safety4',(req,res)=>{
  var cursor = db.collection('Safety4').find();
  // console.log(cursor);  // This has too much info
  // convert to an array to extract the movie data
  cursor.toArray(function (err, results) {
    if (err)
      return console.log(err);

    console.log(results);
    // Render index.ejs
    res.render('execsafety4.ejs', {records: results});
  });
});

app.get('/executive/safety5',(req,res)=>{
  var cursor = db.collection('Safety5').find();
  // console.log(cursor);  // This has too much info
  // convert to an array to extract the movie data
  cursor.toArray(function (err, results) {
    if (err)
      return console.log(err);

    console.log(results);
    // Render index.ejs
    res.render('execsafety5.ejs', {records: results});
  });
});

app.get('/executive/safety6',(req,res)=>{
  var cursor = db.collection('Safety6').find();
  // console.log(cursor);  // This has too much info
  // convert to an array to extract the movie data
  cursor.toArray(function (err, results) {
    if (err)
      return console.log(err);

    console.log(results);
    // Render index.ejs
    res.render('execsafety6.ejs', {records: results});
  });
});

app.get('/executive/safety7',(req,res)=>{
  var cursor = db.collection('Safety7').find();
  // console.log(cursor);  // This has too much info
  // convert to an array to extract the movie data
  cursor.toArray(function (err, results) {
    if (err)
      return console.log(err);

    console.log(results);
    // Render index.ejs
    res.render('execsafety7.ejs', {records: results});
  });
});

app.get('/executive/safety8',(req,res)=>{
  var cursor = db.collection('Safety8').find();
  // console.log(cursor);  // This has too much info
  // convert to an array to extract the movie data
  cursor.toArray(function (err, results) {
    if (err)
      return console.log(err);

    console.log(results);
    // Render index.ejs
    res.render('execsafety8.ejs', {records: results});
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

app.post('/addSafety1', (req, res) => {
  console.log('got Post/addItem request');
  console.log(req.body);

  db.collection('Safety1').save(req.body, (err, result) => {
    if (err) {
		    return console.log(err);
      }
    console.log('saved to database');
    updateIds();
    res.redirect('/shiftleader/safety');
  });

});

app.post('/addSafety2', (req, res) => {
  console.log('got Post/addItem request');
  console.log(req.body);

  db.collection('Safety2').save(req.body, (err, result) => {
    if (err) {
		    return console.log(err);
      }
    console.log('saved to database');
    updateIds();
    res.redirect('/shiftleader/safety');
  });

});

app.post('/addSafety3', (req, res) => {
  console.log('got Post/addItem request');
  console.log(req.body);

  db.collection('Inventory').save(req.body, (err, result) => {
    if (err) {
		    return console.log(err);
      }
    console.log('saved to database');
    updateIds();
    res.redirect('/shiftleader/safety');
  });

});

app.post('/addSafety4', (req, res) => {
  console.log('got Post/addItem request');
  console.log(req.body);

  db.collection('Safety4').save(req.body, (err, result) => {
    if (err) {
		    return console.log(err);
      }
    console.log('saved to database');
    updateIds();
    res.redirect('/shiftleader/safety');
  });

});

app.post('/addSafety5', (req, res) => {
  console.log('got Post/addItem request');
  console.log(req.body);

  db.collection('Safety5').save(req.body, (err, result) => {
    if (err) {
		    return console.log(err);
      }
    console.log('saved to database');
    updateIds();
    res.redirect('/shiftleader/safety');
  });

});

app.post('/addSafety6', (req, res) => {
  console.log('got Post/addItem request');
  console.log(req.body);

  db.collection('Safety6').save(req.body, (err, result) => {
    if (err) {
		    return console.log(err);
      }
    console.log('saved to database');
    updateIds();
    res.redirect('/shiftleader/safety');
  });

});

app.post('/addSafety7', (req, res) => {
  console.log('got Post/addItem request');
  console.log(req.body);

  db.collection('Safety7').save(req.body, (err, result) => {
    if (err) {
		    return console.log(err);
      }
    console.log('saved to database');
    updateIds();
    res.redirect('/shiftleader/safety');
  });

});

app.post('/addSafety8', (req, res) => {
  console.log('got Post/addItem request');
  console.log(req.body);

  db.collection('Safety8').save(req.body, (err, result) => {
    if (err) {
        return console.log(err);
      }
    console.log('saved to database');
    updateIds();
    res.redirect('/shiftleader/safety');
  });

});


app.post('/modify', (req, res) => {
  console.log('got Post /modify request');
  console.log("got this " + req.body.unique_id);

  //quant = Number(req.body.quantity);
  //console.log('Quant: ' + quant);
  console.log("body is " + req.body.item);

  db.collection('Inventory').update(
    {_id: ObjectId(req.body.unique_id)},
    {$set: {item:req.body.item, quantity:req.body.quantity,
       date:req.body.date, mylog:req.body.mylog}}
    ,(err, result) => {
      if (err) {
  		    return console.log(err);
      }
      console.log('saved to database');
      res.redirect('/shiftleader/inventory');
    });
});

app.post('/remove', (req, res) => {
  console.log('got Post /remove request');
  console.log(req.body.num);

  db.collection('Inventory').remove(
    {_id: ids[req.body.num]},
    (err, result) => {
      if (err) {
  		    return console.log(err);
        }
      console.log('saved to database');
      updateIds();
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

app.get('/home',(req,res)=>{
  res.sendFile(__dirname + '/title.html');
})

app.get('/shiftleader/safety',  (req,res)=>{
  res.sendFile(__dirname + '/shiftleader/safety.html');
})

app.get('/executive/safety',  (req,res)=>{
  res.sendFile(__dirname + '/executive/safety.html');
})

function portListener() {
    console.log('Listening on localhost ' + port);
};

var port = process.env.PORT ||  3000;

var db;

var ids = new Array();

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
