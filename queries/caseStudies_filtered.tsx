import { gql } from "@apollo/client";

import { CASESTUDY_IMAGE_FRAGMENTS } from "./fragments";

const CASESTUDIES_FILTERED_QUERY = gql`
  ${CASESTUDY_IMAGE_FRAGMENTS}
  query CaseStudies($locale: I18NLocaleCode, $limit: Int) {
    caseStudies(locale: $locale, pagination: { limit: $limit }) {
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

export default CASESTUDIES_FILTERED_QUERY;
