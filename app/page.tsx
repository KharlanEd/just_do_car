import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { CarsGallery } from "@/components/cars-gallery"
import { ProcessSection } from "@/components/process-section"
import { ReviewsSection } from "@/components/reviews-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <CarsGallery />
      <ProcessSection />
      <ReviewsSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
