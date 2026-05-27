import React from "react";
import HeroImages from "../HeroImages/HeroImages";
import InactiveButton from "../ui/InactiveButton";
import ActiveButton from "../ui/ActiveButton";
import Image from "next/image";

function HeroSection() {
    return (
        <section className="relative min-h-screen flex justify-center items-center overflow-hidden pt-24 pb-16 lg:pt-32 lg:pb-24">

            <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">

                {/* Hero Content */}
                <div className="flex flex-col lg:flex-row justify-between gap-10 lg:gap-16 items-center">

                    {/* Left Column */}
                    <div className="text-center lg:text-left max-w-xl mx-auto lg:mx-0">
                        <h1 className="text-3xl font-medium sm:text-4xl lg:text-5xl xl:text-6xl text-white bg-clip-text text-transparent bg-gradient-to-b from-white to-zinc-400 leading-tight">
                            The new foundation of modern banking
                        </h1>

                        <p className="mt-5 text-base sm:text-lg leading-relaxed text-zinc-400">
                            We drive innovation and growth, provide seamless customer experience and operational excellence
                        </p>

                        <div className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-4">
                            <ActiveButton text="Request Demo" href="#pricing" />
                            <InactiveButton text="Contact Us" href="#contact" />
                        </div>
                    </div>

                    {/* Right Column — Hero Images */}
                    <div className="relative w-full max-w-[550px] mx-auto lg:mx-0 py-8 px-4">
                        <div className="absolute inset-0 -z-10">
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] lg:w-[500px] lg:h-[500px] rounded-full bg-blue-600 opacity-20 blur-[100px]" />
                            <div className="absolute top-1/2 left-1/2 -translate-x-[30%] -translate-y-[70%] w-[200px] h-[200px] sm:w-[250px] sm:h-[250px] lg:w-[300px] lg:h-[300px] rounded-full bg-indigo-600 opacity-20 blur-[80px]" />
                        </div>
                        <HeroImages />
                    </div>

                </div>

                {/* Trusted By */}
                <div className="mt-12 lg:mt-16 flex flex-col items-center lg:items-start gap-4">
                    <p className="text-sm font-semibold text-zinc-400">Trusted By:</p>
                    <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 sm:gap-8 lg:gap-10">
                        {Array.from({ length: 6 }).map((_, index) => (
                            <div key={index} className="flex items-center">
                                <Image
                                    src={`/assets/logo-${index + 1}.svg`}
                                    alt={`Logo ${index + 1}`}
                                    width={100}
                                    height={40}
                                    className="w-16 sm:w-20 lg:w-24 h-auto object-contain"
                                    priority
                                />
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}

export default HeroSection;