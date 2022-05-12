import { gql } from "@apollo/client";

import { CASESTUDY_IMAGE_FRAGMENTS } from "./fragments";

const CASESTUDIES_HOME_QUERY = gql`
  ${CASESTUDY_IMAGE_FRAGMENTS}
  query CaseStudies($locale: I18NLocaleCode) {
    caseStudies(locale: $locale) {
      data {
        id
        attributes {
          title
          short_description
          slug
          thumbnail {
            ...imageField
          }
        }
      }
    }
  }
`;

export default CASESTUDIES_HOME_QUERY;
