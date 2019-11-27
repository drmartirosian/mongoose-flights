var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ticketSchema = new Schema ({
  //-----------seat------------
  seat: {
    type: String,
    match: /[A-Z][1-9]\d,?/,
  },
  //------------price-----------
  price: {
    type: Number,
    min: 0, max: 1000,
  },
});

module.exports = mongoose.model('Ticket', ticketSchema);
