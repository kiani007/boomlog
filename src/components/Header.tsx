'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Header() {
  return (
    <motion.header 
      initial={{ opacity: 0, y: -20 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.5 }}
      className="fixed w-full bg-gradient-to-r from-purple-600 to-indigo-600 shadow-lg z-50"
    >
      <nav className="container mx-auto flex justify-between items-center py-4 px-6">
        <Link href="/" legacyBehavior>
          <motion.a 
            whileHover={{ scale: 1.05 }}
            className="text-3xl font-bold text-white"
          >
            BoomLog
          </motion.a>
        </Link>
        <div className="flex space-x-8">
          <Link href="/posts?page=1" legacyBehavior>
            <motion.a 
              whileHover={{ scale: 1.05 }}
              className="text-lg font-medium text-white hover:text-gray-200 transition-colors"
            >
              Posts
            </motion.a>
          </Link>
          <Link href="/analytics" legacyBehavior>
            <motion.a 
              whileHover={{ scale: 1.05 }}
              className="text-lg font-medium text-white hover:text-gray-200 transition-colors"
            >
              Analytics
            </motion.a>
          </Link>
        </div>
      </nav>
    </motion.header>
  );
}

