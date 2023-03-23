import { gql } from '@apollo/client';

const GET_FLIGHTS = gql`
  query GetFlights {
    rockets {
      id
      name
      description
      isFavorite @client
    }
  }
`;

export const queries = {
    GET_FLIGHTS
};