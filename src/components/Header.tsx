'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { SignInButton, SignOutButton, UserButton, useUser} from '@clerk/nextjs'

export default function Header() {
  const { user } = useUser();
  return (
    <motion.header 
      initial={{ opacity: 0, y: -20 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.5 }}
      className="fixed w-full bg-gradient-to-r from-purple-600 to-indigo-600 shadow-lg z-50"
    >
      <nav className="container mx-auto flex justify-between items-center py-4 px-6">
        
        {!user ? (
          <>
            <Link href="/" legacyBehavior>
              <motion.a 
                whileHover={{ scale: 1.05 }}
                className="text-3xl font-bold text-white"
              >
                BoomLog
              </motion.a>
            </Link>
            <div className="flex items-center space-x-4">
              <motion.a 
                whileHover={{ scale: 1.05 }}
                className="text-lg font-medium text-white hover:text-gray-200 transition-colors"
              >
                <SignInButton />
              </motion.a>
            </div>
          </>

        ):
        (
          <Link href="/posts" legacyBehavior>
            <motion.a 
              whileHover={{ scale: 1.05 }}
              className="text-3xl font-bold text-white"
            >
              BoomLog
            </motion.a>
          </Link>
        )

        }
        
        {user && (
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
          <Link href="/profile" legacyBehavior>
            <motion.a 
              whileHover={{ scale: 1.05 }}
              className="text-lg font-medium text-white hover:text-gray-200 transition-colors"
            >
              Profile
            </motion.a>
          </Link>
          {/* <UserButton afterSignOutUrl="/" /> */}
          <motion.a 
              whileHover={{ scale: 1.05 }}
              className="text-lg font-medium text-white hover:text-gray-200 transition-colors"
            >
              <SignOutButton />
            </motion.a>

            
        </div>
        )}
      </nav>
    </motion.header>
  );
}

