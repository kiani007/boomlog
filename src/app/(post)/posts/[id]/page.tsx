import { fetchPost } from '@/lib/prisma-db'

export default async function PostDetails({
  params,   
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params;
  const post = await fetchPost(Number(id));

  return (
    <div className="container mx-auto p-4 mt-8">
      <h1 className="text-2xl font-bold mb-4 text-primary">Post Details</h1>
      <div className="mb-4 space-y-4 border-b border-gray-200 pb-4 shadow-lg p-4 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-lg">
        <div className='flex flex-col justify-content-right'>
            <p className='text-lg text-gray-300 justify-end'>posted_at: {post?.updatedAt?.toLocaleString()}</p>
            <p className='text-lg text-gray-300 justify-end'>status: {post?.published ? 'published' : 'unpublished'}</p>
        </div>
        <h1 className='text-4xl font-bold text-white'>{post?.title}</h1>
        <p className='text-xl text-gray-300'>{post?.content}</p>
      </div>
    </div>
  )
}
