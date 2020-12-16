import { prisma } from '../../../src/generated/prisma-client';

export default {
  Mutation: {
    editMyFavorite: async (_, args) => {
      const { favoriteId, aliasInput } = args;

      await prisma.updateFavorite({
        where: { id: favoriteId },
        data: { aliasInput },
      });
      return true;
    },
  },
};
