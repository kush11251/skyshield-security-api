const mongoose = require('mongoose');

const connectDatabase = async () => {
    await mongoose.connect('mongodb://localhost/skyshield-security-api', { useNewUrlParser: true, useUnifiedTopology: true });
};

module.exports = connectDatabase;