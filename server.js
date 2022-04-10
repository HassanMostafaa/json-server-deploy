const data = require("./db.js");
const port = process.env.PORT || 3001;
const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router(data);
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);
server.listen(port);
