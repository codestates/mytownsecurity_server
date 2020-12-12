import { prisma } from '../../../src/generated/prisma-client';

export default {
  Mutation: {
    editMyReview: async (_, args) => {
      const { id, text, grade } = args;

      await prisma.updateReview({
        where: { id },
        data: { text, grade },
      });
      return true;
    },
  },
};
