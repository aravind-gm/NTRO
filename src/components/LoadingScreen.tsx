'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2500)

    return () => clearTimeout(timer)
  }, [])

  if (!isLoading) return null

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 bg-dark-900 z-50 flex items-center justify-center"
    >
      <div className="relative w-24 h-24">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
          className="absolute inset-0 border-2 border-transparent border-t-neon-cyan border-r-neon-blue rounded-full"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
          className="absolute inset-2 border-2 border-transparent border-b-neon-pink border-l-neon-purple rounded-full"
        />
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute inset-0 flex items-center justify-center text-neon-cyan text-xs font-bold"
        >
          AI/ML
        </motion.div>
      </div>
    </motion.div>
  )
}
