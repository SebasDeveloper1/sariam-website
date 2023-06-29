import { gql } from '@apollo/client';

export const GetOpinionCollection = gql`
  query {
    opinionCollection {
      items {
        sys {
          id
        }
        content
        author {
          name
          role
          photo {
            title
            description
            size
            url
            width
            height
          }
        }
      }
    }
  }
`;
