'use client';
import { FormStates,createPostServer } from '@/actions/posts';
import { Submit } from '@/components/submit';
import { useActionState } from 'react';

const CreateNewPost =  () => {

  const initialState: FormStates = {
    errors: {},
  }
  
  const [state, formAction] = useActionState(createPostServer, initialState);
  return (
    <div className="container mx-auto p-4 mt-8">

      <form action={formAction}>
        <div className="flex flex-col space-y-4 mx-auto w-1/2 bg-white shadow-xl p-8 rounded-lg">
          <div>
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
            {state.errors.title && <p className="text-red-500">{state.errors.title}</p>}
          </div> 
          <div>       
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
            {state.errors.content && <p className="text-red-500">{state.errors.content}</p>}
          </div>
          <div>
          <input type="hidden" name="authorId" value="1" />
            <Submit />
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreateNewPost;
