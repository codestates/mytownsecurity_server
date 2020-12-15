import { prisma } from '../../../src/generated/prisma-client';

export default {
  Mutation: {
    createAddress: async (_, args) => {
      const { detail, X, Y, gu, rn } = args;
      const address = await prisma.createAddress({
        detail,
        X,
        Y,
        gu,
        rn,
      });
      return address;
    },
  },
};
