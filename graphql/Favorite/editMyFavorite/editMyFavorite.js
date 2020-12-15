import { prisma } from '../../../src/generated/prisma-client';

export default {
  Mutation: {
    editMyFavorite: async (_, args) => {
      const { favoriteId, placeAlias } = args;

      await prisma.updateFavorite({
        where: { id: favoriteId },
        data: { placeAlias },
      });
      return true;
    },
  },
};
