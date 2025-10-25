const { gql } = require('apollo-server');

const typeDefs = gql`
  type Employee {
    id: ID!
    name: String!
    position: String!
    department: Department!
    salary: Float!
  }

  type Department {
    id: ID!
    name: String!
    floor: Int!
  }

  type Query {
    getAllEmployees: [Employee!]!
    getEmployeeDetails(id: ID!): Employee
    getEmployeesByDepartment(department: ID!): [Employee!]!
    getAllDepartments: [Department!]!
  }

  type Mutation {
    addEmployee(name: String!, position: String!, department: ID!, salary: Float!): Employee!
  }
`;

module.exports = typeDefs;