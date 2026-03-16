const mongoose = require('mongoose');

const metricSchema = new mongoose.Schema({
    name: String,
    value: Number,
    timestamp: Date
});

module.exports = mongoose.model('Metric', metricSchema);