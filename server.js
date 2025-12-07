// server.js
require("dotenv").config();
const fastify = require("fastify")({ logger: true });
const cors = require("@fastify/cors");
const dbConnector = require("./our-db-connector");
const blogRoutes = require("./routes");

async function startServer() {
  try {
    // Middlewares
    await fastify.register(cors, { origin: "*" });
    await fastify.register(dbConnector);
    await fastify.register(blogRoutes, { prefix: "/api" });

    fastify.log.info("All plugins registered successfully");

    const PORT = process.env.PORT || 5000;
    await fastify.listen({ port: PORT, host: "0.0.0.0" });

    fastify.log.info(`🚀 Server running on port ${PORT}`);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
}

startServer();


