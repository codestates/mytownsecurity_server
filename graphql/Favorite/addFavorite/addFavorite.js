import { prisma } from '../../../src/generated/prisma-client';

export default {
  Mutation: {
    addFavorite: async (_, args) => {
      const { userId, addressId, aliasInput } = args;

      await prisma.createFavorite({
        aliasInput,
        postedBy: { connect: { id: userId } },
        postedAt: { connect: { id: addressId } },
      });
      return true;
    },
  },
};
