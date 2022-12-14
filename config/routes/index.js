const express = require('express');
const urlRoutes = require('./url');

const router = express.Router();

router.get('/ping', (req, res) => res.json({ status: 'ok' }));

router.use('/', urlRoutes);

module.exports = router;
