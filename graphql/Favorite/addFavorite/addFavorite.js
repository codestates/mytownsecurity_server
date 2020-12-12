import { prisma } from '../../../src/generated/prisma-client';

export default {
  Mutation: {
    addFavorite: async (_, args) => {
      const { placeAlias } = args;

      await prisma.createFavorite({ placeAlias });
      return ture;
    },
  },
};
