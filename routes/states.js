var express = require('express');
var router = express.Router();

var mongo = require('mongoskin');
var db = mongo.db('mongodb://127.0.0.1:27017/weshare');

/* GET states page. */
router.get('/', function (req, res, next) {
  getData()
    .then(data => {
      res.header("Access-Control-Allow-Origin", "*");
      res.header("Access-Control-Allow-Methods", "GET", "POST", "PUT", "DELETE");
      res.header("Access-Control-Allow-Headers", "X-Requested-With");
      res.header("Access-Control-Allow-Headers", "Content-Type");
      res.send(data);
    })
    .catch(e => console.log("Error:" + e));
  ;
});

function func() {
  let res;
  getData()
    .then(data => this.rs = data)
    .catch(e => console.log("Error: " + e));
  return res;
}

function getData() {
  var data = new Array();
  return new Promise((resolve, reject) => {
    db.collection('locations').find({}).limit(20).toArray(function (err, result) {
      if (err) reject(err);
      else resolve(JSON.stringify(result));
    });
  });
}

module.exports = router;
