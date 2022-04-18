import { gql } from "@apollo/client";

const POSTS_QUERY = gql`
  query Posts {
    posts {
      data {
        id
        attributes {
          title
          description
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

export default POSTS_QUERY;
