// ./apollo-client.js

import { ApolloClient, InMemoryCache } from "@apollo/client";
const hostname = process.env.hostname || "http://localhost:3001";
const client = new ApolloClient({
    uri: `https:///${hostname}/graphql`,
    cache: new InMemoryCache(),
});

export default client;