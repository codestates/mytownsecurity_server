import { prisma } from '../../../src/generated/prisma-client';
import * as bcrypt from 'bcryptjs';
import * as jwt from 'jsonwebtoken';

export default {
  Mutation: {
    signup: async (_, args) => {
      const { email, password } = args;
      const exists = await prisma.$exists.user({ email });
      if (exists) {
        throw Error('Already exists Email');
      }
      const hashedPassword = await bcrypt.hash(password, 5);
      const user = await prisma.createUser({ email, password: hashedPassword });
      const token = jwt.sign({ id: user.id }, process.env.SECRET);
      return { user, token };
    },
  },
};
