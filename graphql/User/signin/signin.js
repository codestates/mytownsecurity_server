import { prisma } from '../../../src/generated/prisma-client';
import * as bcrypt from 'bcryptjs';
import * as jwt from 'jsonwebtoken';

export default {
  Mutation: {
    signin: async (_, args) => {
      const { email, password } = args;
      const user = await prisma.user({ email });
      if (!user) {
        throw Error('Does not exist Email');
      }
      const passwordMatch = await bcrypt.compare(password, user.password);
      if (!passwordMatch) {
        throw new Error('Please check your Password');
      }
      const token = jwt.sign({ id: user.id }, process.env.SECRET);
      return token;
    },
  },
};
