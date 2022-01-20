import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        email
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($firstName: String!, $lastName: String!, $email: String!, $password: String!) {
    addUser(firstName: $firstName, lastName: $lastName, email: $email, password: $password) {
      token
      user {
        _id
        email
      }
    }
  }
`;

export const SAVE_STORY = gql`
  mutation saveStory($storyData: StoryInput!) {
    saveStory(storyData: $storyData) {
      _id
      email
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

export const REMOVE_STORY = gql`
  mutation removeStory($storyId: ID!) {
    removeStory(storyId: $storyId) {
      email
      savedStories {
        storyId
        title
      }
    }
  }
`;