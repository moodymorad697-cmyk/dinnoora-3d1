'use client'

import { HeroWith3D } from '@/components/3d-hero'
import { VideoBackground } from '@/components/video-background'
import { Card3D, Gallery3D, FloatingCard3D } from '@/components/card-3d'
import { ParallaxSection, HorizontalParallax, StaggeredScroll } from '@/components/parallax-scroll'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'

export default function EnhancedHomePage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* ==================== HERO SECTION ==================== */}
      <section className="relative">
        <HeroWith3D />
      </section>

      {/* ==================== PROMOTIONAL VIDEO SECTION ==================== */}
      <section className="py-20 bg-gradient-to-b from-background via-secondary/10 to-background">
        <VideoBackground
          videoSrc="/videos/hero-background.mp4"
          title="🎬 اكتشف الفرص اللامحدودة"
          description="شاهد كيف غيّر نا حياة آلاف الطلاب حول العالم"
          fallbackColor="from-primary/30 to-accent/30"
          overlay={true}
          parallaxEffect={true}
        />
      </section>

      {/* ==================== SERVICES WITH 3D CARDS ==================== */}
      <section className="py-20 px-4 bg-gradient-to-b from-background to-secondary/5">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-black mb-4 bg-gradient-to-r from-primary via-blue-500 to-accent bg-clip-text text-transparent">
              خدماتنا المتكاملة
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              نقدم جميع الخدمات التي تحتاجها لنجاح رحلتك الدراسية
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card3D
              icon="🎓"
              title="التقديم الجامعي"
              description="استشارة شاملة واختيار الجامعة المناسبة لك"
              gradient="from-blue-500 to-cyan-600"
              index={0}
              delay={0}
            />

            <Card3D
              icon="📄"
              title="تجهيز الوثائق"
              description="معالجة جميع المستندات المطلوبة بسرعة"
              gradient="from-purple-500 to-pink-600"
              index={1}
              delay={0.1}
            />

            <Card3D
              icon="✈️"
              title="معالجة التأشيرة"
              description="تأشيرة سريعة وآمنة مع خدمة كاملة"
              gradient="from-green-500 to-teal-600"
              index={2}
              delay={0.2}
            />

            <Card3D
              icon="🏨"
              title="السكن والإقامة"
              description="توفير سكن آمن وقريب من الجامعة"
              gradient="from-orange-500 to-red-600"
              index={3}
              delay={0.3}
            />
          </div>
        </div>
      </section>

      {/* ==================== DESTINATIONS WITH PARALLAX ==================== */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-7xl">
          <h2 className="text-5xl md:text-6xl font-black text-center mb-16 bg-gradient-to-r from-primary via-blue-500 to-accent bg-clip-text text-transparent">
            🌍 أفضل الوجهات الدراسية
          </h2>

          <HorizontalParallax
            items={[
              {
                id: '1',
                title: 'ماليزيا 🇲🇾',
                image: '/images/destinations/malaysia-banner.jpg',
                description: 'جامعات عالمية برسوم معقولة وحياة آمنة'
              },
              {
                id: '2',
                title: 'تركيا 🇹🇷',
                image: '/images/destinations/turkey-banner.jpg',
                description: 'تعليم أوروبي بأسعار آسيوية'
              },
              {
                id: '3',
                title: 'الصين 🇨🇳',
                image: '/images/destinations/china-banner.jpg',
                description: 'منح دراسية وفيرة وتكاليف منخفضة'
              },
            ]}
          />
        </div>
      </section>

      {/* ==================== PROCESS TIMELINE WITH STAGGERED SCROLL ==================== */}
      <section className="py-20 bg-gradient-to-b from-secondary/5 to-background">
        <StaggeredScroll
          title="🚀 عملية التقديم خطوة بخطوة"
          items={[
            {
              id: '1',
              title: 'الاستشارة المجانية',
              description: 'اتصل بنا عبر WhatsApp أو الهاتف للحصول على استشارة مجانية شاملة'
            },
            {
              id: '2',
              title: 'اختيار الجامعة',
              description: 'نساعدك في اختيار أفضل جامعة تناسب احتياجاتك وميزانيتك'
            },
            {
              id: '3',
              title: 'تجهيز الوثائق',
              description: 'نقوم بتجهيز جميع المستندات المطلوبة وتصديقها'
            },
            {
              id: '4',
              title: 'تقديم الطلب',
              description: 'نرسل طلبك للجامعة ونتابع معهم'
            },
            {
              id: '5',
              title: 'معالجة التأشيرة',
              description: 'نساعدك في استخراج التأشيرة ترافق معك في كل خطوة'
            },
            {
              id: '6',
              title: 'الإقامة والسفر',
              description: 'نوفر لك السكن والتأمين والتوصيل من المطار'
            },
          ]}
        />
      </section>

      {/* ==================== PARALLAX SECTION ==================== */}
      <ParallaxSection
        backgroundImage="/images/hero-bg.jpg"
        title="🌟 حقق حلمك الأكاديمي معنا"
        description="انضم إلى أكثر من 10,000 طالب استفادوا من خدماتنا المتميزة"
        height="min-h-screen"
      />

      {/* ==================== STATISTICS SECTION ==================== */}
      <section className="py-20 px-4 bg-gradient-to-b from-background to-secondary/5">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-5xl font-black text-center mb-16">📊 إحصائياتنا</h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { number: '10,000+', label: 'طالب موضوع' },
              { number: '500+', label: 'جامعة شريكة' },
              { number: '98%', label: 'معدل النجاح' },
              { number: '9+', label: 'سنة خبرة' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1, y: -10 }}
                className="text-center p-8 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 border border-white/10 hover:border-white/30 transition-all cursor-pointer"
              >
                <div className="text-5xl font-black bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-3">
                  {stat.number}
                </div>
                <p className="text-lg font-semibold text-muted-foreground">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== CTA SECTION ==================== */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <FloatingCard3D delay={0}>
            <div className="text-center">
              <h2 className="text-5xl font-black mb-6 bg-gradient-to-r from-primary via-blue-500 to-accent bg-clip-text text-transparent">
                هل أنت مستعد للبدء؟
              </h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                لا تتردد! استشارتنا مجانية 100% وبدون أي التزام
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-primary via-blue-500 to-primary hover:shadow-2xl hover:shadow-primary/50 px-10 py-6 text-lg font-bold"
                  >
                    ابدأ الآن
                  </Button>
                </motion.div>

                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-2 border-white/20 hover:bg-white/10 px-10 py-6 text-lg font-bold"
                    asChild
                  >
                    <a href="https://wa.me/971503456789" target="_blank" rel="noopener noreferrer">
                      💬 تواصل عبر واتس
                    </a>
                  </Button>
                </motion.div>
              </div>
            </div>
          </FloatingCard3D>
        </div>
      </section>

      {/* ==================== FOOTER ==================== */}
      <Footer />
    </main>
  )
}
