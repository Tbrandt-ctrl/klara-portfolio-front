import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri:
    "https://klara-portfolio-back.herokuapp.com/graphql" ||
    "http://localhost:1337/graphql",
  cache: new InMemoryCache(),
});

export default client;

//`${process.env.STRAPI_URI}graphql`
