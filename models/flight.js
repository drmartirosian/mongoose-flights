var mongoose = require('mongoose');
var Schema = mongoose.Schema;




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
  depart: {
    type: Date,
    //1+ year from date
    default: function() {
      return new Date().now() - 364*24*60*60*1000;
    }
  }, 
  //----------------------------------
  airport: {
    type: String,
    enum: ['AUS', 'DAL', 'LAX', 'SAN', 'SEA'],
    default: 'SAN',
  }, 
  //------------------------------------
  destination: [destinationSchema]
  //------------------------------------
},{
  timestamps: true,
});



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
  }
});


module.exports = mongoose.model('Flight', flightsSchema);
