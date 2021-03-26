const httpContext = require('express-http-context');
const {logger} = require('../../lib');
const { decode } = require('../../lib/token.js');

/**
 * Receive decode, and load the token.
 * @param {object} req request object.
 * @param {object} res response object.
 */
const token2Context = (req, res, next) => {
  try {
    // Extract the token from the header.
    const authorization = req.get('authorization');

    if (!authorization) {
      logger.warn({ url: req.url, method: req.method, message: 'Bad token request' });
      return res.status(403).json({ message: 'Restricted access, bad token' });
    }

    // Decode the token.
    const decodedJWT = decode(authorization);

    // Set in the context. headers and token
    httpContext.set('header', req.headers);
    httpContext.set('user', decodedJWT);

    next();
  } catch (error) {
    res.status(403).json({ message: 'Restricted access, bad token' });
  }
};

module.exports = {
  token2Context,
};
