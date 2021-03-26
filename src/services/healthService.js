
const {logger} = require('../lib');



const getHealth = async (params) => {

  const used = process.memoryUsage().heapTotal / 1024 / 1024;
  logger.info({
    process: "Get Info of heath",
    memoryUsage: `${used}MB`,
  });
  
  const result = {
    status: 'ok',
    memoryUsage: `${used}MB`,
  }

  return result;
}


module.exports = {
  getHealth
};