import { gql } from "@apollo/client";

export const GET_COMPANIES = gql`
  query GetCompanies {
    getCompanies {
      id
      info
      name
      startDate
      endDate
      updatedAt
    }
  }
`;
