// import express from 'express';
// import { ApolloServer } from 'apollo-server-express';
import { GraphQLServer } from 'graphql-yoga';
import schema from './schema';
import './env';

const server = new GraphQLServer({ schema });
// const server = new ApolloServer({ schema });

// const app = express();
// server.applyMiddleware({ app });

server.start({ port: 4000 }, () => console.log('server running'));

// app.listen({ port: 4000 }, () =>
//   console.log('Now browse to http://localhost:4000' + server.graphqlPath)
// );
