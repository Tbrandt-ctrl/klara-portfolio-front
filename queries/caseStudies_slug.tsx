import { gql } from "@apollo/client";

const CASESTUDIES_SLUG_QUERY = gql`
  query CaseStudies {
    caseStudies(locale: "all") {
      data {
        attributes {
          slug
          locale
        }
      }
    }
  }
`;

export default CASESTUDIES_SLUG_QUERY;
