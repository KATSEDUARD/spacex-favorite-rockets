import { makeVar, InMemoryCache } from '@apollo/client';

export const favoritesVar = makeVar<any>([]);

export const cache = new InMemoryCache({
    typePolicies: {
      Rocket: {
        fields: {
          isFavorite: {
            read(_, { readField }) {
              const rocketId = readField('id');
              return favoritesVar().includes(rocketId);
            }
          }
        }
      }
    }
});