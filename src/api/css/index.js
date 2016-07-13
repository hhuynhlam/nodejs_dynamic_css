const express = require('express');

const css = require('./css-controller');

const router = express.Router();

router.get('/', css.get);

module.exports = router;
