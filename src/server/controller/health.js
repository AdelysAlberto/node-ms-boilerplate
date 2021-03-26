const {logger} = require('../../lib');
const { getHealth } = require('../../services');
/**
 * Health controller.
 * @param {object} req request object.
 * @param {object} res response object.
 */
const health = async (req, res) => {
  logger.info({
    process: "Status microservice",
    status: 'ok'
  });

  const result = await getHealth();

  res.status(200).json(result);
}

module.exports = health