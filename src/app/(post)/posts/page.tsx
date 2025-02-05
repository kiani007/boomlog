import { PostCard } from "@/components/PostCard";
import { fetchPosts } from "@/lib/prisma-db";
import { NewPostBtn } from "@/components/ui/newPostBtn";
import Link from "next/link";
import { logEvent, EventType } from "@/lib/prisma-db";


const Posts = async ({ searchParams }: { searchParams?: Promise<{ page?: string }> }) => {
  const page = Number((await searchParams)?.page) || 1;
  const limit = 10;

  const [{ posts, totalPosts }, handleEventLog] = await Promise.all([
    fetchPosts(page, limit),
    (async (id: number) => {
      'use server';
      await logEvent(EventType.VIEW, id, '1');
    })
  ]);

  const totalPages = Math.ceil(totalPosts / limit);

  return (
    <div className="container mx-auto p-4 mt-8">
      <h1 className="text-2xl font-bold mb-4">Posts</h1>
      <div className="flex justify-end mb-4">
        <NewPostBtn />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} handleEventLog={handleEventLog} />
        ))}
      </div>

      <div className="flex justify-center mt-6 gap-4">
        {page > 1 && (
          <Link href={`?page=${page - 1}`} className="px-4 py-2 bg-gray-300 rounded">
            Previous
          </Link>
        )}
        <span className="px-4 py-2 bg-blue-500 text-white rounded">
          Page {page} of {totalPages}
        </span>
        {page < totalPages && (
          <Link href={`?page=${page + 1}`} className="px-4 py-2 bg-gray-300 rounded">
            Next
          </Link>
        )}
      </div>
    </div>
  );
};

export default Posts;