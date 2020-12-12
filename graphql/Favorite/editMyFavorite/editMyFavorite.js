import { prisma } from '../../../src/generated/prisma-client';

export default {
  Mutation: {
    editMyFavorite: async (_, args) => {
      const { id, placeAlias } = args;

      await prisma.updateFavorite({
        where: { id },
        data: { placeAlias },
      });
      return true;
    },
  },
};
