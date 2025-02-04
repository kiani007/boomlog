import { fetchAnalytics } from "@/lib/prisma-db";

export default async function Analytics() {
  const data = await fetchAnalytics();

  return (
    <div className="container mx-auto p-8 mt-8 ">
      <h1 className="text-2xl font-bold mb-4">Analytics</h1>
      <ul className="list-disc pl-8 space-y-2">
        {data.map(({ postId, _count }) => (
          <li key={postId}>
            Post {postId} has {_count.postId} views
          </li>
        ))}
      </ul>
    </div>
  );
}
