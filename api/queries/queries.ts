import { gql } from '@apollo/client';

export const GetOpinionCollection = gql`
  query {
    opinionCollection {
      items {
        id
        content
        author {
          id
          name
          rol
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
