import { prisma } from '../../../src/generated/prisma-client';
import * as bcrypt from 'bcryptjs';

export default {
  Mutation: {
    signup: async (_, args) => {
      const { email, password } = args;
      const exists = await prisma.$exists.user({ OR: [{ email }] });
      if (exists) {
        throw Error('Already exists Email');
      }
      const hashedPassword = await bcrypt.hash(password, 5);
      await prisma.createUser({ email, password: hashedPassword });
      return true;
    },
  },
};
