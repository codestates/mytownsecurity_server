import { createMergedTypeResolver } from 'graphql-tools';
import { prisma } from '../../../src/generated/prisma-client';

export default {
  Mutation: {
    createAddress: async (_, args) => {
      const { detail, X, Y, gu } = args;
      const address = await prisma.createAddress({
        detail,
        X,
        Y,
        gu,
      });
      return address;
    },
  },
};
