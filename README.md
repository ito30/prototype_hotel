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

## How to testing
- go to ```prototyoe_hotel``` directory with branch ```prototype_1```
- node index.js
- node api-gateway.js
- open your browser and type **http://localhost:8080/hotel?q=Singapura** Enter

## Testing result

**Response Time in ms**

| Percobaan | Keyword | API call | Encode | Decode | Total |
| --- | --- | --- | --- | --- | --- |
| 1 | Bali | 8574 | 34 | 22 | 8770 |
| 2 | Bali | 2653 | 3 | 24 | 2793 |
| 3 | Bali | 2673 | 3 | 3 | 2780 |
| 4 | Yogyakarta | 1639 | 15 | 9 | 1780 |
| 5 | Yogyakarta | 652 | 3 | 3 | 771 |
| 6 | Yogyakarta | 485 | 5 | 0.1 | 590 |
| 7 | Singapura | 3703 | 16 | 17 | 3801 |
| 8 | Singapura | 706 | 2 | 2 | 774 |
| 9 | Singapura | 962 | 4 | 2 | 1046 |

**Schreenshot**

![Image of Testing](https://raw.githubusercontent.com/ito30/prototype_hotel/prototype_1/testing.png)
