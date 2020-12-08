import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import schema from './schema';
import './env';
import fs from 'fs';
import https from 'https';
import http from 'http';

const configurations = {
  production: { ssl: true, port: 443, hostname: 'mytownsecurity.com' },
  development: { ssl: false, port: 4000, hostname: 'localhost' },
};

const environment = process.env.NODE_ENV || 'production';
const config = configurations[environment];

const apollo = new ApolloServer({ schema });

const app = express();
apollo.applyMiddleware({ app });

var server;
if (config.ssl) {
  server = https.createServer(
    {
      key: fs.readFileSync(`./ssl/${environment}/server.key`),
      cert: fs.readFileSync(`./ssl/${environment}/server.crt`),
    },
    app
  );
} else {
  server = http.createServer(app);
}

server.listen({ port: config.port }, () =>
  console.log(
    '🚀 Server ready at',
    `http${config.ssl ? 's' : ''}://${config.hostname}:${config.port}${
      apollo.graphqlPath
    }`
  )
);
