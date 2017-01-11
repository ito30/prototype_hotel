#!/usr/bin/env node

var amqp = require('amqplib/callback_api');
var request = require('request');

// var amqpUrl = 'amqp://exvldeec:Bmy6Q-Nrnukol-Rz78bY6p6A4fPcUtTa@zebra.rmq.cloudamqp.com/exvldeec';
var amqpUrl = 'amqp://localhost';
var urlAPI = 'http://api.tiket.com/search/hotel';

var file_compressor = './compressor.js';

var serializer = require(file_compressor);

var param = {
	startdate	: '2017-01-27',
	enddate		: '2017-01-28',
	night		: 1, 
	room		: 1, 
	adult		: 2, 
	child		: 0, 
	output		: 'json', 
	// token		: '2d6f4f2237218762b138de326b7b8d591d15329e'
	token		: 'f14e53de637faa418d6545621f26355ee2df888d'
};

amqp.connect(amqpUrl, function(err, conn) {
  conn.createChannel(function(err, ch) {
    var ex = 'hotel_search__request';
    var q_name = 'hotel_search__request';

    // ch.assertExchange(ex, 'fanout', {durable: true});

    // ch.assertQueue(q_name, {exclusive: true}, function(err, q) {
    //   console.log(" [*] Waiting for messages in %s. To exit press CTRL+C", q.queue);
      // ch.bindQueue(q.queue, ex, q_name);

      // ch.consume(q.queue, function(msg){
      ch.consume(q_name, function(msg){
      	var queue = JSON.parse(msg.content);
		var label_req = "Request : ";

		console.log(label_req, queue.q)
	    // logTime('Consume ', from);

		if(queue.q !== '')
		{
		    param.q = queue.q;
	        var from = Date.now();
			request({
			    url: urlAPI,
			    qs: param,
			    method: 'GET',
			    headers: {}
			}, function(error, response, body){
			    body = JSON.parse(body);
			    if(error) {
			        console.log(error);
			    } else {

			    	logTime('end API call', from);
			    	
			    	conn.createChannel(function(err, ch) {
					    var ex = 'hotel_search__response';
					    var q = 'hotel_search__response';
					    
					    // ch.assertExchange(ex, 'fanout', {durable: true});

					    var res = body.results.result;
					    var encodedData = [];

					    if(res.length > 0)
					    {
					    	from = Date.now();
					    	res.forEach(function(v){
					    		// console.log(v)
					    		var encoded = serializer.encode(v);
					    		encodedData.push( encoded );

					    	})
					    	logTime('encode result', from);
					    }

					    // console.log(encodedData)

					    from = Date.now();
					    ch.publish(ex, q, new Buffer(JSON.stringify(encodedData)));
					    logTime('publish result', from);
                        console.log('----------------------------------------------------');
				  	});
			    }
			});
		}
      }, {noAck: true});
    // });
  });
});

function logTime(act, from)
{
	console.log("Time "+ act +": " , (Date.now() - from) + ' ms');
}