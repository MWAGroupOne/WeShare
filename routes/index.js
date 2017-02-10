var express = require('express');
var router = express.Router();

//var msg = require('./dbHelper');

/* GET home page. */
/*
router.get('/', function (req, res, next) {
   getData()
    .then(data => res.render('index', { title: 'Hello Express'}))
    .catch(e => console.log("Error " + e));
  ;
});

function func() {
  let res;
  getData()
    .then(data => this.rs = data)
    .catch(e => console.log("Error " + e));
  return res;
}

var MongoClient = require('mongodb').MongoClient;
var mongo = require('mongoskin');
var msg = "Hello We Share";
var db = mongo.db('mongodb://127.0.0.1:27017/weshare');
function getData() {
    var data = new Array();
   return new Promise((resolve, reject) =>{
    db.collection('items').find({}).toArray(function (err, result) {
        console.log(result[0].name);
        this.data = result;
        if(err) reject(err);
        else resolve(JSON.stringify(result));
    });
   });
}
*/
module.exports = router;
