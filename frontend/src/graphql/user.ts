import { useQuery } from '@vue/apollo-composable'
import gql from 'graphql-tag'

export const GET_USER = gql`
    query getUser($id: Int!) {
        getUser(id: $id) {
            id
            name
            username
        }
    }
`

export const REGISTER = gql`
mutation Register($email: String!, $username: String!, $password: String!, $role: Int!, $name: String!, $lastname: String!, $school: String!, $class: String!) {
    register(email: $email, username: $username, password: $password, role: $role, name: $name, lastName: $lastname, school: $school, class: $class) {
      id
      email
      username
      createdAt
      updatedAt
      school
      name
      lastName
    }
 }
`

export const LOGIN = gql`
mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      refreshToken,
      accessToken,
      }
  }  
`

export const GET_ME = gql`
query me($accessToken: String!) {
    me(accessToken: $accessToken) {
        id
        username
        name
        lastName
        school
        email
        role
        createdAt
        updatedAt
        avatarUrl
        achievments {
            id
            title
            description
        }
    }
}`

export const POST_EDIT = gql`
mutation edit($accessToken: String!, $school: String, $name: String, $lastName: String) {
    edit(accessToken: $accessToken, name: $name, school: $school, lastName: $lastName) {
      id
      score
      username
      name
      email
      lastName
  
    }
  }
`