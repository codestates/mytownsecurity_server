import { prisma } from '../../../src/generated/prisma-client';
import * as bcrypt from 'bcryptjs';

export default {
  Mutation: {
    editPassword: async (_, args) => {
      const { userId, password } = args;
      const hashedPassword = await bcrypt.hash(password, 5);

      await prisma.updateUser({
        where: { id: userId },
        data: { password: hashedPassword },
      });
      return true;
    },
  },
};
