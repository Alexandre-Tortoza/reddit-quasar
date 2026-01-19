import Fastify from "fastify";
import cors from "@fastify/cors";

const fastify = Fastify({
  logger: true,
});

await fastify.register(cors, {
  origin: true, // Allow all origins in development
});

fastify.get("/", async function (request, reply) {
  const { sub } = request.query;
  const subreddit = sub || "_erro_";

  const response = await fetch(`https://www.reddit.com/r/${subreddit}.json`);

  const data = await response.json();

  reply.send(data);
});

fastify.listen({ port: 3000 }, function (err, address) {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
});
