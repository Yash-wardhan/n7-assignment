import Image from "next/image";

const items = [
    { type: "text", content: "N7", blue: true },
    { type: "image", src: "/assets/star-1.svg", alt: "star" },
    { type: "text", content: "Say" },
    { type: "image", src: "/assets/hand-wave.svg", alt: "hand" },
    { type: "text", content: "to the new way of banking", bold: true },
    { type: "image", src: "/assets/star-1.svg", alt: "star" },
    { type: "text", content: "CB7", blue: true },
    { type: "image", src: "/assets/star-1.svg", alt: "star" },
    { type: "text", content: "Say" },
    { type: "image", src: "/assets/hand-wave.svg", alt: "hand" },
    { type: "text", content: "to the new way of banking", bold: true },
    { type: "image", src: "/assets/star-1.svg", alt: "star" },
];

function MarqueeItem({ item }) {
    if (item.type === "image") {
        return (
            <Image
                src={item.src}
                alt={item.alt}
                width={32}
                height={32}
                className="w-5 h-5 sm:w-14 sm:h-14 shrink-0"
            />
        );
    }
    return (
        <span className={`text-[20px] font-semibold sm:text-[36px] lg:text-[47px] shrink-0 whitespace-nowrap
            ${item.blue ? "text-[#00B4FD]" : "text-black"}
            
        `}>
            {item.content}
        </span>
    );
}

function SliderSection() {
    return (
        <div className="w-full overflow-hidden lg:h-[116px] flex flex-col justify-center item-center border-y border-zinc-800 py-3 sm:py-4"
            style={{ background: '#f7f7f7f7' }}>
            <div className="flex animate-marquee whitespace-nowrap text-black">
                {/* First copy */}
                <div className="flex items-center gap-4 sm:gap-6 px-4">
                    {items.map((item, index) => (
                        <MarqueeItem key={`a-${index}`} item={item} />
                    ))}
                </div>
                {/* Duplicate for seamless loop */}
                <div className="flex items-center gap-4 sm:gap-6 px-4" aria-hidden="true">
                    {items.map((item, index) => (
                        <MarqueeItem key={`b-${index}`} item={item} />
                    ))}
                </div>
                {/* Third copy for extra smoothness */}
                <div className="flex items-center gap-4 sm:gap-6 px-4" aria-hidden="true">
                    {items.map((item, index) => (
                        <MarqueeItem key={`c-${index}`} item={item} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default SliderSection;