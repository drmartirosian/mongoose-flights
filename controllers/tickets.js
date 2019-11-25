var Flight = require('../models/ticket')

module.exports = {
    show,
}

function show(req, res) {
    res.render('tickets/new');
}