'use client';
import { motion } from 'framer-motion';
import { FaUser, FaCheckCircle, FaRegCalendarAlt } from 'react-icons/fa';
import Link from 'next/link';
import { Event } from '@prisma/client';

interface Props  {
  post: {
    id: number;
    title: string;
    content: string;
    published: boolean;
    author: {
      name: string;
    }
    events: Event[];
    createdAt: Date;
    updatedAt: Date;
  };
  handleEventLog?: (id: number) => void;
}

export function PostCard({ post, handleEventLog }: Props) {
  if (!post) return null;

  const handleClick = () => {
    if (!handleEventLog) return;
    handleEventLog?.(post?.id);
  };

  console.log(post);

  return (
    <Link href={`/posts/${post?.id}`} onClick={handleClick}>
      <motion.div 
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
        className="bg-white border border-gray-200 p-6 rounded-lg shadow hover:shadow-lg transition duration-300"
      >
        <h2 className="text-2xl font-bold mb-3 text-gray-800">{post?.title}</h2>
        <p className="text-gray-700 mb-4 line-clamp-3">{post?.content}</p>
        <div className="flex justify-between items-center text-sm text-gray-500">
          <div className="flex items-center space-x-2">
            <FaUser className="text-indigo-500" />
            <span>By {(post?.author || {}).name || 'Unknown'}</span>
          </div>
          <div className="flex items-center space-x-2">
            <FaRegCalendarAlt className="text-indigo-500" />
            <span>{post?.createdAt?.toLocaleString() || '15 min ago'}</span>
          </div>
        </div>

        <div className="mt-4 flex justify-between items-center text-sm text-gray-500">
          <div className="flex items-center space-x-2">
            {post?.published ? (
              <>
                <FaCheckCircle className="text-green-500" />
                <span className="text-green-500">Published</span>
              </>
            ) : (
              <span className="text-red-500">Unpublished</span>
            )}
          </div>

          {/* Event Count */} 
          {post?.events?.length > 0 && (
            <div className="flex items-center space-x-2">
              <FaRegCalendarAlt className="text-indigo-500" />
              <span>{post?.events.length} Events</span>
            </div>
          )}
        </div>
      </motion.div>
    </Link>
  );
}

