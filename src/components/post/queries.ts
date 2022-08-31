/* eslint-disable @typescript-eslint/no-explicit-any */
import Post from "./provider";

export default {
  post: async (_, { id }) => {
    try {
      const post = await new Post().post(id);
      return post;
    } catch (error: any) {
      throw new Error(error.message);
    }
  },
  posts: async (_, args: any) => {
    try {
      const post = await new Post().posts(args.options);
      return post;
    } catch (error: any) {
      throw new Error(error.message);
    }
  },
};
