var Flight = require('../models/flight');

module.exports = {
  index,
  new: newFlight,
  create,
  show: showFlight,
};

function index (req, res) {
  Flight.find({}, function(err, flights) {
    // console.log(flights);
      res.render('flights/index', {
        flights,
      });
  });
};

function newFlight(req, res) {
 res.render('flights/new');  
};

function create(req, res) {
  var flight = new Flight(req.body);
  flight.save(function(err) {
      if (err) return res.render('flights/new');
      res.redirect('flights');
  });
};

function showFlight(req, res) {
  Flight.findById(req.params.id, function(err, flights){
    res.render('flights/show', {
      flights,
    });  
  })
};

