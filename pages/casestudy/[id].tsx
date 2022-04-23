import { GetStaticProps, GetStaticPaths } from "next";

import client from "apollo-client";

import CASESTUDIES_QUERY from "@/queries/caseStudies";

const CaseStudy = () => {
  return <main></main>;
};

export default CaseStudy;

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = [
    ...data.map((product) => ({ params: { id: String(product.id) } })),
  ];

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const product = params ? data.find((el) => el.id === params.id) : {};

  return { props: { product } };
};
