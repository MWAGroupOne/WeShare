var express = require('express');
var router = express.Router();
var db = require('./dbHelper.js');

router.get('/', function (req, res, next) {
  getData()
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


function getData() {
  var data = new Array();
  return new Promise((resolve, reject) => {
    db.collection('locations').aggregate([{$group:{_id:{state:"$state"}}}, {$project:{_id:0, "state":"$_id"}}, {$sort:{state:1}}], function (err, result) {
      if (err) reject(err);
      else resolve(JSON.stringify(result));
    });
  });
}

module.exports = router;