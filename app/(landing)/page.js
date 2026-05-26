





import React from "react";
import { Sparkles, Shield, Zap, Globe, ArrowRight, Check } from "lucide-react";
import HeroImages from "@/components/HeroImages";
import InactiveButton from "@/components/ui/InactiveButton";
import ActiveButton from "@/components/ui/ActiveButton";
import Image from "next/image";
import HeroSection from "@/components/section/HeroSection";
import SecondSection from "@/components/section/SecondSection";
import ThirdSection from "@/components/section/ThirdSection";

export const metadata = {
  title: "Startup - The Modern Platform for Web Teams",
  description: "Deploy faster, scale reliably, and deliver incredible digital experiences to your users with our modern developer platform.",
};

export default function LandingPage() {
  const features = [
    {
      icon: <Zap className="h-6 w-6 text-blue-500" />,
      title: "Lightning Fast Performance",
      description: "Optimized build pipelines and globally distributed servers ensure your application loads instantly for users everywhere.",
    },
    {
      icon: <Shield className="h-6 w-6 text-indigo-500" />,
      title: "Enterprise Grade Security",
      description: "State of the art security practices, DDOS protection, and automated compliance built right into our infrastructure.",
    },
    {
      icon: <Globe className="h-6 w-6 text-purple-500" />,
      title: "Global Distribution Network",
      description: "Deploy to our global edge network instantly, serving static and dynamic content with ultra-low latency.",
    },
  ];

  return (
    <div className="w-full bg-transparent text-white font-sans selection:bg-white/10">

      {/* Hero Section */}
      <HeroSection />
      <SecondSection />
      <ThirdSection />
    </div>
  );
}
