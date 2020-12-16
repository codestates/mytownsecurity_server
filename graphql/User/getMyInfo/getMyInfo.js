import { prisma } from '../../../src/generated/prisma-client';

const fragment = `
fragment UserWith on User {
review{
  id
  text
  rating
  createdAt
  updatedAt
  postedAt{
    detail
    X
    Y
  }
}
favorite{
  id
  aliasInput
  createdAt
  updatedAt
  postedAt{
    detail
    X
    Y
  }
}
}`;

export default {
  Query: {
    getMyInfo: async (_, args) => {
      const { userId } = args;
      const user = await prisma.user({ id: userId }).$fragment(fragment);
      if (!user) {
        throw Error('Please Login First');
      }
      return user;
    },
  },
};
