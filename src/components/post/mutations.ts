import Post from "./provider";
import * as postValidators from "../../utils/validators/post";
import { validateArgs } from "../../utils/helpers";

export default {
  postCreate: async (_, args: any) => {
    try {
      validateArgs(postValidators.postCreate, args.data);
      const post = await new Post().postCreate(args.data);
      return post;
    } catch (error: any) {
      throw new Error(error.message);
    }
  },
};
