/* eslint-disable no-async-promise-executor */
import { PrismaClient } from "@prisma/client";
import { Prisma } from "@prisma/client";
const prisma = new PrismaClient();

export interface IListOptions {
  order?: ESort;
  offset?: number;
  limit?: number;
}

enum ESort {
  asc,
  desc,
}

export default class Post {
  public async postCreate(data: Prisma.PostCreateInput) {
    const newPost = await prisma.post.create({ data });
    return newPost;
  }

  public async post(id: string) {
    const post = await prisma.post.findUnique({
      where: {
        id,
      },
    });
    return post;
  }

  public async posts(options: IListOptions) {
    const posts = await prisma.post.findMany({
      take: options.limit ? options.limit : 10,
      skip: options.offset ? options.offset : 0,
    });
    return posts;
  }
}
