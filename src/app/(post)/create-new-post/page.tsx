import { createPost } from '@/lib/prisma-db';
import { redirect } from 'next/navigation';
//server action form submittion
const CreateNewPost =  () => {
  async function createPostServer(formData: FormData) {
    'use server';
    const title = formData.get('title') as string;
    const content = formData.get('content') as string;
    const authorId = formData.get('authorId') as string;

    if (!title || !content || !authorId) {
      throw new Error('Invalid form data');
    }

    await createPost(title, content, authorId);
    redirect('/posts');
  }

  return (
    <div className="container mx-auto p-4 mt-8">

      <form action={createPostServer}>
        <div className="flex flex-col space-y-4 mx-auto w-1/2 bg-white shadow-xl p-8 rounded-lg">
          <label className="flex flex-col">
            <span className="text-lg font-semibold">Title</span>
            <input
              type="text"
              name="title"
              placeholder="Your Post Title..."
              required
              className="border-2 border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-200 dark:bg-gray-200 dark:border-gray-200 dark:text-primary dark:focus:ring-indigo-400 transition-all"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-lg font-semibold">Content</span>
            <textarea
              name="content"
              placeholder="Your post content..."
              required
              className="border-2 border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-300 dark:border-gray-200 dark:text-primary dark:focus:ring-indigo-200 transition-all" 
              rows={10}
            />
          </label>
          <input type="hidden" name="authorId" value="1" />
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded"
          >
            Create Post
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateNewPost;
