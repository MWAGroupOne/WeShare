var express = require('express');
var router = express.Router();
var ObjectID=require('mongodb').ObjectID;
var db = require('./dbHelper.js');

/* Post signin page. */
router.post('/', function (req, res, next) {
  let user = {"email":req.body.email, "passwd":req.body.passwd};
   getData(user)
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

function getData(user) {
   return new Promise((resolve, reject) =>{
     console.log("Tttttttttt: "+JSON.stringify(user));
    db.collection('users').find(user).toArray(function (err, result) {
        if(err) reject(err);
        else {
           console.log("Ttttttt1ttt: "+result);
           console.log("Ttttttt2ttt: "+result.length);
          if(result.length>0)
          resolve({auth: true});
          else 
          resolve({auth: false});
          //resolve(JSON.stringify(result));
        }
    });
   });
}

module.exports = router;
