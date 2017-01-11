var express = require('express'),
	bodyParser = require('body-parser')
var app = express()
var amqp = require('amqplib/callback_api');
var path = require('path');

// var amqpUrl = 'amqp://tiket:tiket123@54.179.128.134:5672';
// var amqpUrl = 'amqp://exvldeec:Bmy6Q-Nrnukol-Rz78bY6p6A4fPcUtTa@zebra.rmq.cloudamqp.com/exvldeec';
var amqpUrl = 'amqp://localhost';

var SearchResult = require('./gen-nodejs/hotel_prod_types').SearchResult
var serializer = require('thrift-serializer')

app.use(bodyParser.json());

app.post('/bulk', function(req, res) {
	console.log(req.body.q)
	res.send(req.body)
})

const cluster = require('cluster')
const numCPUs = require('os').cpus().length

amqp.connect(amqpUrl, function(err, conn) {
	app.post('/hotel', function (req, res) {
	  	var total_time = Date.now()
		param = {
			q: req.body.q
		}
	// publish
	// publish(amqpUrl, 'hotel_search__request', 'hotel_search__request', JSON.stringify(param))

	// consume
		if (err) {
			console.log(err)
		}
		conn.createChannel(function(err, ch) {
			var msg = JSON.stringify(param)
			console.log(" [x] Sent %s", msg);
			ch.publish('hotel_search__request', 'hotel_search__request', new Buffer(msg));
			ch.close()
			conn.createChannel(function(err, ch) {
				ch.consume('hotel_search__response', function(msg) {
					console.log("Consume ", param.q)

					bytes = msg.content;
					var from = Date.now()
					serializer.read(SearchResult, bytes, function (err, msg) {
						if (err) {
							console.log(err)
						}
						logTime('decode response', from)
					    res.send(msg.results)
						logTime('total req res', total_time)
					});
					ch.close()
				}, {noAck: true});
			})
		});
	});
})

amqp.connect(amqpUrl, function(err, conn) {
	app.get('/hotel', function (req, res) {
		var total_time = Date.now()
		param = {
			q: req.query.q
		}

		if (err) {
			console.log(err)
		}
		conn.createChannel(function(err, ch) {
			var msg = JSON.stringify(param)
			console.log(" [x] Sent %s", msg);
			ch.publish('hotel_search__request', 'hotel_search__request', new Buffer(msg));
			ch.close()
			conn.createChannel(function(err, ch) {
				ch.consume('hotel_search__response', function(msg) {
					console.log("Consume ", param.q)

					bytes = msg.content;
					var from = Date.now()
					serializer.read(SearchResult, bytes, function (err, msg) {
						if (err) {
							console.log(err)
						}
						logTime('decode response', from)
					    res.send(msg.results)
					    // res.send({time: (Date.now() - total_time) + " ms."})
						logTime('total req res', total_time)
					});
					ch.close()
				}, {noAck: true});
			})
		});
	});
})

if (process.argv[2] == 'true') {
	if (cluster.isMaster) {
		console.log('Master ${process.pid} is running')
		for (let i = 0; i < numCPUs; i++) {
			cluster.fork();
		}

		cluster.on('exit', (worker, code, signal) => {
			console.log(`worker ${worker.process.pid} died`);
		});
	} else {
		app.listen(8080, function () {
			// console.log('Example app listening on port 8080!')
		})

		console.log(`Worker ${process.pid} started`);
	}
} else {
	app.listen(8080, function () {
		console.log('Example app listening on port 8080!')
	})
}


function publish(amqpUrl, ex, q, msg) {
	amqp.connect(amqpUrl, function(err, conn) {
		conn.createChannel(function(err, ch) {
			ch.assertExchange(ex, 'fanout', {durable: false});
			ch.publish(ex, q, new Buffer(msg));
			console.log(" [x] Sent %s", msg);
		});

		setTimeout(function() { conn.close(); }, 500);
	});
}

function logTime(act, from) {
	console.log("Time "+ act +": " , (Date.now() - from) + ' ms');
}