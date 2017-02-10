
var mongo = require('mongoskin');
var db = mongo.db('mongodb://localhost:27017/weshare',{native_parser: true});
db.bind('items');
db.bind('locations');
// To create index
// db.locations.ensureIndex( { "$**": "text" } )
module.exports = db;