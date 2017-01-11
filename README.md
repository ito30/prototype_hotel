# prototype_hotel
- api-gateway.js
- hotel-service.js
- hotel_prod.thrift

# How to generate thrift model
- install Apache Thrift
- run: ```thrift --gen js:node hotel_prod.thrift```

# Technology stack
- Node.js

  ```javascript
  "dependencies": {
    "amqplib": "^0.5.1",
    "body-parser": "^1.15.2",
    "express": "^4.14.0",
    "mongoose": "^4.7.6",
    "redis": "^2.6.3",
    "request": "^2.79.0",
    "thrift-serializer": "^1.1.0"
  }
  ```

- Express.js
- RabbitMQ
- MongoDB using [Mongoose](https://github.com/Automattic/mongoose)
- [Node-redis](https://github.com/NodeRedis/node_redis)
- [Apache Thrift](https://thrift.apache.org/)
- [Thrift-serializer](https://github.com/guardian/thrift-serializer). Can't find better library for Thrift Serializer, or maybe we can make our own?

# PC Specification for Test
- Intel Core i5
- Memory 8GB

# Test
- [100 req per second](https://drive.google.com/a/tiket.com/file/d/0Bw3WJ0HMd0k1ZlJTMmgyUFFUNVk/view?usp=sharing)
- [300 req per second](https://drive.google.com/a/tiket.com/file/d/0Bw3WJ0HMd0k1bFM1Vmt1TFdrX1E/view?usp=sharing)
- MongoDB inquiry time consumption: `20 - 50++ ms`
- Redis inquiry time consumption: `0 - 1ms`
- RabbitMQ publishing time consumption: `0 - 3ms`
- RabbitMQ consuming time consumption: `0 - 3ms`
- Thrift encoding time consumption
  - on startup: up to `20++ ms`
  - after cached: `1 - 7 ms`
- Thrift decoding time consumption
  - on startup: up to `20++ ms`
  - after cached: `1 - 9 ms`


