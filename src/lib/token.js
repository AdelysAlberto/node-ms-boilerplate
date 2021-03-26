const jwt = require('jsonwebtoken');

/**
 * Decode a jwt token.
 * @param {string} jsonToken token.
 * @returns {object}
 */
const decode = (jsonToken) => jwt.decode(jsonToken);

module.exports = {
  decode
};
