// ./apollo-client.js

import { ApolloClient, InMemoryCache } from "@apollo/client";
const backendurl = process.env.hostname || "localhost:3001";
const client = new ApolloClient({
    uri: `https:///${backendurl}/graphql`,
    cache: new InMemoryCache(),
});

export default client;