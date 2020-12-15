import { prisma } from '../../../src/generated/prisma-client';

const fragment = `
fragment AddressWith on Address{
 rn
 review{
     text
     rating
 }
}
`;

export default {
  Query: {
    getReviews: async (_, args) => {
      const { addressId } = args;
      const address = await prisma.address({ id: addressId });
      const reviews = await prisma
        .addresses({ where: { rn: address.rn } })
        .$fragment(fragment);

      return reviews;
    },
  },
};
