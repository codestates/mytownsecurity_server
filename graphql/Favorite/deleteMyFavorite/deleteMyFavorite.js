import { prisma } from '../../../src/generated/prisma-client';

export default {
  Mutation: {
    deleteMyFavorite: async (_, args) => {
      const { id } = args;

      await prisma.deleteFavorite({
        where: { id },
      });
      return true;
    },
  },
};
