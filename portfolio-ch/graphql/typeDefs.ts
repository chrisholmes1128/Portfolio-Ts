import { gql } from "apollo-server";
import { ObjectId } from "mongoose";
const typeDefs = gql`
  type Company {
    name: String!
    startDate: String!
    endDate: String!
    info: String
    updatedAt: String
  }
  input CompanyInput {
    name: String
    startDate: String
    endDate: String
    info: String
    updatedAt: String
  }
  type Query {
    getCompany(ID: ID!): Company!
    getCompanies(amount: Int): [Company]
  }

  type Mutation {
    createCompany(companyInput: CompanyInput): Company!
    deleteCompany(ID: ID!): Boolean #true if deleted false if no id match found
    updateCompany(ID: ID!, companyInput: CompanyInput): Boolean
  }
`;

export default typeDefs;
