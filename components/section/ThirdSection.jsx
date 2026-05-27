import React from 'react'
import ActiveButton from '../ui/ActiveButton'
import LearnMore from '../ui/LearnMore'
import Image from 'next/image'
import InactiveButton from '../ui/InactiveButton'

function ThirdSection() {
    const points = [
        { id: 1, text: "Customer-On Boarding" },
        { id: 2, text: "Managing deposits and withdrawals" },
        { id: 3, text: "Transaction management" },
        { id: 4, text: "Interest Calculation" },
        { id: 5, text: "Payments processing (cash, cheques, mandates, NEFT, RTGS etc)" },
        { id: 6, text: "CRM Activities" },
        { id: 7, text: "Configuring New Banking Products" },
        { id: 8, text: "Loan disbursal and Loan management" },
        { id: 9, text: "Establishing criteria for minimum balances, interest rates, number of withdrawals allowed and so on." }
    ]

    return (
        <section className="my-12 lg:my-20 overflow-hidden">

            {/* Top — Text Left + Image Right flush */}
            <div
                className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-10"
                style={{ background: 'url(/assets/CB7.svg) no-repeat' }}
            >
                {/* Left */}
                <div className="flex flex-col gap-4 text-center lg:text-left w-full lg:w-[45%] px-6 lg:pl-16 xl:pl-24">
                    <h1 className="text-[26px] sm:text-[34px] lg:text-[44px] xl:text-[53px] font-[400] text-white leading-tight max-w-[600px] mx-auto lg:mx-0">
                        A complete cloud-based core banking.
                    </h1>
                    <p className="text-[13px] sm:text-[14px] lg:text-[16px] font-[400] text-zinc-400 max-w-[400px] mx-auto lg:mx-0">
                        Faster time to market with our cloud-based core banking services
                    </p>
                    <div className="flex flex-col items-center lg:items-start gap-4 mt-2">
                        <ActiveButton text="REQUEST DEMO" href="/contact" />
                        <LearnMore href="/learn-more" />
                    </div>
                </div>

                {/* Right — flush to edge */}
                <div className="w-[85%] lg:w-[45%] -mr-18 lg:-mr-8 xl:-mr-16">
                    <Image
                        src="/assets/Screen-2.svg"
                        alt="CB7 Dashboard"
                        width={500}
                        height={300}
                        className="w-full h-auto object-contain object-left"
                    />
                </div>
            </div>

            {/* Middle — Image Left flush + Text Right */}
            <div className="mt-12 lg:mt-20 w-full flex flex-col lg:flex-row justify-between items-center gap-8 lg:gap-10">

                {/* Image flush to left */}
                <div className="w-[85%] lg:w-[45%] -ml-18 lg:-ml-8 xl:-ml-16">
                    <Image
                        src="/assets/Screen-1.svg"
                        alt="Core banking screen"
                        width={800}
                        height={600}
                        className="w-full h-auto object-contain object-right"
                    />
                </div>

                {/* Text */}
                <div className="flex flex-col gap-4 text-center lg:text-left w-full lg:w-[45%] px-6 lg:pr-16 xl:pr-24">
                    <h1 className="text-[26px] sm:text-[30px] lg:text-[38px] font-[400] text-white leading-tight">
                        Run a more efficient, flexible, and digitally connected core banking system
                    </h1>
                    <p className="text-zinc-400 text-[13px] lg:text-[15px]">What you will get:</p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {points.map((point) => (
                            <div key={point.id} className="flex items-start gap-2">
                                <Image
                                    src="/assets/BlueTick.svg"
                                    alt="tick"
                                    width={20}
                                    height={20}
                                    className="shrink-0 mt-0.5"
                                />
                                <p className="text-[12px] lg:text-[14px] text-zinc-400 text-left">{point.text}</p>
                            </div>
                        ))}
                    </div>

                    <div className="flex justify-center lg:justify-start">
                        <LearnMore href="/learn-more" />
                    </div>
                </div>
            </div>

            {/* Lower — CTA Banner */}
            <div className="my-12 lg:my-20 px-4 lg:px-8">
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
                    {/* Left */}
                    <div className="w-full lg:w-[55%] text-center lg:text-left">
                        <h1 className="text-[26px] sm:text-[32px] lg:text-[44px] font-[400] text-white leading-tight">
                            Take the full advantage of going paper-less now.
                        </h1>
                        <p className="text-zinc-400 text-[13px] sm:text-[14px] lg:text-[16px] mt-4">
                            CB7 helps your financial institution improve the client experience, automate and optimize procedures, simplify banking operations
                        </p>
                    </div>

                    {/* Right — Buttons */}
                    <div className="w-full lg:w-[45%] flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-end">
                        <InactiveButton text="CONTACT US" href="/learn-more" className='font-[400]' />
                        <ActiveButton text="REQUEST DEMO" href="/contact" className='font-[400]'/>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default ThirdSection