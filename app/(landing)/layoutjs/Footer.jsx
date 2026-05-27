import Image from "next/image";
import Link from "next/link";

const solutions = [
    { label: "Core Banking CB7", href: "/" },
    { label: "Digital Banking N7", href: "/" },
    { label: "Open Banking", href: "/" },
    { label: "Loan Origination System", href: "/" },
    { label: "Loan Management System", href: "/" },
    { label: "Digital Transformation", href: "/" },
];

const n7Banking = [
    { label: "About Us", href: "/" },
    { label: "Solutions", href: "/" },
    { label: "Contact", href: "/" },
    { label: "Company", href: "/" },
    { label: "Careers", href: "/" },
    { label: "Insights", href: "/" },
    { label: "Core Team", href: "/" },
    { label: "Brand Center", href: "/" },
];

const socials = [
    { label: "LinkedIn", href: "/" },
    { label: "X", href: "/" },
];

const offices = [
    {
        city: "London",
        address: "Linktia Infosystems Ltd – CB7, 26 Main Road Sundridge, TN14 6EP, England, United Kingdom.",
    },
    {
        city: "Dubai",
        address: "Linktia Infosystems Ltd – CB7, Jumeirah Business, Center 5 Cluster W, Jumeirah Lakes Towers, Dubai, United Arab Emirates",
    },
    {
        city: "India",
        address: "Linktia Infosystems Ltd – CB7, Nirmal, Anand Nagar, Suncity Road, Pune, Maharashtra, 411041, India",
    },
];

function FooterLink({ label, href }) {
    return (
        <Link href={href}
            className="flex items-center justify-between gap-4 text-zinc-400 hover:text-white transition-colors duration-200 text-[13px] lg:text-[14px] group py-1.5">
            <span>{label}</span>
            <span className="text-zinc-600 group-hover:text-white transition-colors">
                <Image src={"/assets/ArrowBlue.svg"} alt="right" width={10} height={10} />
            </span>
        </Link>
    );
}

function Footer() {
    return (
       <footer className="w-full py-16 lg:py-20 relative overflow-hidden">

            <div className="absolute inset-0 -z-20" style={{ background: '#000D12' }} />

            <div className="absolute inset-x-0 -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[60%]">
                <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-blue-600 to-indigo-600 opacity-10 sm:left-[50%] sm:w-[50rem]" />
            </div>

            <div className="max-w-7xl mx-auto px-6 lg:px-0">

                {/* Main Layout — Logo Left, Content Right */}
                <div className="flex flex-col justify-between lg:flex-row gap-12 lg:gap-20">

                    {/* Left — Logo */}
                    <div className="shrink-0 lg:w-[420px]">
                        <Image
                            src="/assets/N7.svg"
                            alt="N7"
                            width={200}
                            height={200}
                            className="w-[140px] lg:w-[200px] h-auto"
                        />
                    </div>

                    {/* Right — Top Offices + Divider + Bottom Links */}
                    <div>
                        <div className="flex flex-col w-full">

                            {/* Top — Offices */}
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                                {offices.map((office, index) => (
                                    <div key={index}>
                                        <h4 className="text-white text-[14px] font-[500] mb-3">{office.city}</h4>
                                        <p className="text-zinc-400 text-[13px] leading-relaxed">{office.address}</p>
                                    </div>
                                ))}
                            </div>

                            {/* Bottom — Link Columns */}
                            {/* ✅ my-18 doesn't exist in Tailwind default scale, use my-16 or my-20 */}
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 my-16">

                                {/* Solutions */}
                                <div>
                                    <h4 className="text-white text-[14px] font-[500] mb-3">Solutions</h4>
                                    {solutions.map((item, index) => (
                                        <FooterLink key={index} label={item.label} href={item.href} />
                                    ))}
                                </div>

                                {/* N7 Banking */}
                                <div>
                                    <h4 className="text-white text-[14px] font-[500] mb-3">N7 Banking</h4>
                                    {n7Banking.map((item, index) => (
                                        <FooterLink key={index} label={item.label} href={item.href} />
                                    ))}
                                </div>

                                {/* Our Socials */}
                                <div>
                                    <h4 className="text-white text-[14px] font-[500] mb-3">Our Socials</h4>
                                    {socials.map((item, index) => (
                                        <FooterLink key={index} label={item.label} href={item.href} />
                                    ))}
                                </div>

                            </div>
                        </div>

                        {/* Divider */}
                        <div className="w-full h-px bg-zinc-800 mt-12 mb-6" />

                        {/* Copyright */}
                        <p className="text-zinc-600 text-[12px] leading-relaxed text-center lg:text-left">
                            Copyright © 2022 by Linktia Infosystems Limited — [CB7 and N7 as Commercial Brand] — [Registered under the Companies Act 2006 in England and Wales | Number of Incorporation 13100992]
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;