'use client'

import { SignInButton, SignUpButton } from '@clerk/nextjs'
import { motion } from 'framer-motion'

const BannerSection = () => {
  return (
    <section className="flex flex-col justify-center items-center py-20 bg-gradient-to-r from-purple-500 to-indigo-500 text-white">
    <motion.div 
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="text-center"
    >
      <h1 className="text-5xl font-bold mb-4">Welcome to BoomLog</h1>
      <p className="text-lg mb-8">
        Your go-to platform for blogging and sharing your stories.
      </p>
      <div className="flex space-x-4">
        <div  
          className="bg-white text-indigo-500 px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-gray-100 transition-colors"
        >
          <SignInButton />
        </div>
        <div
          className="bg-white text-indigo-500 px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-gray-100 transition-colors"
        >
          <SignUpButton />
        </div>
      </div>
    </motion.div> 
  </section>
  )
}

export default BannerSection