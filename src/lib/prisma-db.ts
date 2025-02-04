import { PrismaClient } from "@prisma/client";
import { UserRole  } from '@prisma/client';

export const prisma = new PrismaClient();

export enum EventType {
  VIEW = 'VIEW',
  LIKE = 'LIKE',
  COMMENT = 'COMMENT',
}

// Events 
export async function logEvent(type: EventType, postId: number, userId: string) {
  const event = await prisma.event.create({ data: { type, postId, userId } });
  return event;
}

export async function fetchAnalytics() {
  return prisma.event.groupBy({
    by: ['postId'],

    orderBy: { _count: { postId: 'desc' } },
    _count: { postId: true },
  });
}

// USERS
export async function createUser(id: string, name: string, email: string, role: UserRole = UserRole.USER) {
   const user = await prisma.user.create({ data: {id, name, email, role } });
   return user; 
}


//POSTS
export async function createPost(title: string, content: string, authorId: string) {
   return await prisma.post.create({ data: { title, content, authorId, published: true  } });
    
  }
  
  export async function fetchPosts(page: number = 1, limit: number = 10) {
    const skip = (page - 1) * limit;
    const posts = await prisma.post.findMany({
      take: limit,
      skip,
      include: { author: true, events: true },
    });
  
    const totalPosts = await prisma.post.count();
    return { posts, totalPosts };
  }

  export async function fetchPost(id: number) {
    return prisma.post.findUnique({ where: { id } });
  }

  export async function getUserByID(id: string) {
    return prisma.user.findUnique({ where: { id } });
  }