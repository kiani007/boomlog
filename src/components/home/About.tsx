'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function About (){
  return (
    <section className="py-20 bg-gray-800 text-white">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2 mb-8 md:mb-0"
        >
          <h2 className="text-3xl font-bold mb-4">About BoomLog</h2>
          <p className="text-lg">
            BoomLog is a vibrant community where bloggers share their stories, insights, and creativity.
            Join us to be part of an engaging platform that celebrates diverse voices and innovative ideas.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2"
        >
          <Image 
            src="/images/boomlog.png" 
            alt="About BoomLog" 
            className="rounded-lg shadow-lg"
            width={400}
            height={400}
          />
        </motion.div>
      </div>
  </section>

  )
}