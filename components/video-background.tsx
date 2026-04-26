'use client'

import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

interface VideoBackgroundProps {
  videoSrc: string
  title: string
  description: string
  fallbackColor?: string
  overlay?: boolean
  parallaxEffect?: boolean
}

export function VideoBackground({
  videoSrc,
  title,
  description,
  fallbackColor = 'from-primary/20 to-accent/20',
  overlay = true,
  parallaxEffect = true,
}: VideoBackgroundProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    if (!parallaxEffect) return

    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [parallaxEffect])

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    // Auto play and mute for background video
    video.muted = true
    video.autoplay = true
    video.loop = true
    video.playsInline = true

    // Handle video play errors gracefully
    const playPromise = video.play()
    if (playPromise !== undefined) {
      playPromise.catch(() => {
        console.log('Video autoplay failed, user interaction may be required')
      })
    }
  }, [])

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Video Background Container */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        {/* Video Element */}
        <motion.video
          ref={videoRef}
          src={videoSrc}
          className="w-full h-full object-cover"
          style={{
            y: parallaxEffect ? scrollY * 0.5 : 0,
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {/* Fallback for browsers that don't support HTML5 video */}
          <source src={videoSrc} type="video/mp4" />
        </motion.video>

        {/* Gradient Overlay with Animation */}
        <motion.div
          className={`absolute inset-0 bg-gradient-to-b ${fallbackColor}`}
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
        />

        {/* Advanced Overlay Effects */}
        {overlay && (
          <>
            {/* Dark overlay with radial gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-background/40 via-transparent to-background/40" />

            {/* Vignette effect */}
            <div className="absolute inset-0 shadow-[inset_0_0_100px_rgba(0,0,0,0.3)]" />

            {/* Animated light beams */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-background/20"
              animate={{
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
              }}
            />
          </>
        )}
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 max-w-5xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <h2 className="text-5xl md:text-7xl font-black mb-6 text-white drop-shadow-lg">
            <span className="bg-gradient-to-r from-white via-blue-200 to-white bg-clip-text text-transparent">
              {title}
            </span>
          </h2>

          <motion.p
            className="text-lg md:text-2xl text-white/90 max-w-3xl mx-auto mb-8 drop-shadow-md font-medium"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            {description}
          </motion.p>

          {/* Animated CTA Button */}
          <motion.button
            className="px-8 py-4 bg-gradient-to-r from-primary via-blue-500 to-primary rounded-lg font-bold text-white shadow-2xl hover:shadow-primary/50"
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            Learn More
          </motion.button>
        </motion.div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full opacity-60"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: 'linear',
            }}
          />
        ))}
      </div>
    </section>
  )
}
