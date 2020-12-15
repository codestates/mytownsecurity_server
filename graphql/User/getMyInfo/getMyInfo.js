// import { prisma } from '../../../src/generated/prisma-client';

// export default {
//   Query: {
//     getMyInfo: async (_, args) => {
//       const { userId } = args;
//       const user = await prisma.user({ id: userId });
//       const review = await prisma.user({ id: userId }).review();
//       const favorite = await prisma.user({ id: userId }).favorite();
//       if (!user) {
//         throw Error('Please Login First');
//       }
//       return { user, review, favorite };
//     },
//   },
// };

////스키마
// type Query {
//   getMyInfo(userId: ID!): MyInfo
// }

// type MyInfo {
//   user: User
//   review: [Review!]!
//   favorite: [Favorite!]!
// }
