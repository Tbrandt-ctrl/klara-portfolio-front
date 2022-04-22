import { gql } from "@apollo/client";

const CASESTUDIES_HOME_QUERY = gql`
  query CaseStudies {
    caseStudies {
      data {
        id
        attributes {
          title
          short_description
          thumbnail {
            data {
              id
              attributes {
                url
                alternativeText
              }
            }
          }
        }
      }
    }
  }
`;

export default CASESTUDIES_HOME_QUERY;
