var express = require('express');
var router = express.Router();
var db = require('./dbHelper.js');

router.post('/', function (req, res, next) {
let user = {"email":req.body.email, "fname":req.body.fname, "lname":req.body.lname, "passwd":req.body.passwd};
  saveData(user)
    .then(data => {
 require('./corssecure.js').corsecure(res);
 res.send({"status": 1, "user": data});
    })
    .catch(e => console.log("Error:" + e));
});

function getData() {
  var data = new Array();
  return new Promise((resolve, reject) => {
    db.collection('items').find({}).toArray(function (err, result) {
      if (err) reject(err);
      else resolve(JSON.stringify(result));
    });
  });
}

function saveData(data) {

  return new Promise((resolve, reject) => {
    db.collection('users').insert(data, function (err, result) {
      if (err) {
        console.log("ERRRRR: " + err);
        reject(err);
      }
      else {
        console.log("SUCCESS: " + JSON.stringify(result));
        resolve(JSON.stringify(result));
      }
    });
  });
}

function genData() {
  return { email: "bwamie@gmail.com", fname: "Edwin", lname: "Bwambale", passwd: "test", cpasswd: "test" };
}

module.exports = router;
