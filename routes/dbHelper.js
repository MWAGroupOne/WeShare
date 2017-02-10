var mongo = require('mongoskin');
var db = mongo.db('mongodb://localhost:27017/weshare',{native_parser: true});
module.exports = db;