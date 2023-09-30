import gql from "graphql-tag";

export const GET_ROOM = gql`
  query getRoom($id: Int!, $accessToken: String!) {
    getRoom(roomId: $id, accessToken: $accessToken) {
      id
      owner
      name
      users {
        id
        username
        lastName
        score
      }
      tasks {
        id
        content
        title
      }
    }
  }
`;
