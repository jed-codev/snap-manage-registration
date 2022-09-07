/* eslint-disable @typescript-eslint/no-explicit-any */
import Post from "./provider";
import * as postValidators from "../../utils/validators/post";
import { validateArgs } from "../../utils/helpers";
import { MutationPostCreateArgs } from "../../utils/resolver-types";

export default {
  postCreate: (_: unknown, args: MutationPostCreateArgs) => {
    try {
      validateArgs(postValidators.postCreate, args);
      const post = new Post().postCreate(args.data);
      return post;
    } catch (error: any) {
      throw new Error(error.message);
    }
  },
};
