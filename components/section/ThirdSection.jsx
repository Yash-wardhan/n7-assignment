import React from 'react'
import ActiveButton from '../ui/ActiveButton'
import Image from 'next/image'

function ThirdSection() {
    return (
        <section
            className="my-12 lg:my-20 px-4 lg:px-8"
            style={{ background: 'url(/assets/CB7.svg) no-repeat center center' }}
        >
            <div className="max-w-7xl mx-auto">

                {/* Top — Text + Image */}
                <div className="flex flex-col lg:flex-row items-center justify-between gap-10">

                    {/* Left */}
                    <div className="flex flex-col gap-4 text-center lg:text-left w-full lg:w-1/2">
                        <h1 className="text-[28px] sm:text-[36px] lg:text-[48px] xl:text-[53px] font-[400] text-white leading-tight max-w-[650px] mx-auto lg:mx-0">
                            A complete cloud-based core banking.
                        </h1>
                        <p className="text-[14px] sm:text-[15px] lg:text-[16px] font-[400] text-zinc-400 max-w-[450px] mx-auto lg:mx-0">
                            Faster time to market with our cloud-based core banking services
                        </p>
                        <div className="flex justify-center lg:justify-start mt-4">
                            <ActiveButton text="REQUEST DEMO" href="/contact" />
                        </div>
                    </div>

                    {/* Right */}
                    <div className="w-full lg:w-1/2">
                        <Image
                            src="/assets/Screen-2.svg"
                            alt="CB7 Dashboard"
                            width={1020}
                            height={1020}
                            className="w-full h-auto object-contain"
                        />
                    </div>

                </div>

                {/* Bottom — Image */}
                <div className="mt-12 lg:mt-20 w-full">
                    <Image
                        src="/assets/Screen-1.svg"
                        alt="Core banking screen"
                        width={1020}
                        height={1020}
                        className="w-full h-auto object-contain"
                    />
                </div>

            </div>
        </section>
    )
}

export default ThirdSection