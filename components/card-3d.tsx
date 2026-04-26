'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface Card3DProps {
  icon: ReactNode
  title: string
  description: string
  delay?: number
  gradient?: string
  index?: number
}

export function Card3D({
  icon,
  title,
  description,
  delay = 0,
  gradient = 'from-blue-500 to-purple-600',
  index = 0,
}: Card3DProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ y: -10, rotateZ: 2 }}
      viewport={{ once: true }}
      className="group relative h-full cursor-pointer"
    >
      {/* 3D Card Container */}
      <div className="relative h-full overflow-hidden rounded-2xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10 backdrop-blur-md p-8 hover:border-white/20 transition-all duration-300">
        {/* Animated gradient background */}
        <motion.div
          className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
          animate={{
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 3 + index,
            repeat: Infinity,
          }}
        />

        {/* Shine effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"
          animate={{
            x: [-400, 400],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatDelay: 2,
          }}
        />

        {/* Content */}
        <div className="relative z-10">
          {/* Icon with animation */}
          <motion.div
            className="mb-4 text-5xl"
            animate={{
              scale: [1, 1.1, 1],
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              duration: 3 + index * 0.5,
              repeat: Infinity,
            }}
            whileHover={{
              scale: 1.2,
              rotate: 10,
            }}
          >
            {icon}
          </motion.div>

          {/* Title */}
          <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text from-blue-400 to-purple-400 transition-all duration-300">
            {title}
          </h3>

          {/* Description */}
          <p className="text-white/70 group-hover:text-white/90 transition-colors duration-300 leading-relaxed">
            {description}
          </p>

          {/* Bottom accent line */}
          <motion.div
            className="mt-6 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"
            initial={{ width: 0 }}
            whileHover={{ width: '100%' }}
            transition={{ duration: 0.4 }}
          />
        </div>

        {/* Floating particles inside card */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full pointer-events-none"
            animate={{
              x: [0, 100, -100, 0],
              y: [0, 100, -50, 0],
            }}
            transition={{
              duration: 6 + i,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            style={{
              left: `${20 + i * 30}%`,
              top: `${30 + i * 20}%`,
            }}
          />
        ))}
      </div>
    </motion.div>
  )
}

// Gallery 3D Component
interface Gallery3DProps {
  images: string[]
  title: string
}

export function Gallery3D({ images, title }: Gallery3DProps) {
  return (
    <div className="space-y-8">
      <h2 className="text-4xl font-bold text-center">{title}</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {images.map((image, index) => (
          <motion.div
            key={index}
            className="relative h-80 rounded-2xl overflow-hidden cursor-pointer group"
            initial={{ opacity: 0, rotateZ: -10 }}
            whileInView={{ opacity: 1, rotateZ: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ rotateZ: 5, scale: 1.05 }}
          >
            {/* Image */}
            <motion.img
              src={image}
              alt="Gallery"
              className="w-full h-full object-cover"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.4 }}
            />

            {/* Overlay */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="text-white font-bold text-lg">Destination {index + 1}</p>
                <p className="text-white/70">Explore opportunities</p>
              </div>
            </motion.div>

            {/* Border glow */}
            <motion.div
              className="absolute inset-0 rounded-2xl border-2 border-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 -z-10 opacity-0 group-hover:opacity-100 transition-opacity"
              animate={{
                backgroundPosition: ['0% 0%', '100% 100%'],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
              }}
            />
          </motion.div>
        ))}
      </div>
    </div>
  )
}

// Floating card component
export function FloatingCard3D({
  children,
  delay = 0,
}: {
  children: ReactNode
  delay?: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay }}
      viewport={{ once: true }}
      whileHover={{ y: -20, rotateX: 10 }}
      className="relative"
      style={{ transformStyle: 'preserve-3d' }}
    >
      <div className="relative rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/20 backdrop-blur-lg p-8 shadow-2xl hover:shadow-primary/50 transition-all duration-300">
        {children}

        {/* Floating border effect */}
        <motion.div
          className="absolute inset-0 rounded-2xl border-2 border-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 -z-10"
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
          }}
          style={{
            backgroundSize: '200% 200%',
          }}
        />
      </div>
    </motion.div>
  )
}
