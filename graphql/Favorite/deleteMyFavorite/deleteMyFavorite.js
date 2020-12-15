import { prisma } from '../../../src/generated/prisma-client';

export default {
  Mutation: {
    deleteMyFavorite: async (_, args) => {
      const { favoriteId } = args;

      await prisma.deleteFavorite({ id: favoriteId });
      return true;
    },
  },
};
