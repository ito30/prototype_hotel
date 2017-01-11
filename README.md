# What is this?

**Hotel prototype phase 1 (with thrift)** is testing 1 flow search hotel

# Technology used

- Nodejs
	- express
	- request
	- path
	- amqplib
- RabbitMQ
- Apache thrift

- api-gateway.js
- index.js (hotel microservice)
- hotel.thrift
- compressor.js serialize/deserialize

# How to generate thrift model:

- Install Apache Thrift
- run: ```thrift --gen js:node hotel.thrift```