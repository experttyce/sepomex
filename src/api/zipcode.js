const express = require('express');
const router = express.Router();
const monk = require('monk');

const db = monk(process.env.MONGO_URI);


const sepomex = db.get('zipcodes');
db.addMiddleware(require('monk-middleware-debug'));

router.get('/:zc', async (req, res, next) => {
  try {
    const { zc } = req.params;
    const item = await sepomex.find({
      d_codigo: zc,
    });
    var collection = db.get(req.params.zc);
    return res.json(item);
  } catch (error) {
    next(error);
  }
});

module.exports = router;