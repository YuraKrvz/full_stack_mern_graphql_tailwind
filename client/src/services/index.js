import { gql } from '@apollo/client'

//mutations

const ADD_CLIENT = gql`
  mutation addClient($name: String!, $email: String!, $phone: String!) {
    addClient(name: $name, email: $email, phone: $phone) {
      id
      name
      email
      phone
    }
  }
`

const DELETE_CLIENT = gql`
  mutation deleteClient($id: ID!) {
    deleteClient(id: $id) {
      id
    }
  }
`

const ADD_PROJECT = gql`
  mutation addProject(
    $name: String!
    $description: String!
    $status: ProjectStatus
    $clientId: ID!
  ) {
    addProject(name: $name, description: $description, status: $status, clientId: $clientId) {
      id
      name
      description
      status
      client {
        id
        name
        email
        phone
      }
    }
  }
`

const DELETE_PROJECT = gql`
  mutation deleteProject($id: ID!) {
    deleteProject(id: $id) {
      id
    }
  }
`

//queries

const GET_CLIENTS = gql`
  query getClients {
    clients {
      id
      name
      email
      phone
    }
  }
`

const GET_CLIENT = gql`
  query getClient($id: ID!) {
    client(id: $id) {
      id
      name
      email
      phone
    }
  }
`

const GET_PROJECTS = gql`
  query getProjects {
    projects {
      id
      name
      description
      status
      client {
        id
        name
      }
    }
  }
`

const GET_PROJECT = gql`
  query getProject($id: ID!) {
    project(id: $id) {
      id
      name
      description
      status
      client {
        id
        name
        email
        phone
      }
    }
  }
`

export {
  ADD_CLIENT,
  GET_CLIENT,
  DELETE_CLIENT,
  GET_CLIENTS,
  ADD_PROJECT,
  GET_PROJECTS,
  GET_PROJECT,
  DELETE_PROJECT,
}
