import { gql } from "@apollo/client";

export const CREATE_COMPANY = gql`
  mutation CreateCompany($companyInput: CompanyInput) {
    createCompany(companyInput: $companyInput) {
      name
      endDate
      startDate
      updatedAt
      info
    }
  }
`;

export const DELETE_COMPANY = gql`
  mutation DeleteCompany($id: ID!) {
    deleteCompany(ID: $id)
  }
`;

export const UPDATE_COMPANY = gql`
  mutation UpdateCompany($id: ID!, $companyInput: CompanyInput) {
    updateCompany(ID: $id, companyInput: $companyInput)
  }
`;
