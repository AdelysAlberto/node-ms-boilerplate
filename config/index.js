
const config = {
    server: {
        port: process.env.SERVER_PORT,
        killTimeout: process.env.SERVER_KILLTIMEOUT
    },
    sqlDb: {
      user: process.env.DB_USER,
      host: process.env.DB_HOST,
      port: process.env.DB_PORT,
      pass: process.env.DB_PASS,
      name: process.env.DB_NAME,
      type: process.env.DB_TYPE
    }
};

module.exports = {
    ...config
};

