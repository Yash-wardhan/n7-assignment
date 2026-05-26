import React from 'react'
import ActiveButton from '../ui/ActiveButton'
import Image from 'next/image'

function ThirdSection() {
    return (
        <section className="my-20" style={{ background: 'url(/assets/CB7.svg) no-repeat' }}>
            <div className='flex justify-between'>
                {/* left side  */}
                <div className="flex flex-col gap-2 text-center lg:text-left ml-40">
                    <h1 className='text-[53px] font-[400] max-w-[650px]'>A complete cloud-based core banking.</h1>
                    <p className='text-[16px] font-[400] text-zinc-400 max-w-[450px]'>Faster time to market with our cloud-based core banking services</p>
                    <ActiveButton text="REQUEST DEMO" href="/contact" className="text-[15px] mt-8" />
                </div>
                {/* right side  */}
                <div>
                    <Image
                        src="/assets/Screen-2.svg"
                        alt="CB7"
                        width={1020}
                        height={1020}
                        className='w-full h-full object-contain'
                    />
                </div>
            </div>
            {/* bottom  */}
            <div className='flex my-20'>
                <div>
                <Image src="/assets/Screen-1.svg" alt='core banking'
                    width={1020}
                    height={1020} className='w-full h-full object-contain' />
                </div>
                <div className='flex items-center justify-center w-full'></div>
            </div>
        </section>
    )
}

export default ThirdSection