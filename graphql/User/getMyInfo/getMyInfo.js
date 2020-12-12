import { prisma } from '../../../src/generated/prisma-client';

export default {
  Query: {
    getMyInfo: async (_, args) => {
      const { email } = args;
      const user = await prisma.user({ email });
      if (!user) {
        throw Error('Please Login First');
      }
      return user;
    },
  },
};
