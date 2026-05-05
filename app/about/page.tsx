import AboutHero from "./components/AboutHero"
import OriginStory from "./components/OriginStory"
import PrinciplesSection from "./components/PrinciplesSection"
import VisionSection from "./components/VisionSection"
import ClosingSection from "./components/ClosingSection"

export default function About() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#FEF9F2]">
      <div className="pointer-events-none absolute -left-24 top-16 h-[420px] w-[420px] rounded-full bg-[#FFB38A]/20 blur-3xl" />
      <div className="pointer-events-none absolute right-0 top-[420px] h-[460px] w-[460px] rounded-full bg-[#8E44AD]/10 blur-3xl" />

      <AboutHero />
      <OriginStory />
      <PrinciplesSection />
      <VisionSection />
      <ClosingSection />
    </main>
  )
}