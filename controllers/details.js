const Flight = require('../models/flights');

module.exports = {
    create,
}


function create(req, res) {
    Flight.findById(req.params.id, function(err, flight) {
        flight.destination.push(req.body);
        flights.save(function(err) {
            res.redirect(`/flights/${flight._id}`);
        })
    });
};