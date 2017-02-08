var express = require('express');
var router = express.Router();
var ObjectID=require('mongodb').ObjectID;

var mongo = require('mongoskin');
var db = mongo.db('mongodb://127.0.0.1:27017/weshare');

/* GET states page. */
router.get('/:id', function (req, res, next) {
   getData(req.params.id)
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

function getData(state) {
    var data = new Array();
   return new Promise((resolve, reject) =>{
     console.log("Tttttttttt: "+state);
    db.collection('locations').find({state:state}).toArray(function (err, result) {
        if(err) reject(err);
        else resolve(JSON.stringify(result));
    });
   });
}

module.exports = router;
