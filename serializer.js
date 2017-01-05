var thrift = require('thrift');
var Hotel = require('./gen-nodejs/hotel_types').Hotel;

module.exports = {
	encode: function(obj) {
		var buffer = new Buffer(obj)
	}
}