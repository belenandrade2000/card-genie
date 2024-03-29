import { gql } from '@apollo/client';

// what queries do we need?
// copy paste only here

export const QUERY_PROFILES = gql`
  query allProfiles {
    profiles {
      _id
      name
      skills
    }
  }
`;

export const QUERY_SINGLE_PROFILE = gql`
  query singleProfile($profileId: ID!) {
    profile(profileId: $profileId) {
      _id
      name
      skills
    }
  }
`;

export const QUERY_ME = gql`
query Query {
  me {
    username
    savedCC {
      ccAnnualFee
      ccBenefits
      ccImage
      ccLink
      ccName
      ccType
      id
    }
  }
}
`;
export const QUERY_USER = gql`
  query me {
    me {
      _id
      name
      skills
    }
  }
`;
export const QUERY_CC = gql` 
query Query {
  creditCards {
    id
    ccAnnualFee
    ccBenefits
    ccImage
    ccLink
    ccName
    ccType
  }
}`
 