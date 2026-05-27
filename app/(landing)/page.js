import HeroSection from "@/components/section/HeroSection";
import SecondSection from "@/components/section/SecondSection";
import ThirdSection from "@/components/section/ThirdSection";
import SliderSection from "@/components/section/SliderSection";
import ForthSection from "@/components/section/ForthSection";
export const metadata = {
  title: "Startup - The Modern Platform for Web Teams",
  description: "Deploy faster, scale reliably, and deliver incredible digital experiences to your users with our modern developer platform.",
};

export default function LandingPage() {
  return (
    <div className="w-full bg-transparent text-white font-sans selection:bg-white/10">

      <HeroSection />
      <SecondSection />
      <ThirdSection />
      <SliderSection />
      <ForthSection />
    </div>
  );
}
