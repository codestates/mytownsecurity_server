import { prisma } from '../../../src/generated/prisma-client';

export default {
  Mutation: {
    deleteMyReview: async (_, args) => {
      const { id } = args;

      await prisma.deleteReview({
        where: { id },
      });
      return true;
    },
  },
};
