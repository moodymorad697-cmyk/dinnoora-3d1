'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ArrowRight, MessageCircle, Sparkles } from 'lucide-react'
import Link from 'next/link'
import { useLanguage } from '@/lib/language-context'

export function HeroWith3D() {
  const { t, dir } = useLanguage()
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    // Canvas animated background with particles
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    interface Particle {
      x: number
      y: number
      size: number
      speedX: number
      speedY: number
      color: string
      opacity: number
    }

    const particles: Particle[] = []

    // Create particles
    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 3 + 1,
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: (Math.random() - 0.5) * 0.5,
        color: `hsl(${Math.random() * 60 + 200}, 100%, 60%)`,
        opacity: Math.random() * 0.5 + 0.5,
      })
    }

    const animate = () => {
      // Clear canvas with fade effect
      ctx.fillStyle = 'rgba(0, 0, 0, 0.03)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Update and draw particles
      particles.forEach((particle, index) => {
        particle.x += particle.speedX
        particle.y += particle.speedY

        // Bounce off walls
        if (particle.x < 0 || particle.x > canvas.width) particle.speedX *= -1
        if (particle.y < 0 || particle.y > canvas.height) particle.speedY *= -1

        // Draw particle with glow
        ctx.save()
        ctx.shadowColor = particle.color
        ctx.shadowBlur = 15
        ctx.fillStyle = particle.color
        ctx.globalAlpha = particle.opacity
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fill()
        ctx.restore()

        // Draw connections between nearby particles
        particles.forEach((other, otherIndex) => {
          if (index < otherIndex) {
            const dx = particle.x - other.x
            const dy = particle.y - other.y
            const distance = Math.sqrt(dx * dx + dy * dy)

            if (distance < 150) {
              ctx.strokeStyle = particle.color
              ctx.globalAlpha = (1 - distance / 150) * 0.3
              ctx.lineWidth = 1
              ctx.beginPath()
              ctx.moveTo(particle.x, particle.y)
              ctx.lineTo(other.x, other.y)
              ctx.stroke()
            }
          }
        })
      })

      requestAnimationFrame(animate)
    }

    animate()

    // Handle resize
    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  }

  const floatingVariants = {
    initial: { y: 0 },
    animate: {
      y: [-20, 20, -20],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated Canvas Background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-0"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 z-1 bg-gradient-to-b from-background/80 via-background/40 to-background/80" />

      {/* 3D Animated Orbs */}
      <motion.div
        className="absolute top-1/4 left-10 w-72 h-72 bg-gradient-to-br from-primary via-blue-500 to-transparent rounded-full blur-[120px] pointer-events-none"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="absolute bottom-1/4 right-10 w-96 h-96 bg-gradient-to-br from-accent via-purple-500 to-transparent rounded-full blur-[150px] pointer-events-none"
        animate={{
          scale: [1.2, 1, 1.2],
          rotate: [360, 180, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Content */}
      <div className="container relative z-10 px-4 py-20 md:py-32 mx-auto max-w-7xl">
        <motion.div
          className="max-w-5xl mx-auto text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Animated Badge */}
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-8"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
          >
            <motion.span
              className="w-2 h-2 bg-primary rounded-full"
              animate={{ scale: [1, 1.5, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <span className="text-sm font-medium text-white/90">{t.hero?.badge || '✨ Premium Education Services'}</span>
          </motion.div>

          {/* Main Heading with 3D Effect */}
          <motion.div variants={itemVariants}>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-8 text-balance">
              <motion.span
                className="block text-foreground"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                {t.hero?.title || 'Your Gateway'}
              </motion.span>
              <motion.span
                className="block bg-gradient-to-r from-primary via-blue-500 to-accent bg-clip-text text-transparent"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                {t.hero?.titleHighlight || 'to Global Education'}
              </motion.span>
              <motion.span
                className="block text-foreground/80"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                {t.hero?.titleEnd || 'Awaits You'}
              </motion.span>
            </h1>
          </motion.div>

          {/* Description with Glow */}
          <motion.p
            className="text-lg md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed font-medium"
            variants={itemVariants}
          >
            {t.hero?.description || 'Join 10,000+ successful students placed in world-class universities. Start your journey today.'}
          </motion.p>

          {/* CTA Buttons with 3D Effect */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
            variants={itemVariants}
          >
            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto"
            >
              <Button
                size="lg"
                className="w-full bg-gradient-to-r from-primary via-blue-500 to-primary hover:shadow-2xl hover:shadow-primary/50 transition-all duration-300 px-8 py-6 text-lg font-bold shadow-lg"
                asChild
              >
                <Link href="#apply" className="flex items-center gap-2">
                  {t.hero?.applyNow || 'Apply Now'}
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <ArrowRight className="w-5 h-5" />
                  </motion.div>
                </Link>
              </Button>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto"
            >
              <Button
                size="lg"
                variant="outline"
                className="w-full border-2 border-white/20 hover:bg-white/10 hover:border-white/40 px-8 py-6 text-lg font-bold transition-all"
                asChild
              >
                <a href="https://wa.me/971503456789" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <MessageCircle className="w-5 h-5" />
                  </motion.div>
                  {t.hero?.chatWhatsApp || 'Chat on WhatsApp'}
                </a>
              </Button>
            </motion.div>
          </motion.div>

          {/* 3D Stats Grid with Floating Animation */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8"
            variants={itemVariants}
          >
            {[
              { icon: '🎓', value: '10,000+', label: t.hero?.studentsPlaced || 'Students Placed' },
              { icon: '🏢', value: '500+', label: t.hero?.partnerUniversities || 'Partner Universities' },
              { icon: '🏆', value: '98%', label: t.hero?.successRate || 'Success Rate' },
              { icon: '⏱️', value: '9+', label: t.hero?.yearsExperience || 'Years Experience' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-8 hover:bg-white/10 transition-all"
                variants={floatingVariants}
                initial="initial"
                animate="animate"
                style={{ animationDelay: `${index * 0.2}s` }}
                whileHover={{
                  scale: 1.05,
                  rotateY: 10,
                  boxShadow: '0 20px 40px rgba(59, 130, 246, 0.3)',
                }}
              >
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="relative z-10">
                  <div className="text-5xl mb-3 group-hover:scale-125 transition-transform duration-300">
                    {stat.icon}
                  </div>
                  <div className="text-3xl md:text-4xl font-black bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm md:text-base font-semibold text-white/70 group-hover:text-white transition-colors">
                    {stat.label}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <span className="text-sm text-muted-foreground">Scroll to explore</span>
            <motion.div
              className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex items-start justify-center p-1"
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <motion.div
                className="w-1.5 h-3 bg-primary rounded-full"
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
