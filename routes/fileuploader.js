var express = require('express');
var router = express.Router();
var db = require('./dbHelper.js');

function saveData2(data) {
   return new Promise((resolve, reject) => {
    db.collection('locations').insert(JSON.parse(data), function (err, result) {
      if (err) {
        reject(err);
      }
      else {
        resolve(JSON.stringify(result));
      }
    });
  });
}

var path = require('path');
var multer  = require('multer')
var upload = multer({ dest: './uploads'})

router.post('/', upload.array('file', 12), function (req, res, next) {
  // req.body contains the text fields
  require('./corssecure.js').corsecure(res);
  //res.send(req.body);
})


function getData() {
    var data = new Array();
   return new Promise((resolve, reject) =>{
    db.collection('items').find({}).toArray(function (err, result) {
        if(err) reject(err);
        else resolve(JSON.stringify(result));
    });
   });
}

function saveData2(data) {
      //console.log("1$$##$$$$zzzzzzz$$$: " + data);
   return new Promise((resolve, reject) => {
    db.collection('locations').insert(JSON.parse(data), function (err, result) {
      //console.log("2$$##$$$$zzzzzzz$$$: " + data);
      if (err) {
        //console.log("ERRRRR: " + err);
        reject(err);
      }
      else {
        //console.log("SUCCESS: " + JSON.stringify(result));
        resolve(JSON.stringify(result));
      }
    });
  });
}

function saveData(data) {
    console.log("DATA: "+data);
   return new Promise((resolve, reject) =>{
    db.collection('items2').insert(data, function (err, result) {
        if(err) reject(err);
        else resolve(JSON.stringify(result));
    });
   });
}

function genData(){
  return {"name":"Pinut", "description":"Just for just", "details":"test data", "contacts":{"email":"bxd", "phone":"64383938489"}, "category":"offered", "location":{"state":"IA", "city":"Ottumwa", "geo":{"lon":"32.32", "lat": 0.33484}},  "image":"", "status":"available"};
}



module.exports = router;


    //db.items.insert({"name":"Bike", "description":"Just for just", "details":"test data", "contacts":{"email":"bxd", "phone":"64383938489"}, "category":"offered", "location":{"state":"IA", "city":"ACKWORTH", "geo":{"lon":"32.32", "lat": 0.33484}},  "image":"", "status":"available"})
