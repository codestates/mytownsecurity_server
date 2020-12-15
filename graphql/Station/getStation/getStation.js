import { prisma } from '../../../src/generated/prisma-client';

export default {
  Query: {
    getStation: async () => {
      const station = await prisma.stations();
      return station;
    },
  },
};
