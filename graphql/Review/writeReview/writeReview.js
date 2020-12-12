import { prisma } from '../../../src/generated/prisma-client';

export default {
  Mutation: {
    writeReview: async (_, args) => {
      const { text, grade } = args;

      await prisma.createReview({ text, grade });
      return ture;
    },
  },
};
