import Fastify from "fastify";
import * as jwt from "jsonwebtoken";

const server = Fastify({ logger: true });

server.get("/", (req, reply) => {
  reply.send(jwt.sign({}, "fake private key"));
});

if (process.env.NODE_ENV === "production") {
  await server.listen({ port: 8080 }, (err) => {
    if (err) {
      server.log.error("An error occurred " + err);
      process.exit(1);
    }
  });
}

export const viteNodeApp = server;
