import { prisma } from '../../../src/generated/prisma-client';
import * as bcrypt from 'bcryptjs';

export default {
  Mutation: {
    changePW: async (_, args) => {
      const { email, password } = args;
      const hashedPassword = await bcrypt.hash(password, 5);

      await prisma.updateUser({
        where: { email },
        data: { password: hashedPassword },
      });
      return true;
    },
  },
};
