const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID!
    email: String!
    firstName: String
    lastName: String
    storyCount: Int
    savedStories: [Story]
  }

  type Story {
    storyId: ID!
    source: String
    title: String!
    description: String
    link: String
    image: String
    publishDate: String
  }

  type Auth {
    token: ID!
    user: User
  }

  input StoryInput {
    storyId: String!
    source: String
    title: String!
    description: String!
    link: String
    image: String
    publishDate: String
  }

  type Query {
    me: User
    users: [User]
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(email: String!, password: String!, firstName: String!, lastName: String!): Auth
    saveStory(storyData: StoryInput!): User
    removeStory(storyId: ID!): User
  }
`;

module.exports = typeDefs;
