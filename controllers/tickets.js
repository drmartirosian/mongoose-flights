const Flight = require('../models/tickets')

module.exports = {
    show,
}

function show(req, res) {
    res.render('tickets/new', {title: 'tickets'})
}