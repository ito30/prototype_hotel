var file_compressor = './compressor.js';

var path = require('path');

var codec = {};
codec.name = path.basename(file_compressor);
codec.impl = require(file_compressor);

var param = "{'business_name':'Bali Rich Villas Ubud &amp; Spa','province_name':'Bali','star_rating':4,'sell_price':4000000,'allotment_available':3}"
var encoded_result = codec.impl.encode({'business_name':'Bali Rich Villas Ubud &amp; Spa','province_name':'Bali','star_rating':4,'sell_price':4000000,'allotment_available':3})

var from = Date.now()

log("Encode", from, encoded_result)

console.log()
from = Date.now()
log("Buffer", from, Buffer.from(param))


console.log()
from = Date.now()
log("Decode only", from, codec.impl.decode(encoded_result))

console.log()
from = Date.now()
var decoded_buffer = Buffer.from(encoded_result)
log("Buffering decoded data", from, decoded_buffer)

console.log()
from = Date.now()
log("Decode with Buffer", from, codec.impl.decode(decoded_buffer))


function log(act, from, obj) {
	console.log(act + " time: " + (Date.now() - from) + " ms.")

	if (obj) {
		console.log("Result: ", obj)
	}
}
