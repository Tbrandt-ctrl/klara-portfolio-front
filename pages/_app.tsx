import "@/styles/globals.scss";
import type { AppProps } from "next/app";

import { ApolloProvider } from "@apollo/client";
import client from "apollo-client";

import { getAssetByName } from "lib/singleTypeQueries";

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

export async function getStaticProps({ locale }: { locale: string }) {
  const name = locale === "en" ? "CV-ENG" : "CV-FR";

  const assets = await getAssetByName(name);

  console.log(assets);

  console.log("HELLO WORLD");

  return {};
}
