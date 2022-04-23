import { gql } from "@apollo/client";

const CASESTUDIES_QUERY = gql`
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
          content {
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
          AttributeCards {
            ... on ComponentCardsAttributeCards {
              id
              AttributeCard {
                id
                title
                value
                icon {
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

          thumbnail {
            data {
              attributes {
                url
              }
            }
          }
        }
      }
    }
  }
`;

export default CASESTUDIES_QUERY;
