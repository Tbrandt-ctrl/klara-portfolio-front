import "@/styles/globals.scss";
import type { AppProps } from "next/app";

import { ApolloProvider } from "@apollo/client";
import client from "apollo-client";

import Layout from "@/utils/Layout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ApolloProvider>
  );
}

export default MyApp;
