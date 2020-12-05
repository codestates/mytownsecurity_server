import { GraphQLServer } from 'graphql-yoga';
import schema from './schema';
import './env';

const server = new GraphQLServer({ schema });

server.start({ port: 4000 }, () => console.log('server running'));
