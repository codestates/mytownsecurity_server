import { prisma } from '../../../src/generated/prisma-client';

export default {
  Query: {
    getSearchedLocation: async (_, args) => {
      const { addressId } = args;
      const address = await prisma.address({ id: addressId });
      const crime = await prisma.crime({ gu: address.gu });
      if (!address) {
        throw Error('Search first on the Main page');
      }
      return { address, crime };
    },
  },
};
