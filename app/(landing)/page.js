





import React from "react";
import { Sparkles, Shield, Zap, Globe, ArrowRight, Check } from "lucide-react";
import HeroImages from "@/components/HeroImages";
import InactiveButton from "@/components/ui/InactiveButton";
import ActiveButton from "@/components/ui/ActiveButton";
import Image from "next/image";

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

  const pricingPlans = [
    {
      name: "Starter",
      price: "$0",
      description: "Perfect for hobbyists and developers getting started.",
      features: [
        "Deploy up to 3 projects",
        "Global edge network",
        "Community support",
        "Standard bandwidth",
      ],
      cta: "Get Started Free",
      popular: false,
    },
    {
      name: "Pro",
      price: "$29",
      description: "Ideal for growing teams and serious builders.",
      features: [
        "Unlimited projects",
        "Priority support & SLAs",
        "Advanced custom domains",
        "Higher bandwidth & computing",
        "Analytics & insights",
      ],
      cta: "Start 14-day Free Trial",
      popular: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "For organizations requiring custom requirements.",
      features: [
        "Dedicated infrastructure",
        "Whiteglove onboarding",
        "Dedicated account manager",
        "Custom security reviews",
        "99.99% uptime guarantee",
      ],
      cta: "Contact Sales",
      popular: false,
    },
  ];

  return (
    <div className="w-full bg-transparent text-white font-sans selection:bg-white/10">

      {/* Hero Section */}
      <section className="relative h-screen flex justify-center items-center overflow-hidden pt-32 pb-24 lg:pt-40 lg:pb-32">
        {/* Background Gradients */}

        <div className="mx-auto max-w-7xl lg:mt-20 px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row justify-between gap-12 lg:gap-16 items-center w-full">

            {/* Left Column — Text Content */}
            <div className="text-left">
              {/* Headline */}
              <h1 className="text-3xl font-medium sm:text-4xl lg:text-6xl text-white bg-clip-text text-transparent bg-gradient-to-b from-white to-zinc-400">
                The new foundation of modern banking
              </h1>

              {/* Sub-headline */}
              <p className="mt-6 text-lg leading-relaxed text-zinc-400 max-w-xl">
                We drive innovation and growth, provide seamless customer experience and operational excellence
              </p>

              {/* CTAs */}
              <div className="mt-10 flex items-center gap-4">
                <ActiveButton text="Request Demo" href="#pricing" />
                <InactiveButton text="Contact Us" href="#contact" />
              </div>
            </div>

            {/* Right Column — Hero Images with 3D Depth Effect */}
            <div className="relative py-8 px-4 lg:py-12 lg:px-8 flex justify-end w-[550px]">
              <div className="absolute inset-x-0 -top-50 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-50">
                <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-blue-600 to-indigo-600 opacity-20 sm:left-[calc(50%-30rem)] sm:w-[90rem]"></div>
              </div>
              <HeroImages />
            </div>

          </div>
          {/* Trusted By */}
          <div className="mt-4 flex flex-col items-start justify-start gap-4">
            <h2 className="text-center text-sm font-semibold leading-7 text-zinc-400">Trusted By:</h2>
            <div className="mt-6 flex gap-9">
              {
                // maps of logo images in assest files logo-${} upto 5
                // 1. Logo-1, 2. Logo-2, 3. Logo-3, 4. Logo-4, 5. Logo-5
                Array.from({ length: 6 }).map((_, index) => (
                  <div key={index} className="flex items-center">
                    <Image
                      src={`/assest/logo-${index + 1}.svg`}
                      alt={`Logo ${index + 1}`}
                      width={100}
                      height={100}
                      className="w-24 h-auto object-cover"
                      priority
                    />
                  </div>
                ))
              }
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 border-t border-zinc-800 bg-transparent">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-base font-semibold leading-7 text-indigo-450">Deploy Smarter</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Everything you need to scale
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              {features.map((feature, index) => (
                <div key={`feature-${index}`} className="flex flex-col items-start p-6 rounded-2xl border border-zinc-800 bg-zinc-950/40 hover:border-zinc-700 transition-all duration-300">
                  <div className="rounded-lg bg-zinc-900 p-3">
                    {feature.icon}
                  </div>
                  <dt className="mt-4 font-semibold text-lg text-white">{feature.title}</dt>
                  <dd className="mt-2 leading-relaxed text-sm text-zinc-400">{feature.description}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 border-t border-zinc-800 bg-transparent">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-base font-semibold leading-7 text-indigo-400">Pricing Plans</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Simple, transparent pricing
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-lg grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3">
            {pricingPlans.map((plan, index) => (
              <div
                key={`plan-${index}`}
                className={`flex flex-col justify-between rounded-3xl p-8 ring-1 transition-all ${plan.popular
                  ? "bg-[#000d12]/90 ring-2 ring-indigo-500 shadow-2xl scale-105 z-10"
                  : "bg-[#000d12]/50 ring-zinc-800 hover:ring-zinc-700"
                  }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-x-4">
                    <h3 className="text-lg font-semibold leading-8 text-white">{plan.name}</h3>
                    {plan.popular && (
                      <span className="rounded-full bg-indigo-950 px-2.5 py-1 text-xs font-semibold leading-5 text-indigo-450">
                        Most Popular
                      </span>
                    )}
                  </div>
                  <p className="mt-4 text-sm leading-6 text-zinc-400">{plan.description}</p>
                  <p className="mt-6 flex items-baseline gap-x-1">
                    <span className="text-4xl font-bold tracking-tight text-white">{plan.price}</span>
                    {plan.price !== "Custom" && <span className="text-sm font-semibold leading-6 text-zinc-400">/month</span>}
                  </p>
                  <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-zinc-400">
                    {plan.features.map((feature, fIndex) => (
                      <li key={`feature-${index}-${fIndex}`} className="flex gap-x-3">
                        <Check className="h-5 w-5 flex-none text-indigo-400" aria-hidden="true" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <a
                  href="#"
                  className={`mt-8 block rounded-full py-2.5 px-3.5 text-center text-sm font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 transition-all ${plan.popular
                    ? "bg-indigo-600 text-white shadow-sm hover:bg-indigo-500"
                    : "bg-white text-black hover:bg-zinc-150"
                    }`}
                >
                  {plan.cta}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
