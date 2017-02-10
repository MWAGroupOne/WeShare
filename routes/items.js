var express = require('express');
var router = express.Router();
var db = require('./dbHelper.js');

/* GET states page. */
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

function getData(city) {
    var data = new Array();
   return new Promise((resolve, reject) =>{
    db.collection('items').find({'location.city':city},{}).toArray(function (err, result) {
        if(err) reject(err);
        else resolve(JSON.stringify(result));
    });
   });
}

module.exports = router;
