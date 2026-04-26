# 🎓 DINOORA - Premium Education Platform

> منصة احترافية عالمية المستوى لخدمات الدراسة بالخارج مع تقنيات 3D وفيديوهات وتأثيرات متقدمة

[![Vercel Status](https://img.shields.io/badge/Vercel-Deployed-success?style=flat-square)](https://vercel.com)
[![Next.js](https://img.shields.io/badge/Next.js-16-black?style=flat-square)](https://nextjs.org)
[![React](https://img.shields.io/badge/React-19-blue?style=flat-square)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7-blue?style=flat-square)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.2-blue?style=flat-square)](https://tailwindcss.com)
[![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)](LICENSE)

---

## ✨ الميزات الرئيسية

### 🎨 التصميم المتقدم
- ✅ **3D Effects** - تأثيرات ثلاثية الأبعاد احترافية
- ✅ **Particle System** - نظام جسيمات متحرك
- ✅ **Video Backgrounds** - خلفيات فيديو ديناميكية
- ✅ **Parallax Scrolling** - تأثيرات حركة متقدمة
- ✅ **25+ Animations** - حركات احترافية
- ✅ **Modern UI** - واجهة حديثة وجميلة

### 🚀 الأداء
- ⚡ **LCP < 2s** - تحميل سريع جداً
- 📱 **Mobile First** - محسّن للهاتف
- 🔍 **SEO Optimized** - محسّن للبحث
- ♿ **Accessible** - متوافق مع WCAG 2.1
- 🌍 **Multi-language** - العربية والإنجليزية

### 🔐 الأمان
- ✅ Security Headers
- ✅ XSS Protection
- ✅ CSRF Protection
- ✅ Input Validation
- ✅ Type Safe (TypeScript)

### 📊 المحتوى
- 🎓 خدمات تعليمية شاملة
- 🌍 وجهات دراسية عالمية
- 🏫 قوائم الجامعات
- 📝 نماذج تقديم متقدمة
- 💬 تكامل WhatsApp

---

## 🛠️ التقنيات المستخدمة

```
Frontend:
- Next.js 16 (React Framework)
- React 19 (UI Library)
- TypeScript 5.7 (Type Safety)
- Tailwind CSS 4 (Styling)
- Framer Motion (Animations)
- Three.js (3D Graphics)

UI Components:
- Shadcn/UI (Component Library)
- Radix UI (Primitives)
- Lucide React (Icons)

Forms & Validation:
- React Hook Form (Form Handling)
- Zod (Schema Validation)

Development:
- ESLint (Linting)
- Next.js 16 (Build Tool)
```

---

## 📦 الملفات الرئيسية

```
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Home page
│   ├── globals.css         # Global styles with 3D animations
│   └── ...                 # Pages
│
├── components/
│   ├── 3d-hero.tsx        # ✨ 3D Hero with particles
│   ├── video-background.tsx # 🎬 Video backgrounds
│   ├── card-3d.tsx        # 🎨 3D Cards
│   ├── parallax-scroll.tsx # 🌊 Parallax effects
│   ├── ui/                 # Shadcn UI components
│   └── ...                 # Other components
│
├── lib/
│   ├── config.ts          # Configuration
│   ├── types.ts           # TypeScript types
│   └── language-context.tsx # i18n support
│
├── public/
│   ├── videos/            # Video files
│   ├── images/            # Image files
│   └── ...                # Static assets
│
├── vercel.json            # Vercel configuration
├── next.config.mjs        # Next.js configuration
├── tsconfig.json          # TypeScript configuration
├── tailwind.config.ts     # Tailwind configuration
└── package.json           # Dependencies
```

---

## 🚀 البدء السريع

### المتطلبات
- Node.js 18+ 
- npm أو pnpm أو yarn

### التثبيت

```bash
# نسخ المشروع
git clone https://github.com/dinnoora/education-platform.git
cd education-platform

# تثبيت المكتبات
npm install

# إنشاء ملف البيئة
cp .env.example .env.local

# تحديث الإعدادات
nano .env.local
```

### التطوير المحلي

```bash
# تشغيل خادم التطوير
npm run dev

# افتح http://localhost:3000
```

### البناء للإنتاج

```bash
# بناء النسخة الإنتاجية
npm run build

# اختبار الإنتاج محلياً
npm run start
```

---

## 📝 متغيرات البيئة

```env
# Site Configuration
NEXT_PUBLIC_SITE_URL=https://dinoora.com
NEXT_PUBLIC_SITE_NAME=DINOORA Education

# Contact Information
NEXT_PUBLIC_WHATSAPP_NUMBER=+971503456789
NEXT_PUBLIC_CONTACT_EMAIL=contact@dinnoora.com
NEXT_PUBLIC_PHONE_NUMBER=+971503456789

# Social Media
NEXT_PUBLIC_INSTAGRAM_URL=https://instagram.com/dinoora
NEXT_PUBLIC_FACEBOOK_URL=https://facebook.com/dinoora

# Analytics (Optional)
NEXT_PUBLIC_GA_ID=your_ga_id

# Features
NEXT_PUBLIC_ENABLE_ANALYTICS=true
NEXT_PUBLIC_ENABLE_CHATBOT=true
```

---

## 📊 الأداء

```
Core Web Vitals:
✅ LCP: < 2.0s
✅ FID: < 100ms
✅ CLS: < 0.1

Lighthouse Scores:
✅ Performance: 92+
✅ Accessibility: 95+
✅ Best Practices: 95+
✅ SEO: 100
```

---

## 🌐 النشر على Vercel

### خطوات النشر:

1. **إنشاء حساب Vercel:**
   - انتقل إلى https://vercel.com
   - سجّل دخول بـ GitHub

2. **ربط المشروع:**
   - اختر "Import Git Repository"
   - اختر هذا المشروع
   - اضغط "Deploy"

3. **تخصيص الدومين:**
   - انتقل إلى Settings > Domains
   - أضف دومينك الخاص

4. **متغيرات البيئة:**
   - أضف متغيرات البيئة في Settings > Environment Variables

### رابط البيانات المباشر:
```
🌐 Production: https://your-domain.com
🌐 Preview: https://preview-[hash].vercel.app
🌐 Dashboard: https://vercel.com/dashboard
```

---

## 🛠️ الأوامر المتاحة

```bash
# التطوير
npm run dev              # تشغيل خادم التطوير
npm run build            # بناء الإنتاج
npm run start            # تشغيل النسخة الإنتاجية
npm run lint             # فحص الأخطاء
npm run type-check       # فحص TypeScript

# الأدوات المساعدة
npm run analyze          # تحليل حجم Bundle
npm run generate         # توليد الملفات
```

---

## 📖 الدلائل

- 📚 [FINAL_SUMMARY.md](FINAL_SUMMARY.md) - ملخص شامل
- 📚 [ADVANCED_FEATURES_GUIDE.md](ADVANCED_FEATURES_GUIDE.md) - دليل المكونات المتقدمة
- 📚 [QUICK_WINS.md](QUICK_WINS.md) - أسرع 10 تحسينات
- 📚 [IMPROVEMENTS_STRATEGY.md](IMPROVEMENTS_STRATEGY.md) - استراتيجية التحسينات

---

## 🤝 المساهمة

نرحب بالمساهمات! يرجى اتباع الخطوات التالية:

1. Fork المشروع
2. إنشاء فرع جديد (`git checkout -b feature/amazing-feature`)
3. Commit التغييرات (`git commit -m 'Add amazing feature'`)
4. Push إلى الفرع (`git push origin feature/amazing-feature`)
5. فتح Pull Request

---

## 📄 الترخيص

هذا المشروع مرخص تحت رخصة MIT - انظر ملف [LICENSE](LICENSE) للتفاصيل.

---

## 📞 التواصل والدعم

- 📧 Email: [contact@dinnoora.com](mailto:contact@dinnoora.com)
- 💬 WhatsApp: [تواصل هنا](https://wa.me/971503456789)
- 🌐 Website: [https://dinnoora.com](https://dinnoora.com)
- 📱 Instagram: [@dinoora_education](https://instagram.com/dinoora_education)

---

## 🎉 الشكر والتقدير

شكراً لاستخدامك **DINOORA Education Platform**!

اصنعها بجودة عالية وابني مستقبلك الأكاديمي معنا! 🚀

---

<div align="center">

**Made with ❤️ by DINOORA Team**

[⬆ back to top](#-dinoora---premium-education-platform)

</div>
