import { gql } from '@apollo/client';

export const QUERY_ME = gql`
  {
    me {
      _id
      email
      firstName
      lastName
      savedStories {
        storyId
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

export const QUERY_USERS = gql`
  {
    users {
      _id
      email
      firstName
      lastName
      savedStories {
        storyId
        source
        image
        description
        title
        link
        publishDate
      }
    }
  }`