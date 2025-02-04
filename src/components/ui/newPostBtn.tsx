'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaPlus } from 'react-icons/fa';

export const NewPostBtn: React.FC = () => {
  return (
    <Link href="/create-new-post">
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.2 }}
        className="flex items-center space-x-2 bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-6 py-3 rounded-full font-semibold shadow-md hover:shadow-lg hover:from-indigo-600 hover:to-purple-600 transition-colors"
      >
        <FaPlus className="text-lg" />
        <span>Create Post</span>
      </motion.button>
    </Link>
  );
};
