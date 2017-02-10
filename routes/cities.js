var express = require('express');
var router = express.Router();
var ObjectID=require('mongodb').ObjectID;
var db = require('./dbHelper.js');

router.get('/:id', function (req, res, next) {
   getData(req.params.id)
   .then(data => {
      require('./corssecure.js').corsecure(res);
      res.send(data);
    })
    .catch(e => console.log("Error:" + e));
  ;
});

function getData(state) {
    var data = new Array();
   return new Promise((resolve, reject) =>{
    db.collection('locations').distinct('city', {"state": state}, function (err, result) {
        if(err) reject(err);
        else resolve(JSON.stringify(result));
    });
   });
}

module.exports = router;
