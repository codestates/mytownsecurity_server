import { prisma } from '../../../src/generated/prisma-client';

export default {
  Mutation: {
    writeReview: async (_, args) => {
      const { userId, addressId, text, rating } = args;
      await prisma.createReview({
        text,
        rating,
        postedBy: { connect: { id: userId } },
        postedAt: { connect: { id: addressId } },
      });
      return true;
    },
  },
};
