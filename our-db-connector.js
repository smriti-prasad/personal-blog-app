// our-db-connector.js
require("dotenv").config();
const fp = require("fastify-plugin");

async function dbConnector(fastify, options) {
  fastify.register(require("@fastify/mongodb"), {
    forceClose: true,
    url: process.env.MONGO_URL
  });
}

module.exports = fp(dbConnector);
