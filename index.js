#!/usr/bin/env node

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/hotel');

const querystring = require('querystring')

var Schema = mongoose.Schema;

var hotelSchema = new Schema({
	hotels: [
        {
            province_name: String,
            kecamatan_name: String,
            kelurahan_name: String,
            business_uri: String,
            photo_primary: String,
            star_rating: Number,
            id: String,
            room_available: Number,
            latitude: Number,
            longitude: Number,
            room_max_occupancies: Number,
            rating: Number,
            room_facility_name: String,
            oldprice: Number,
            address: String,
            wifi: String,
            promo_name: String,
            price: Number,
            total_price: Number,
            regional: String,
            name: String,
            hotel_id: String,
        }
    ],
	param: {
		startdate: String,
		enddate: String,
		night: Number,
		room: Number,
		adult: Number,
		child: Number,
		output: String, 
		// token: String,
		q: String
	}
});

var Hotel = mongoose.model('Hotel', hotelSchema);

var redis = require('redis'),
    client = redis.createClient()

var amqp = require('amqplib/callback_api');
var request = require('request');
var path = require('path');

// var amqpUrl = 'amqp://tiket:tiket123@54.179.128.134:5672';
// var amqpUrl = 'amqp://exvldeec:Bmy6Q-Nrnukol-Rz78bY6p6A4fPcUtTa@zebra.rmq.cloudamqp.com/exvldeec';
var amqpUrl = 'amqp://localhost';
// var urlAPI = 'http://api.devel.tiket.com/search/hotel';
var urlAPI = 'http://api.tiket.com/search/hotel';

var file_compressor = './compressor.js';

var codec = {};
codec.name = path.basename(file_compressor);
codec.impl = require(file_compressor);

var _Hotel = require('./gen-nodejs/hotel_prod_types').Hotel
var SearchResult = require('./gen-nodejs/hotel_prod_types').SearchResult
var serializer = require('thrift-serializer')

var from = Date.now();

// var API_TOKEN = '2d6f4f2237218762b138de326b7b8d591d15329e'
var API_TOKEN = '38fd2908633a6e183d5a52ce2107cdfd8c3ba6fb' // PROD

var param = {
	startdate	: '2017-01-27',
	enddate		: '2017-01-28',
	night		: 1, 
	room		: 1, 
	adult		: 2, 
	child		: 0, 
	output		: 'json'
};

amqp.connect(amqpUrl, function(err, conn) {
    conn.createChannel(function(err, ch) {
        var ex = 'hotel_search__request';
        var q_name = 'hotel_search__request';
        ch.consume(q_name, function(msg) {
            var queue = JSON.parse(msg.content);
            var label_req = "Request: ";

            console.log(label_req + queue.q + "\n")

            if(queue.q !== '') {
                param.q = queue.q;
                inquire(conn)
            }
        }, {noAck: true});
    });
});

function inquire(conn) {
    var ex = 'hotel_search__response';
    var q = 'hotel_search__response';

    console.log('Inquire to cache. . .')
    from = Date.now()
    client.get(querystring.stringify(param), function(err, res) {
        if (err) {
            console.log(err)
        }

        if (res) {
            logTime('Redis inquiry result', from)
            from = Date.now()
            res = JSON.parse(res)
            conn.createChannel(function(err, ch) {
                publish(ch, ex, q, res)
            })
        } else {
            console.log("No result from cache.\n")
            console.log("Inquire to db. . .")
            inquireDB(conn, ex, q)
        }
    })
}

function inquireDB(conn, ex, q) {
    from = Date.now()
    Hotel.findOne({param: param}, function(err, docs) {
        if (err) {
            console.log(err)
        }

        if (docs) {
            logTime('MongoDB inquiry result', from)
            conn.createChannel(function(err, ch) {
                insertCache(docs.hotels)
                publish(ch, ex, q, docs.hotels)
            })
        } else {
            console.log("No result from db.\n")
            callAPI(conn, ex, q)
        }
    })
}

function callAPI(conn, ex, q) {
    var _param = JSON.parse(JSON.stringify(param))
    _param.token = API_TOKEN
    from = Date.now();
    console.log('API Call. . .')
    request({
        url: urlAPI,
        qs: _param,
        method: 'GET',
        headers: {}
    }, function(error, response, body){
        body = JSON.parse(body);
        if(error) {
            console.log(error);
        } else {
            logTime('End API Call', from);
            console.log('\n')

            conn.createChannel(function(err, ch) {

                // ch.assertExchange(ex, 'fanout', {durable: true});

                // var res = {results: body.results.result};
                // from = Date.now();
                // console.log(JSON.stringify(res))
                // var encodedData = codec.impl.encode(res);
                // console.log(encodedData)
                // logTime('Encoded', from);

                var res = body.results.result;
                insertDB(res)
                publish(ch, ex, q, res)
            });
        }
    });
}

function insertCache(data) {
    console.log("Inserting to cache. . .")
    from = Date.now()
    client.set(querystring.stringify(param), JSON.stringify(data))
    logTime('insert cache', from)
}

function publish(ch, ex, q, data) {
    var encodedData = [];
    if(data.length > 0)
    {
    	from = Date.now();
        var results = []
    	data.forEach(function(v){
    		// var encoded = codec.impl.encode(v);
    		// encodedData.push( encoded );
            results.push(new _Hotel(v))
    	})
        var result = new SearchResult({
            results: results
        })

        serializer.write(result, serializer.Compression.Gzip, function (err, bytes) {
            logTime('Encoded', from);
            if (err) {
                console.log(err)
            }
            // do something with your bytes, e.g. convert the buffer into a base64 string
            
            from = Date.now();
            ch.publish(ex, q, bytes);
            logTime('Publish', from);
        })
    }

    // from = Date.now();
    // ch.publish(ex, q, Buffer.from(JSON.stringify(encodedData)));
    // logTime('Publish', from);
}

function insertDB(data) {
	console.log("Inserting to DB. . .")
	var obj = {}
	obj.param = param
	obj.hotels = data
    from = Date.now()
	Hotel.create(obj, function(err, tes) {
		if (err) {
			console.log(err)
		}
        logTime('insert db', from)
	})
}

function logTime(act, from) {
	console.log("Time "+ act +": " , (Date.now() - from) + ' ms');
}
