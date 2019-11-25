var Flight = require('../models/flight');

module.exports = {
    index,
}

function index(req, res) {
    res.render('index', {
        title: 'Flights'
    })
}
