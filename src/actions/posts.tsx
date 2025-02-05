"use server";
import { createPost } from '@/lib/prisma-db';
import { redirect } from 'next/navigation';

export type Error = {
    title?: string;
    content?: string;
    authorId?: string;
  }
  export type FormStates = {
    errors: Error;
  }


  export async function createPostServer(prevState: FormStates, formData: FormData) {
    const title = formData.get('title') as string;
    const content = formData.get('content') as string;
    const authorId = formData.get('authorId') as string;
    const errors: Error = {};
    if(!title){
      errors.title = 'Title is required';
    }
    if(!content){
      errors.content = 'Content is required';
    }
    if(Object.keys(errors).length > 0){
      return {errors};
    }
    await createPost(title, content, authorId);
    redirect('/posts');
  }