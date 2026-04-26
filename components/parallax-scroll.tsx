'use client'

import { useRef, useEffect, useState } from 'react'
import { motion } from 'framer-motion'

interface ParallaxLayerProps {
  children: React.ReactNode
  offset?: number
  speed?: number
  className?: string
}

export function ParallaxLayer({
  children,
  offset = 0,
  speed = 0.5,
  className = '',
}: ParallaxLayerProps) {
  const [scrollY, setScrollY] = useState(0)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      setScrollY(scrollTop)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.div
      ref={ref}
      style={{
        y: scrollY * speed + offset,
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// Advanced parallax section
export function ParallaxSection({
  backgroundImage,
  title,
  description,
  height = 'min-h-screen',
}: {
  backgroundImage: string
  title: string
  description: string
  height?: string
}) {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section className={`relative ${height} overflow-hidden flex items-center justify-center`}>
      {/* Parallax Background */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{
          y: scrollY * 0.5,
        }}
      >
        <img
          src={backgroundImage}
          alt="Background"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Overlay with animated gradient */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/70"
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%'],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
      />

      {/* Floating content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-7xl font-black text-white mb-6 drop-shadow-lg">
            {title}
          </h2>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto drop-shadow-md">
            {description}
          </p>
        </motion.div>

        {/* Animated scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="text-white/70 text-sm">Scroll down</div>
        </motion.div>
      </div>
    </section>
  )
}

// Horizontal parallax scroll
export function HorizontalParallax({
  items,
}: {
  items: Array<{ id: string; title: string; image: string; description: string }>
}) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [scrollX, setScrollX] = useState(0)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const handleScroll = () => {
      setScrollX(container.scrollLeft)
    }

    container.addEventListener('scroll', handleScroll)
    return () => container.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div
      ref={containerRef}
      className="flex overflow-x-auto snap-x snap-mandatory pb-4 gap-4"
      style={{
        scrollBehavior: 'smooth',
      }}
    >
      {items.map((item, index) => (
        <motion.div
          key={item.id}
          className="flex-shrink-0 w-96 snap-center"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true }}
          style={{
            x: scrollX * (1 - (index * 0.1) % 1),
          }}
        >
          <div className="relative h-96 rounded-2xl overflow-hidden group">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
              <div className="p-6 text-white">
                <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                <p className="text-white/80">{item.description}</p>
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  )
}

// Staggered scroll animation
export function StaggeredScroll({
  items,
  title,
}: {
  items: Array<{ id: string; title: string; description: string }>
  title: string
}) {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-5xl font-bold text-center mb-16">{title}</h2>

        <div className="space-y-8">
          {items.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true, margin: '-100px' }}
              whileHover={{ scale: 1.02, x: index % 2 === 0 ? 20 : -20 }}
              className={`p-8 rounded-2xl border border-white/10 backdrop-blur-md hover:border-white/30 transition-all ${
                index % 2 === 0
                  ? 'ml-0 mr-auto max-w-2xl'
                  : 'ml-auto mr-0 max-w-2xl'
              }`}
            >
              <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
              <p className="text-white/80">{item.description}</p>

              {/* Animated number indicator */}
              <motion.div
                className={`absolute -z-10 text-9xl font-black text-white/5 ${
                  index % 2 === 0 ? '-left-10' : '-right-10'
                }`}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                {String(index + 1).padStart(2, '0')}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
