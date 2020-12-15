import { prisma } from '../../../src/generated/prisma-client';

export default {
  Mutation: {
    deleteMyReview: async (_, args) => {
      const { reviewId } = args;

      await prisma.deleteReview({ id: reviewId });
      return true;
    },
  },
};
