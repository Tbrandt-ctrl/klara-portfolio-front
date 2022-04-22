import { gql } from "@apollo/client";

const POSTS_HOME_QUERY = gql`
  query Posts {
    posts {
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

export default POSTS_HOME_QUERY;
