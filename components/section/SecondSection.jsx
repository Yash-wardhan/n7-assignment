import Image from "next/image";
import InactiveButton from "../ui/InactiveButton";
import LearnMore from "../ui/LearMore";

const cardsData = [
    {
        image: "/assets/Icon-1.svg",
        title: "Core Banking CB7",
        description: "CB7 helps your financial institution improve the client experience, automate and optimize procedures, simplify banking operations for your employees, improve risk management, increase productivity, and ensure full regulatory compliance",
        link: ""
    },
    {
        image: "/assets/Icon-2.svg",
        title: "Digital Banking N7",
        description: "N7 brings full capabilities across strategy, human-centred design, operations, engineering and data science to create and deliver disruptive innovation. Our approach to building digital banks is specifically designed to help clients",
        link: ""
    },
    {
        image: "/assets/Icon-3.svg",
        title: "Open Banking",
        description: "Our API banking helps you to gain actionable insights, enable account aggregation, streamline customer onboarding, KYC, and payment initiation, offer predictive budgeting tools, and introduce enhanced credit scoring.",
        link: ""
    },
    {
        image: "/assets/Icon-4.svg",
        title: "Loan Origination System",
        description: "N7 brings full capabilities across strategy, human-centred design, operations, engineering and data science to create and deliver disruptive innovation. Our approach to building digital banks is specifically designed to help clients",
        link: ""
    },
    {
        image: "/assets/Icon-5.svg",
        title: "Loan Management System",
        description: "N7 brings full capabilities across strategy, human-centred design, operations, engineering and data science to create and deliver disruptive innovation. Our approach to building digital banks is specifically designed to help clients",
        link: ""
    }
];

function SecondSection() {
    return (
        <section className="relative max-w-7xl mx-auto py-12 px-4 lg:px-8 my-16 lg:my-32 flex flex-col lg:flex-row gap-12 lg:gap-16">

            {/* Left side */}
            <div className="w-full lg:w-1/2 flex flex-col items-center text-center lg:items-start lg:text-left">
                <h1 className="text-[28px] sm:text-[32px] lg:text-[37px] font-[400] max-w-[450px] text-white bg-clip-text text-transparent bg-gradient-to-b from-white to-zinc-400">
                    All of our solutions are tailor-made to your needs
                </h1>
                <InactiveButton href="" text="REQUEST DEMO" className="text-[15px] mt-8" />
            </div>

            {/* Right side */}
            <div className="w-full lg:w-1/2 relative">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    {cardsData.map((card, index) => (
                        <div key={index} className="flex flex-col">
                            <Image
                                src={card.image}
                                alt={card.title}
                                width={50}
                                height={50}
                                className="mb-4"
                            />
                            <h4 className="text-[16px] sm:text-[18px] lg:text-[20px] font-[400] text-[#E9F4F9]">
                                {card.title}
                            </h4>
                            <p className="text-[13px] sm:text-[14px] lg:text-[15px] font-[400] text-zinc-400 mt-3 leading-relaxed">
                                {card.description}
                            </p>
                            <div className="mt-4">
                                <LearnMore href={card.link} />
                            </div>
                        </div>
                    ))}
                </div>
                <div className="absolute inset-x-0 top-[800px] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-55">
                    <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-blue-600 to-indigo-600 opacity-20 sm:-left-[calc(80%-70rem)] sm:w-[50rem]"></div>
                </div>
            </div>

        </section>
    );
}

export default SecondSection;