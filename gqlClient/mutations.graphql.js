import { gql } from '@apollo/client';

export const CREATE_LINK_MUTATION  = gql`
   mutation CreateLinkMutation(
    $description: String!
    $url: String!
  ) {
    post( url: $url, description: $description) {
      id
      url
      description
    }
  }
`;

export const VOTE_MUTATION = gql`
  mutation VoteMutation($linkId: ID!) {
    vote(linkId: $linkId) {
      id
      link {
        id
        votes{
          id
          user {
            id
          }
        }
      }
      user {
        id
      }
    }
  }
`;

export const SIGNUP_MUTATION = gql`
  mutation SignupMutation(
    $email: String!
    $password: String!
    $name: String!
  ) {
    signup(
      email: $email
      password: $password
      name: $name
    ) {
      name
    }
  }
`;


export const LOGIN_MUTATION = gql`
  mutation LoginMutation(
    $email: String!
    $password: String!
  ) {
    login(email: $email, password: $password) {
      name
    }
  }
`;
export const SIGNOUT_MUTATION = gql`
  mutation {
    signOut
  }
`;