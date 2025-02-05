'use client'
import { motion } from 'framer-motion'  
import Link from 'next/link'

export default function FeaturedPost() {
  return (
    <section className="py-20 bg-white text-gray-800">
        <div className="max-w-6xl mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-3xl font-bold text-center mb-12"
          >
            Featured Posts
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((post) => (
              <motion.div 
                key={post}
                whileHover={{ scale: 1.05 }}
                className="bg-gray-100 p-6 rounded-lg shadow"
              >
                <h3 className="text-xl font-bold mb-2">Post Title {post}</h3>
                <p className="mb-4">
                  A brief description of the featured post. Learn more about the topic and dive in!
                </p>
                <Link 
                  href={`/posts/${post}`} 
                  className="text-indigo-500 font-semibold"
                >
                  Read More
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
  )
}