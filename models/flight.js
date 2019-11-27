var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var destinationSchema = new Schema ({
  //----------------------------------
  airport: {
    type: String,
    enum: ['AUS', 'DAL', 'LAX', 'SAN', 'SEA'],
    default: 'SAN',
  }, 
  //------------------------------------
  arrival: {
    type: Date,
    default: function() {
      return new Date().now() - 364*24*60*60*1000;
    }
  }
});


var flightsSchema = new Schema({
  airline: {
    type: String,
    //enum only Am, South, and United
    enum: ['American', 'Southwest', 'United'],
  },
  //----------------------------------
  flightNo: {
    type: Number,
    //number between 10-9999
    min: 10, max: 9999,
  },
  //----------------------------------
  airport: {
    type: String,
    enum: ['AUS', 'DAL', 'LAX', 'SAN', 'SEA'],
    default: 'SAN',
  }, 
  //----------------------------------
  depart: {
    type: Date,
    //1 year from date
    default: function() {
      return new Date().now() - 364*24*60*60*1000;
    }
  }, 
  //------------------------------------
  destination: [destinationSchema],
  //------------------------------------
},
{
  timestamps: true,
});

module.exports = mongoose.model('Flight', flightsSchema);
