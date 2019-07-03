const Hapi = require('@hapi/hapi');
const constants = require('./constants');
const routes = require('./routes');
const plugins = require('./plugins');
const port = constants.port;
const server = new Hapi.Server({ port });
const MongoClient = require('mongodb').MongoClient;
MongoClient.connect(constants.mongodb.url, function(err, client) {
if (err)
throw err;
console.log("Connected successfully to mongodb server");
});
server.route(routes);
server.register(plugins.logRequest)
.then(() => {
server.start();
})
.catch((err) => {
console.log("error", err);
})
console.log(`Server running at: ${server.info.uri}`);
