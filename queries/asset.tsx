import { gql } from "@apollo/client";

const ASSET_QUERY = gql`
  query Asset($name: String!) {
    asset {
      data {
        id
        attributes {
          File(filters: { name: { eq: $name } }) {
            id
            name
            file {
              data {
                id
                attributes {
                  name
                  url
                  alternativeText
                }
              }
            }
          }
        }
      }
    }
  }
`;

export default ASSET_QUERY;
