var express = require('express');
var router = express.Router();
var ObjectID=require('mongodb').ObjectID;
var db = require('./dbHelper.js');

/* GET page. */
router.get('/:id', function (req, res, next) {
   getData(req.params.id)
   .then(data => {
      require('./corssecure.js').corsecure(res);
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

function getData(id) {
    var data = new Array();
   return new Promise((resolve, reject) =>{
     console.log("Tttttttttt: "+id);
    db.collection('items').find({_id:ObjectID(id)}).toArray(function (err, result) {
        if(err) reject(err);
        else resolve(JSON.stringify(result));
    });
   });
}

module.exports = router;
