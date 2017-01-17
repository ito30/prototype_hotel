//
// Autogenerated by Thrift Compiler (0.9.1)
//
// DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
//
var Thrift = require('thrift').Thrift;

var ttypes = module.exports = {};
TripAdvisorRating = module.exports.TripAdvisorRating = function(args) {
  this.avg_rating = null;
  this.image_url = null;
  this.review_count = null;
  this.url = null;
  if (args) {
    if (args.avg_rating !== undefined) {
      this.avg_rating = args.avg_rating;
    }
    if (args.image_url !== undefined) {
      this.image_url = args.image_url;
    }
    if (args.review_count !== undefined) {
      this.review_count = args.review_count;
    }
    if (args.url !== undefined) {
      this.url = args.url;
    }
  }
};
TripAdvisorRating.prototype = {};
TripAdvisorRating.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.DOUBLE) {
        this.avg_rating = input.readDouble();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.STRING) {
        this.image_url = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.I16) {
        this.review_count = input.readI16();
      } else {
        input.skip(ftype);
      }
      break;
      case 4:
      if (ftype == Thrift.Type.STRING) {
        this.url = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

TripAdvisorRating.prototype.write = function(output) {
  output.writeStructBegin('TripAdvisorRating');
  if (this.avg_rating !== null && this.avg_rating !== undefined) {
    output.writeFieldBegin('avg_rating', Thrift.Type.DOUBLE, 1);
    output.writeDouble(this.avg_rating);
    output.writeFieldEnd();
  }
  if (this.image_url !== null && this.image_url !== undefined) {
    output.writeFieldBegin('image_url', Thrift.Type.STRING, 2);
    output.writeString(this.image_url);
    output.writeFieldEnd();
  }
  if (this.review_count !== null && this.review_count !== undefined) {
    output.writeFieldBegin('review_count', Thrift.Type.I16, 3);
    output.writeI16(this.review_count);
    output.writeFieldEnd();
  }
  if (this.url !== null && this.url !== undefined) {
    output.writeFieldBegin('url', Thrift.Type.STRING, 4);
    output.writeString(this.url);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

Hotel = module.exports.Hotel = function(args) {
  this.province_name = null;
  this.kecamatan_name = null;
  this.kelurahan_name = null;
  this.business_uri = null;
  this.photo_primary = null;
  this.star_rating = null;
  this.id = null;
  this.room_available = null;
  this.latitude = null;
  this.longitude = null;
  this.room_max_occupancies = null;
  this.rating = null;
  this.room_facility_name = null;
  this.oldprice = null;
  this.address = null;
  this.wifi = null;
  this.promo_name = null;
  this.price = null;
  this.total_price = null;
  this.regional = null;
  this.name = null;
  this.hotel_id = null;
  if (args) {
    if (args.province_name !== undefined) {
      this.province_name = args.province_name;
    }
    if (args.kecamatan_name !== undefined) {
      this.kecamatan_name = args.kecamatan_name;
    }
    if (args.kelurahan_name !== undefined) {
      this.kelurahan_name = args.kelurahan_name;
    }
    if (args.business_uri !== undefined) {
      this.business_uri = args.business_uri;
    }
    if (args.photo_primary !== undefined) {
      this.photo_primary = args.photo_primary;
    }
    if (args.star_rating !== undefined) {
      this.star_rating = args.star_rating;
    }
    if (args.id !== undefined) {
      this.id = args.id;
    }
    if (args.room_available !== undefined) {
      this.room_available = args.room_available;
    }
    if (args.latitude !== undefined) {
      this.latitude = args.latitude;
    }
    if (args.longitude !== undefined) {
      this.longitude = args.longitude;
    }
    if (args.room_max_occupancies !== undefined) {
      this.room_max_occupancies = args.room_max_occupancies;
    }
    if (args.rating !== undefined) {
      this.rating = args.rating;
    }
    if (args.room_facility_name !== undefined) {
      this.room_facility_name = args.room_facility_name;
    }
    if (args.oldprice !== undefined) {
      this.oldprice = args.oldprice;
    }
    if (args.address !== undefined) {
      this.address = args.address;
    }
    if (args.wifi !== undefined) {
      this.wifi = args.wifi;
    }
    if (args.promo_name !== undefined) {
      this.promo_name = args.promo_name;
    }
    if (args.price !== undefined) {
      this.price = args.price;
    }
    if (args.total_price !== undefined) {
      this.total_price = args.total_price;
    }
    if (args.regional !== undefined) {
      this.regional = args.regional;
    }
    if (args.name !== undefined) {
      this.name = args.name;
    }
    if (args.hotel_id !== undefined) {
      this.hotel_id = args.hotel_id;
    }
  }
};
Hotel.prototype = {};
Hotel.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.STRING) {
        this.province_name = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.STRING) {
        this.kecamatan_name = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.STRING) {
        this.kelurahan_name = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 4:
      if (ftype == Thrift.Type.STRING) {
        this.business_uri = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 5:
      if (ftype == Thrift.Type.STRING) {
        this.photo_primary = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 6:
      if (ftype == Thrift.Type.BYTE) {
        this.star_rating = input.readByte();
      } else {
        input.skip(ftype);
      }
      break;
      case 7:
      if (ftype == Thrift.Type.STRING) {
        this.id = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 8:
      if (ftype == Thrift.Type.I16) {
        this.room_available = input.readI16();
      } else {
        input.skip(ftype);
      }
      break;
      case 9:
      if (ftype == Thrift.Type.DOUBLE) {
        this.latitude = input.readDouble();
      } else {
        input.skip(ftype);
      }
      break;
      case 10:
      if (ftype == Thrift.Type.DOUBLE) {
        this.longitude = input.readDouble();
      } else {
        input.skip(ftype);
      }
      break;
      case 11:
      if (ftype == Thrift.Type.I16) {
        this.room_max_occupancies = input.readI16();
      } else {
        input.skip(ftype);
      }
      break;
      case 12:
      if (ftype == Thrift.Type.DOUBLE) {
        this.rating = input.readDouble();
      } else {
        input.skip(ftype);
      }
      break;
      case 13:
      if (ftype == Thrift.Type.STRING) {
        this.room_facility_name = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 14:
      if (ftype == Thrift.Type.DOUBLE) {
        this.oldprice = input.readDouble();
      } else {
        input.skip(ftype);
      }
      break;
      case 15:
      if (ftype == Thrift.Type.STRING) {
        this.address = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 16:
      if (ftype == Thrift.Type.STRING) {
        this.wifi = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 17:
      if (ftype == Thrift.Type.STRING) {
        this.promo_name = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 18:
      if (ftype == Thrift.Type.DOUBLE) {
        this.price = input.readDouble();
      } else {
        input.skip(ftype);
      }
      break;
      case 19:
      if (ftype == Thrift.Type.DOUBLE) {
        this.total_price = input.readDouble();
      } else {
        input.skip(ftype);
      }
      break;
      case 20:
      if (ftype == Thrift.Type.STRING) {
        this.regional = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 21:
      if (ftype == Thrift.Type.STRING) {
        this.name = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 22:
      if (ftype == Thrift.Type.STRING) {
        this.hotel_id = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

Hotel.prototype.write = function(output) {
  output.writeStructBegin('Hotel');
  if (this.province_name !== null && this.province_name !== undefined) {
    output.writeFieldBegin('province_name', Thrift.Type.STRING, 1);
    output.writeString(this.province_name);
    output.writeFieldEnd();
  }
  if (this.kecamatan_name !== null && this.kecamatan_name !== undefined) {
    output.writeFieldBegin('kecamatan_name', Thrift.Type.STRING, 2);
    output.writeString(this.kecamatan_name);
    output.writeFieldEnd();
  }
  if (this.kelurahan_name !== null && this.kelurahan_name !== undefined) {
    output.writeFieldBegin('kelurahan_name', Thrift.Type.STRING, 3);
    output.writeString(this.kelurahan_name);
    output.writeFieldEnd();
  }
  if (this.business_uri !== null && this.business_uri !== undefined) {
    output.writeFieldBegin('business_uri', Thrift.Type.STRING, 4);
    output.writeString(this.business_uri);
    output.writeFieldEnd();
  }
  if (this.photo_primary !== null && this.photo_primary !== undefined) {
    output.writeFieldBegin('photo_primary', Thrift.Type.STRING, 5);
    output.writeString(this.photo_primary);
    output.writeFieldEnd();
  }
  if (this.star_rating !== null && this.star_rating !== undefined) {
    output.writeFieldBegin('star_rating', Thrift.Type.BYTE, 6);
    output.writeByte(this.star_rating);
    output.writeFieldEnd();
  }
  if (this.id !== null && this.id !== undefined) {
    output.writeFieldBegin('id', Thrift.Type.STRING, 7);
    output.writeString(this.id);
    output.writeFieldEnd();
  }
  if (this.room_available !== null && this.room_available !== undefined) {
    output.writeFieldBegin('room_available', Thrift.Type.I16, 8);
    output.writeI16(this.room_available);
    output.writeFieldEnd();
  }
  if (this.latitude !== null && this.latitude !== undefined) {
    output.writeFieldBegin('latitude', Thrift.Type.DOUBLE, 9);
    output.writeDouble(this.latitude);
    output.writeFieldEnd();
  }
  if (this.longitude !== null && this.longitude !== undefined) {
    output.writeFieldBegin('longitude', Thrift.Type.DOUBLE, 10);
    output.writeDouble(this.longitude);
    output.writeFieldEnd();
  }
  if (this.room_max_occupancies !== null && this.room_max_occupancies !== undefined) {
    output.writeFieldBegin('room_max_occupancies', Thrift.Type.I16, 11);
    output.writeI16(this.room_max_occupancies);
    output.writeFieldEnd();
  }
  if (this.rating !== null && this.rating !== undefined) {
    output.writeFieldBegin('rating', Thrift.Type.DOUBLE, 12);
    output.writeDouble(this.rating);
    output.writeFieldEnd();
  }
  if (this.room_facility_name !== null && this.room_facility_name !== undefined) {
    output.writeFieldBegin('room_facility_name', Thrift.Type.STRING, 13);
    output.writeString(this.room_facility_name);
    output.writeFieldEnd();
  }
  if (this.oldprice !== null && this.oldprice !== undefined) {
    output.writeFieldBegin('oldprice', Thrift.Type.DOUBLE, 14);
    output.writeDouble(this.oldprice);
    output.writeFieldEnd();
  }
  if (this.address !== null && this.address !== undefined) {
    output.writeFieldBegin('address', Thrift.Type.STRING, 15);
    output.writeString(this.address);
    output.writeFieldEnd();
  }
  if (this.wifi !== null && this.wifi !== undefined) {
    output.writeFieldBegin('wifi', Thrift.Type.STRING, 16);
    output.writeString(this.wifi);
    output.writeFieldEnd();
  }
  if (this.promo_name !== null && this.promo_name !== undefined) {
    output.writeFieldBegin('promo_name', Thrift.Type.STRING, 17);
    output.writeString(this.promo_name);
    output.writeFieldEnd();
  }
  if (this.price !== null && this.price !== undefined) {
    output.writeFieldBegin('price', Thrift.Type.DOUBLE, 18);
    output.writeDouble(this.price);
    output.writeFieldEnd();
  }
  if (this.total_price !== null && this.total_price !== undefined) {
    output.writeFieldBegin('total_price', Thrift.Type.DOUBLE, 19);
    output.writeDouble(this.total_price);
    output.writeFieldEnd();
  }
  if (this.regional !== null && this.regional !== undefined) {
    output.writeFieldBegin('regional', Thrift.Type.STRING, 20);
    output.writeString(this.regional);
    output.writeFieldEnd();
  }
  if (this.name !== null && this.name !== undefined) {
    output.writeFieldBegin('name', Thrift.Type.STRING, 21);
    output.writeString(this.name);
    output.writeFieldEnd();
  }
  if (this.hotel_id !== null && this.hotel_id !== undefined) {
    output.writeFieldBegin('hotel_id', Thrift.Type.STRING, 22);
    output.writeString(this.hotel_id);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

SearchResult = module.exports.SearchResult = function(args) {
  this.results = null;
  if (args) {
    if (args.results !== undefined) {
      this.results = args.results;
    }
  }
};
SearchResult.prototype = {};
SearchResult.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.LIST) {
        var _size0 = 0;
        var _rtmp34;
        this.results = [];
        var _etype3 = 0;
        _rtmp34 = input.readListBegin();
        _etype3 = _rtmp34.etype;
        _size0 = _rtmp34.size;
        for (var _i5 = 0; _i5 < _size0; ++_i5)
        {
          var elem6 = null;
          elem6 = new ttypes.Hotel();
          elem6.read(input);
          this.results.push(elem6);
        }
        input.readListEnd();
      } else {
        input.skip(ftype);
      }
      break;
      case 0:
        input.skip(ftype);
        break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

SearchResult.prototype.write = function(output) {
  output.writeStructBegin('SearchResult');
  if (this.results !== null && this.results !== undefined) {
    output.writeFieldBegin('results', Thrift.Type.LIST, 1);
    output.writeListBegin(Thrift.Type.STRUCT, this.results.length);
    for (var iter7 in this.results)
    {
      if (this.results.hasOwnProperty(iter7))
      {
        iter7 = this.results[iter7];
        iter7.write(output);
      }
    }
    output.writeListEnd();
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};
