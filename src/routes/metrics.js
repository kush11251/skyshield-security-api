const express = require('express');
const router = express.Router();
const Metric = require('../models/metric');

router.get('/', async (req, res) => {
    const metrics = await Metric.find();
    res.json(metrics);
});

router.post('/', async (req, res) => {
    const metric = new Metric(req.body);
    await metric.save();
    res.json(metric);
});

module.exports = router;