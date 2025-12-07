// routes.js

async function blogRoutes(fastify, options) {
  const collection = () => fastify.mongo.db.collection("articles");

  // GET all articles + optional filters
  fastify.get("/articles", async (req, reply) => {
    const { tag, date } = req.query;
    const filter = {};

    if (tag) filter.tags = tag;
    if (date) filter.publishedAt = { $gte: new Date(date) };

    const result = await collection().find(filter).toArray();
    return reply.send(result);
  });

  // GET single article by ID
  fastify.get("/articles/:id", async (req, reply) => {
    const { id } = req.params;
    const article = await collection().findOne({ _id: new fastify.mongo.ObjectId(id) });

    if (!article) return reply.code(404).send({ error: "Article not found" });

    return article;
  });

  // CREATE new article
  fastify.post("/articles", async (req, reply) => {
    const newArticle = {
      title: req.body.title,
      content: req.body.content,
      tags: req.body.tags || [],
      publishedAt: new Date()
    };

    const result = await collection().insertOne(newArticle);
    return reply.code(201).send(result);
  });

  // UPDATE article by ID
  fastify.put("/articles/:id", async (req, reply) => {
    const { id } = req.params;
    const update = { $set: req.body };

    const result = await collection().updateOne(
      { _id: new fastify.mongo.ObjectId(id) },
      update
    );

    if (result.matchedCount === 0)
      return reply.code(404).send({ error: "Article not found" });

    return reply.send({ message: "Article updated" });
  });

  // DELETE article by ID
  fastify.delete("/articles/:id", async (req, reply) => {
    const { id } = req.params;

    const result = await collection().deleteOne({
      _id: new fastify.mongo.ObjectId(id)
    });

    if (result.deletedCount === 0)
      return reply.code(404).send({ error: "Article not found" });

    return reply.send({ message: "Article deleted" });
  });
}

module.exports = blogRoutes;
