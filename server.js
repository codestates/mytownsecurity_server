import { GraphQLServer } from "graphql-yoga";
import schema from "./schema";

const server = new GraphQLServer({ schema });

server.start({ port: 4000 }, () => console.log("server running"));
