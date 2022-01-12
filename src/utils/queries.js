import { gql } from '@apollo/client';

export const QUERY_ME = gql`
  {
    me {
      _id
      email
      firstName
      lastName
      savedStories {
        _id
        source
        image
        description
        title
        link
        publishDate
      }
    }
  }
`;