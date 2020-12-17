import { prisma } from '../../../src/generated/prisma-client';

export default {
  Mutation: {
    addReview: async (_, args) => {
      const { userId, addressId, text, rating } = args;
      const review = await prisma.createReview({
        text,
        rating,
        postedBy: { connect: { id: userId } },
        postedAt: { connect: { id: addressId } },
      });
      return review;
    },
  },
};
