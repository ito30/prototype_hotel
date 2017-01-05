var express = require('express'),
	bodyParser = require('body-parser')
var app = express()
var amqp = require('amqplib/callback_api');
var path = require('path');

// var amqpUrl = 'amqp://exvldeec:Bmy6Q-Nrnukol-Rz78bY6p6A4fPcUtTa@zebra.rmq.cloudamqp.com/exvldeec';
var amqpUrl = 'amqp://localhost';

var file_compressor = './compressor.js';

var codec = {};
codec.name = path.basename(file_compressor);
codec.impl = require(file_compressor);

var SearchResult = require('./gen-nodejs/hotel_prod_types').SearchResult
var serializer = require('thrift-serializer')

app.use(bodyParser.json());

app.post('/bulk', function(req, res) {
	console.log(req.body.q)
	res.send(req.body)
})

app.post('/hotel', function (req, res) {
  	var total_time = Date.now()
	param = {
		q: req.body.q
	}
	// publish
	// publish(amqpUrl, 'hotel_search__request', 'hotel_search__request', JSON.stringify(param))

	// consume
  	amqp.connect(amqpUrl, function(err, conn) {
		if (err) {
			console.log(err)
		}
		conn.createChannel(function(err, ch) {
			var msg = JSON.stringify(param)
			console.log(" [x] Sent %s", msg);
			ch.publish('hotel_search__request', 'hotel_search__request', new Buffer(msg));
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
				ch.close();
				conn.close();
			}, {noAck: true});
		});
	});
})

app.get('/hotel', function (req, res) {
	var total_time = Date.now()
	param = {
		q: req.query.q
	}

	amqp.connect(amqpUrl, function(err, conn) {
		if (err) {
			console.log(err)
		}
		conn.createChannel(function(err, ch) {
			var msg = JSON.stringify(param)
			console.log(" [x] Sent %s", msg);
			ch.publish('hotel_search__request', 'hotel_search__request', new Buffer(msg));
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
				ch.close();
				conn.close();
			}, {noAck: true});
		});
	});
})

app.listen(8080, function () {
  console.log('Example app listening on port 8080!')
})

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