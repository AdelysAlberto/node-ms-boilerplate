
const http = require("http");
const httpContext = require("express-http-context");
const express = require("express");
const environment = require("dotenv").config();
const config = require("../../config");

//Swagger
const swaggerUi = require("swagger-ui-express");

//Define routes and events
const routes = require("./routes");
const events = require("./events.js");

const { server: { port }, sqlDb } = config;

//Start Express-js.
const app = express();
const server = http.createServer(app);

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//Middleware token verified
app.use(httpContext.middleware);
app.use('/', routes);

//Start listen mode.
app.listen(port, async () => {
  events.onListen(port)
  try {
    // here you can call any methed to connect with your BD Library
    // example await db.connect(sqlDb);
  } catch (e) {
    console.log(e);
    next(e)
  }
});


//Define server "special" event to handle situations.
server.on("error", events.onServerError);
process.on("SIGINT", () => events.onProcessKill(server));
process.on("SIGTERM", () => events.onProcessKill(server));
process.on("unhandledRejection", events.onException);
process.on("uncaughtException", (err) => events.onException(err));
