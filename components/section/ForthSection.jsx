"use client"
import Image from "next/image"
import ActiveButton from "../ui/ActiveButton"
import LearnMore from "../ui/LearnMore"
import InactiveButton from "../ui/InactiveButton"
import { useEffect, useRef } from "react"

function useAnimateOnView(ref) {
    useEffect(() => {
        // Small defer ensures React has finished hydrating before we touch classList
        const timer = setTimeout(() => {
            const el = ref.current
            if (!el) return

            const rect = el.getBoundingClientRect()
            if (rect.top < window.innerHeight) {
                el.classList.add('in-view')
                return
            }

            const observer = new IntersectionObserver(
                (entries) => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting) {
                            entry.target.classList.add('in-view')
                            observer.unobserve(entry.target)
                        }
                    })
                },
                { threshold: 0, rootMargin: '0px 0px -50px 0px' }
            )
            observer.observe(el)
            return () => observer.unobserve(el)
        }, 0)

        return () => clearTimeout(timer)
    }, [ref])
}

function AnimatedDiv({ className, animation, style, children }) {
    const ref = useRef(null)
    useAnimateOnView(ref)
    return (
        <div ref={ref} className={`anim-${animation} ${className}`} style={style}>
            {children}
        </div>
    )
}

function ForthSection() {
    return (
        <div className="w-full bg-[#E9F4F9] py-20">
            <div className="relative max-w-7xl mx-auto flex flex-col lg:flex-row gap-10 lg:gap-6 px-6 lg:px-8 py-10 lg:py-24 text-black">

                <img className="blue-line-cutter"
                    src="/assets/BlueLineCutter.svg"
                    alt="blue-line-cutter"
                    style={{ position: 'absolute', top: '50%', left: '0', transform: 'translate(-50%, -50%)', width: '50%', height: 'auto', pointerEvents: 'none', zIndex: 0 }}
                />

                {/* Left */}
                <AnimatedDiv
                    animation="up"
                    className="w-full lg:w-[35%] flex flex-col gap-6 text-center lg:text-left items-center lg:items-start"
                    style={{ position: 'relative', zIndex: 1 }}
                >
                    <h1 className="font-medium text-[28px] sm:text-[36px] lg:text-[48px] leading-tight">
                        Digital banking <br /> out-of-the-box
                    </h1>
                    <p className="text-[13px] sm:text-[14px] lg:text-[16px] font-normal max-w-[400px] leading-[28px] opacity-80">
                        N7 helps your financial institution improve the client experience, automate and optimize procedures
                    </p>
                    <ActiveButton text="REQUEST DEMO" href="#" />
                    <LearnMore  />
                </AnimatedDiv>

                {/* Right */}
                <div className="w-full lg:w-[65%] flex flex-col gap-16 lg:gap-32" style={{ position: 'relative', zIndex: 1 }}>

                    {/* Row 1 */}
                    <div className="flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-8 relative">
                        <Image
                            src="/assets/N7BlueCutter.svg"
                            alt="" className="n7-watermark" width={1000} height={1000}
                            style={{ position: 'absolute', top: '20%', left: '17.5%', transform: 'translate(-50%, -50%)', width: '90%', height: 'auto', pointerEvents: 'none', zIndex: 0 }}
                        />
                        <AnimatedDiv
                            animation="left"
                            className="w-full sm:w-[45%] max-w-[280px] sm:max-w-none shrink-0 mx-auto sm:mx-0"
                            style={{ position: 'relative', zIndex: 1 }}
                        >
                            <Image src="/assets/iPhone13Pro.svg" className="w-full h-auto object-contain" width={400} height={700} alt="iPhone N7 Banking App" />
                        </AnimatedDiv>
                        <AnimatedDiv
                            animation="right"
                            className="w-full sm:w-[55%]"
                            style={{ position: 'relative', zIndex: 1 }}
                        >
                            <Content
                                title="Fully compliant with regulatory requirement"
                                dec="The governance of risk management with regulations is achieved by our risk management framework that is fully integrated to work with digital bank's operational-risk protocols and procedures."
                                points={["Pre-integrated Security System", "Fully Compliant With Regulatory Requirement", "Digitally Connected Core"]}
                            />
                        </AnimatedDiv>
                    </div>

                    {/* Row 2 */}
                    <div className="flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-8">
                        <AnimatedDiv animation="left" className="w-full sm:w-[55%]">
                            <Content
                                title="No legacy IT systems"
                                dec="Our Digital Banking solution and multilayered approach help financial institutions take advantage of digital transformation by ensuring customer trust and regulatory compliance."
                                points={["Adaptive & Intelligent API monetization", "Ambient User Experience", "Cloud-native With lower TCO"]}
                            />
                        </AnimatedDiv>
                        <AnimatedDiv
                            animation="right"
                            className="w-full sm:w-[45%] max-w-[280px] sm:max-w-none shrink-0 mx-auto sm:mx-0"
                        >
                            <Image src="/assets/iPhone13Pro-1.svg" className="w-full h-auto object-contain" width={400} height={700} alt="iPhone N7 Banking App" />
                        </AnimatedDiv>
                    </div>

                    {/* Row 3 */}
                    <div className="flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-8">
                        <AnimatedDiv
                            animation="left"
                            className="w-full sm:w-[45%] max-w-[280px] sm:max-w-none shrink-0 mx-auto sm:mx-0"
                        >
                            <Image src="/assets/iPhone13Pro-2.svg" className="w-full h-auto object-contain" width={400} height={700} alt="iPhone N7 Banking App" />
                        </AnimatedDiv>
                        <AnimatedDiv animation="right" className="w-full sm:w-[55%]">
                            <Content
                                title="No traditional branches"
                                dec="Our Digital Banking out-of-the-box helps you to accelerate innovation while reducing risks and optimising operational costs for a seamless branchless experience."
                                points={["Branchless & Paperless Banking", "Digital Transformation Capability", "Optimized, Adoptable and Scalable"]}
                            />
                        </AnimatedDiv>
                    </div>

                </div>
            </div>

            {/* Lower — CTA Banner */}
            <div className="mt-12 lg:mt-20 px-4 lg:px-8">
                <div
                    className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8 px-6 sm:px-10 py-10 lg:py-14 rounded-3xl"
                    style={{
                        backgroundImage: 'linear-gradient(to right, #031E2A, #000D12), url(/assets/CB7.svg)',
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover, 50% auto',
                        backgroundPosition: 'center, right',
                        backgroundBlendMode: 'overlay'
                    }}
                >
                    <div className="w-full lg:w-[55%] text-center lg:text-left">
                        <h1 className="text-[24px] sm:text-[30px] lg:text-[44px] font-[400] text-white leading-tight">
                            Take the full advantage of going paper-less now.
                        </h1>
                        <p className="text-zinc-400 text-[13px] sm:text-[14px] lg:text-[16px] mt-4">
                            CB7 helps your financial institution improve the client experience, automate and optimize procedures, simplify banking operations
                        </p>
                    </div>
                    <div className="w-full lg:w-[45%] flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-end">
                        <InactiveButton text="CONTACT US" href="/learn-more" />
                        <ActiveButton text="REQUEST DEMO" href="/contact" />
                    </div>
                </div>
            </div>
        </div>
    )
}

function Content({ title = "", dec = "", points = [] }) {
    return (
        <div className="flex flex-col gap-4 p-4 sm:p-5 lg:p-6 h-full">
            <h3 className="text-[13px] sm:text-[14px] lg:text-[16px] font-semibold text-black">{title}</h3>
            <p className="text-[11px] sm:text-[12px] lg:text-[15px] rounded-xl mt-3 leading-relaxed">{dec}</p>
            <div className="flex flex-col gap-3 mt-1">
                {points.map((point, index) => (
                    <div key={index} className="flex items-center gap-3">
                        <div className="shrink-0">
                            <Image src="/assets/BlueTick.svg" width={28} height={28} alt="" />
                        </div>
                        <p className="text-[12px] sm:text-[13px] lg:text-[14px] text-black font-[400]">{point}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ForthSection