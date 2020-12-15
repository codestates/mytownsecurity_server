import { prisma } from '../../../src/generated/prisma-client';
import * as bcrypt from 'bcryptjs';

export default {
  Mutation: {
    editPassword: async (_, args) => {
      const { userId, prevPassword, nextPassword } = args;
      const user = await prisma.user({ id: userId });
      const passwordMatch = await bcrypt.compare(prevPassword, user.password);
      if (!passwordMatch) {
        throw Error('Please Check Previous Password');
      }
      const hashedPassword = await bcrypt.hash(nextPassword, 5);

      await prisma.updateUser({
        where: { id: userId },
        data: { password: hashedPassword },
      });
      return true;
    },
  },
};
