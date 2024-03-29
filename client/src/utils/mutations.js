import { gql } from '@apollo/client';

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
    }
  }
`;

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
    }
  }
`;

export const SAVE_CARD = gql`
mutation Mutation($creditCardId: ID) {
  addSavedCC(CreditCardId: $creditCardId) {
    email
    username
    savedCC {
      ccAnnualFee
      ccBenefits
      ccImage
      ccLink
      ccName
      ccType
    }
  }
}
`;

export const REMOVE_CARD = gql`
  mutation removeCard($cardId: ID!) {
    removeCard(cardId: $cardId) {
      _id
      username
      email
      savedCards {
        cardId
        image
        description
        title
        link
      }
    }
  }
`;
