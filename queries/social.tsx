import { gql } from "@apollo/client";
import { CASESTUDY_IMAGE_FRAGMENTS } from "./fragments";

const SOCIAL_QUERY = gql`
  ${CASESTUDY_IMAGE_FRAGMENTS}
  query Social {
    social {
      data {
        id
        attributes {
          SocialElement {
            id
            name
            link
            icon {
              ...imageField
            }
          }
        }
      }
    }
  }
`;
export default SOCIAL_QUERY;
