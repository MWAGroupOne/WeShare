var express = require('express');
var router = express.Router();
var db = require('./dbHelper.js');

router.post('/', function (req, res, next) {
   saveData(req.body)
    .then(data => {
       require('./corssecure.js').corsecure(res);
      res.send(data);
    })
    .catch(e => console.log("Error:" + e));
  ;
});

function getData() {
   return new Promise((resolve, reject) =>{
    db.collection('items').find({}).toArray(function (err, result) {
        if(err) reject(err);
        else resolve(JSON.stringify(result));
    });
   });
}

function saveData(data) {
    console.log("DATA: "+data);
   return new Promise((resolve, reject) =>{
    db.collection('items').insert(data, function (err, result) {
        if(err) reject(err);
        else resolve(JSON.stringify(result));
    });
   });
}

function genData(){
  return {"name": "Sofas", "description": "Just for just", "details": "test data", "contacts": { "email": "bxd", "phone": "643678999" }, "category": "offered", "location": { "state": "IA", "city": "ottumwa", "geo": [ -99.9666635, 41.0226 ] }, "image": "", "status": "available"};
}

module.exports = router;
