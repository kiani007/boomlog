import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  'use server';

  // Create users
  const user1 = await prisma.user.create({
    data: {
      name: 'Alice',
      email: 'alice@example.com',
      role: 'USER',
    },
  });

  const user2 = await prisma.user.create({
    data: {
      name: 'Bob',
      email: 'bob@example.com',
      role: 'ADMIN',
    },
  });

  // Create posts
  const post1 = await prisma.post.create({
    data: {
      title: 'First Post',
      content: 'This is the content of the first post.',
      published: true,
      authorId: user1.id,
    },
  });

  const post2 = await prisma.post.create({
    data: {
      title: 'Second Post',
      content: 'This is the content of the second post.',
      published: false,
      authorId: user2.id,
    },
  });

  // Create events
  await prisma.event.create({
    data: {
      type: 'VIEW',
      postId: post1.id,
      userId: user1.id,
    },
  });

  await prisma.event.create({
    data: {
      type: 'LIKE',
      postId: post2.id,
      userId: user2.id,
    },
  });

  await prisma.event.create({
    data: {
      type: 'COMMENT',
      postId: post1.id,
      userId: user2.id,
    },
  });

  console.log('Seed data created successfully');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });