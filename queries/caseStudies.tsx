import { gql } from "@apollo/client";
import { CASESTUDY_FRAGMENTS } from "./fragments";

const CASESTUDY_FILTER_QUERY = gql`
  ${CASESTUDY_FRAGMENTS}
  query CaseStudies($slug: String, $locale: I18NLocaleCode) {
    caseStudies(locale: $locale, filters: { slug: { eq: $slug } }) {
      data {
        id
        attributes {
          title
          short_description
          thumbnail {
            ...imageField
          }

          content {
            ... on ComponentImageSingleMedia {
              id
              __typename
              media {
                ...imageField
              }
            }

            ... on ComponentTextParagrah {
              id
              title
              content
            }
            ... on ComponentCardsPostCards {
              id
              PostCard {
                id
                title
                description
                icon {
                  ...imageField
                }
              }
            }
            ... on ComponentImageCarousel {
              id
              carousel_images {
                ...imageFields
              }
            }
          }
          AttributeCards {
            id
            title
            value
          }
        }
      }
    }
  }
`;

export default CASESTUDY_FILTER_QUERY;
