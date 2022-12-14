const express = require('express');
const urlCtrl = require('../../api/controllers/UrlController');

const router = express.Router();

router.route('/api/shorten').post(urlCtrl.shorten);
router.route('/:shortId').get(urlCtrl.decode);

module.exports = router;
