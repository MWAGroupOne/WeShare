var express = require('express');
var router = express.Router();
var dbs = require('../db.js');

router.get('/', function (req, res, next) {
   getData(req.query.name)
   .then(data => {
       require('./corssecure.js').corsecure(res);
      res.send(data);
    })
    .catch(e => console.log("Error:" + e));
  ;
});

  function getData(latitude, longitude) {
    var data = new Array();
   return new Promise((resolve, reject) =>{
    dbs.collection('items').find({ 'location.geo': { $near: [parseFloat(longitude), parseFloat(latitude)] } }).toArray(function (err, result) {
        if(err) reject(err);
        else resolve(JSON.stringify(result));
    });
   });
}

module.exports = router;
