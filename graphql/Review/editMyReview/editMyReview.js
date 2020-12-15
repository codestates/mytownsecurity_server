import { prisma } from '../../../src/generated/prisma-client';

export default {
  Mutation: {
    editMyReview: async (_, args) => {
      const { reviewId, text, rating } = args;

      await prisma.updateReview({
        where: { id: reviewId },
        data: { text, rating },
      });
      return true;
    },
  },
};
