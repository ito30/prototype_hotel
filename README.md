# What is this?

**Hotel prototype phase 1 (with thrift)** is testing 1 flow search hotel

## Technology used

- Nodejs
	- express
	- request
	- amqplib
- RabbitMQ
- Apache thrift

## File used

- api-gateway.js
- index.js (hotel microservice)
- hotel.thrift
- compressor.js (serialize/deserialize)

## How to generate thrift model:

- Install Apache Thrift
- run: ```thrift --gen js:node hotel.thrift```

## Testing & Benchmark

![Image of Testing](https://raw.githubusercontent.com/ito30/prototype_hotel/prototype_1/testing.png)
