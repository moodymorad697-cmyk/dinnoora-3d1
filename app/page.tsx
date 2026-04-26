import { Header } from "@/components/header"
import { HeroWith3D } from "@/components/3d-hero"
import { WhyChooseUs } from "@/components/why-choose-us"
import { HowItWorks } from "@/components/how-it-works"
import { ProcessTimeline } from "@/components/process-timeline"
import { Services } from "@/components/services"
import { Destinations } from "@/components/destinations"
import { Programs } from "@/components/programs"
import { Universities } from "@/components/universities"
import { Testimonials } from "@/components/testimonials"
import { FAQ } from "@/components/faq"
import { CTA } from "@/components/cta"
import { ApplicationForm } from "@/components/application-form"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      {/* استخدم الـ 3D Hero الجديد */}
      <HeroWith3D />
      <WhyChooseUs />
      <HowItWorks />
      <ProcessTimeline />
      <Services />
      <Destinations />
      <Programs />
      <Universities />
      <Testimonials />
      <FAQ />
      <CTA />
      <ApplicationForm />
      <Footer />
    </main>
  )
}
