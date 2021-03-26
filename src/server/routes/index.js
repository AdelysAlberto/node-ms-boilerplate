
const express = require('express');
const router = express.Router();

const {
  token2Context,
  notFound,
  errorHandler,
  authRestrict,
} = require('../middleware/');

const health = require('./health.js');

router.use('/health', health);

//example how use more controllers with middleware
//router.use('/home', [token2Context, authRestrict], otherController);

router.use(errorHandler);
router.get('*', notFound);


module.exports = router;
