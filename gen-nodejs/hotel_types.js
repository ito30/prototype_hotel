//
// Autogenerated by Thrift Compiler (0.9.3)
//
// DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
//
var thrift = require('thrift');
var Thrift = thrift.Thrift;
var Q = thrift.Q;


var ttypes = module.exports = {};
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
    if (args.province_name !== undefined && args.province_name !== null) {
      this.province_name = args.province_name;
    }
    if (args.kecamatan_name !== undefined && args.kecamatan_name !== null) {
      this.kecamatan_name = args.kecamatan_name;
    }
    if (args.kelurahan_name !== undefined && args.kelurahan_name !== null) {
      this.kelurahan_name = args.kelurahan_name;
    }
    if (args.business_uri !== undefined && args.business_uri !== null) {
      this.business_uri = args.business_uri;
    }
    if (args.photo_primary !== undefined && args.photo_primary !== null) {
      this.photo_primary = args.photo_primary;
    }
    if (args.star_rating !== undefined && args.star_rating !== null) {
      this.star_rating = args.star_rating;
    }
    if (args.id !== undefined && args.id !== null) {
      this.id = args.id;
    }
    if (args.room_available !== undefined && args.room_available !== null) {
      this.room_available = args.room_available;
    }
    if (args.latitude !== undefined && args.latitude !== null) {
      this.latitude = args.latitude;
    }
    if (args.longitude !== undefined && args.longitude !== null) {
      this.longitude = args.longitude;
    }
    if (args.room_max_occupancies !== undefined && args.room_max_occupancies !== null) {
      this.room_max_occupancies = args.room_max_occupancies;
    }
    if (args.rating !== undefined && args.rating !== null) {
      this.rating = args.rating;
    }
    if (args.room_facility_name !== undefined && args.room_facility_name !== null) {
      this.room_facility_name = args.room_facility_name;
    }
    if (args.oldprice !== undefined && args.oldprice !== null) {
      this.oldprice = args.oldprice;
    }
    if (args.address !== undefined && args.address !== null) {
      this.address = args.address;
    }
    if (args.wifi !== undefined && args.wifi !== null) {
      this.wifi = args.wifi;
    }
    if (args.promo_name !== undefined && args.promo_name !== null) {
      this.promo_name = args.promo_name;
    }
    if (args.price !== undefined && args.price !== null) {
      this.price = args.price;
    }
    if (args.total_price !== undefined && args.total_price !== null) {
      this.total_price = args.total_price;
    }
    if (args.regional !== undefined && args.regional !== null) {
      this.regional = args.regional;
    }
    if (args.name !== undefined && args.name !== null) {
      this.name = args.name;
    }
    if (args.hotel_id !== undefined && args.hotel_id !== null) {
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
    if (args.results !== undefined && args.results !== null) {
      this.results = Thrift.copyList(args.results, [ttypes.Hotel]);
    } else {
      throw new Thrift.TProtocolException(Thrift.TProtocolExceptionType.UNKNOWN, 'Required field results is unset!');
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
