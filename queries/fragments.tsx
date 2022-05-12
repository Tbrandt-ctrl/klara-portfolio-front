import { gql } from "@apollo/client";

export const CASESTUDY_FRAGMENTS = gql`
  fragment imageField on UploadFileEntityResponse {
    data {
      id
      attributes {
        url
        alternativeText
        height
        width
      }
    }
  }

  fragment imageFields on UploadFileRelationResponseCollection {
    data {
      id
      attributes {
        url
        alternativeText
        height
        width
      }
    }
  }
`;

export const CASESTUDY_IMAGE_FRAGMENTS = gql`
  fragment imageField on UploadFileEntityResponse {
    data {
      id
      attributes {
        url
        alternativeText
        height
        width
      }
    }
  }
`;
