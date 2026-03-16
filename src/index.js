const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3000;
const metricRoutes = require('./routes/metrics');

app.use('/metrics', metricRoutes);

mongoose.connect('mongodb://localhost/skyshield-security-api', { useNewUrlParser: true, useUnifiedTopology: true });

app.listen(port, () => {
    console.log(`Server started at http://localhost:${port}`);
});