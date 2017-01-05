var Message = require('./gen-nodejs/asd_types').Message
var Result = require('./gen-nodejs/asd_types').Result
var serializer = require('thrift-serializer')

var message = new Message({
	// results: [
		// {
			text: 'asd'
		// },
	// 	{
	// 		text: 'zzz'
	// 	}
	// ]
})

var result = new Result({
	results: [message]
})

var from = Date.now()
serializer.write(result, serializer.Compression.Gzip, function (err, bytes) {
	console.log(Date.now() - from)
	if (err) {
		console.log(err)
	}
    // do something with your bytes, e.g. convert the buffer into a base64 string
    console.log(bytes.toString('base64'));

    from = Date.now()
    serializer.read(Result, bytes, function (err, msg) {
		console.log(Date.now() - from)
	    console.log(msg);
	});
});
