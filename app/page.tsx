import HeroSection from "./components/home/HeroSection"
import FeaturesSection from "./components/home/FeaturesSection"
import HowItWorksSection from "./components/home/HowItWorksSection"
import CareersSection from "./components/home/CareersSection"

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#FEF9F2] text-[#533F2E]">
      <div className="pointer-events-none absolute -left-32 top-20 h-[420px] w-[420px] rounded-full bg-[#FFB38A]/20 blur-3xl" />
      <div className="pointer-events-none absolute right-0 top-[520px] h-[500px] w-[500px] rounded-full bg-[#8E44AD]/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-1/3 h-[300px] w-[300px] rounded-full bg-[#FFDCC6]/30 blur-3xl" />

      <HeroSection />
      <FeaturesSection />
      <HowItWorksSection />
      <CareersSection />
    </main>
  )
}