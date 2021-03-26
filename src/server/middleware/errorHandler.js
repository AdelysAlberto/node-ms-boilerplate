const {logger} = require('../../lib');

/**
 * Error handler middleware.
 * @param {object} error throwable error.
 * @param {object} req   request object.
 * @param {object} res   response object.
 * @param {object} next  next middleware.
 * @returns {Promise}.
 */
const errorHandler = (err, req, res, next) => {
  const { statusCode, status, statusText, message, details } = err;
  const statusResp = status || statusCode;

  const statusApiError = err && statusResp ? statusResp : 500;

  // Get detail.
  const messageError = message || statusText;
  const detailError = err && details ? details : "";

  const messageApiError =
    err && messageError ? messageError : 'Internal server Error';

  logger.error({
    status: statusApiError,
    message: messageApiError,
    details: detailError
  });

  res.status(statusApiError).json({
    status: statusApiError,
    message: messageApiError,
    details: detailError
  });
};

module.exports = {
  errorHandler,
};
