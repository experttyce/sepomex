const express = require('express');

const emojis = require('./emojis');
const zipcode = require('./zipcode');
const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    message: 'API - 👋🌎🌍🌏'
  });
});

router.use('/emojis', emojis);
router.use('/zipcode', zipcode);

module.exports = router;
