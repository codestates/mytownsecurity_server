import { prisma } from '../../../src/generated/prisma-client';
import * as bcrypt from 'bcryptjs';
import * as jwt from 'jsonwebtoken';

const fragment = `
fragment UserWith on User {
id
email
password
review{
  id
  text
  rating
  postedAt{
    detail
    X
    Y
  }
}
favorite{
  id
  aliasInput
  postedAt{
    detail
    X
    Y
  }
}
}`;

export default {
  Mutation: {
    signin: async (_, args) => {
      const { email, password } = args;
      const user = await prisma.user({ email }).$fragment(fragment);
      // const review = await prisma.user({ email }).review();
      // const favorite = await prisma.user({ email }).favorite();
      if (!user) {
        throw Error('Does not exist Email');
      }
      const passwordMatch = await bcrypt.compare(password, user.password);
      if (!passwordMatch) {
        throw new Error('Please check your Password');
      }
      const token = jwt.sign({ id: user.id }, process.env.SECRET);
      return { token, user };
      // return { token, user, review, favorite };
    },
  },
};
