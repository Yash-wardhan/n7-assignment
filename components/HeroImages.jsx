"use client";
import { useRef, useState } from "react";
import Image from "next/image";

export default function HeroImages() {
  const containerRef = useRef(null);
  const [transform, setTransform] = useState({ rotateX: 0, rotateY: 0, x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const mouseX = e.clientX - centerX;
    const mouseY = e.clientY - centerY;

    // Normalize to -1 to 1
    const normalizedX = mouseX / (rect.width / 2);
    const normalizedY = mouseY / (rect.height / 2);

    setTransform({
      rotateX: -normalizedY * 12,
      rotateY: normalizedX * 12,
      x: normalizedX,
      y: normalizedY,
    });
  };

  const handleMouseEnter = () => setIsHovering(true);
  const handleMouseLeave = () => {
    setIsHovering(false);
    setTransform({ rotateX: 0, rotateY: 0, x: 0, y: 0 });
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative w-full"
      style={{
        perspective: "1200px",
        perspectiveOrigin: "50% 50%",
      }}
    >
      {/* Main 3D container */}
      <div
        style={{
          transform: `rotateX(${transform.rotateX}deg) rotateY(${transform.rotateY}deg)`,
          transition: isHovering ? "transform 0.1s ease-out" : "transform 0.6s cubic-bezier(0.23, 1, 0.32, 1)",
          transformStyle: "preserve-3d",
        }}
        className="relative w-full"
      >
        {/* Main Image — Woman with laptop */}
        <div
          className="relative rounded-2xl w-[100%] overflow-hidden shadow-2xl"
          style={{
            transform: "translateZ(0px)",
            transformStyle: "preserve-3d",
          }}
        >
          <Image
            src="/assets/HeroSectionImages.png"
            alt="Woman using banking app"
            width={600}
            height={450}
            className="w-full h-auto object-cover rounded-2xl"
            priority
          />
          {/* Subtle gradient overlay for depth */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent rounded-2xl" />
        </div>

        {/* Right Top Card — Banking Dashboard */}
        <div
          className="absolute -top-4 -right-6 sm:-top-6 sm:-right-8 lg:-top-8 lg:-right-10 w-[55%] sm:w-[50%] lg:w-[70%]"
          style={{
            transform: `translateZ(60px) translateX(${transform.x * 15}px) translateY(${transform.y * 10}px)`,
            transition: isHovering ? "transform 0.1s ease-out" : "transform 0.6s cubic-bezier(0.23, 1, 0.32, 1)",
            transformStyle: "preserve-3d",
            filter: "drop-shadow(0 25px 50px rgba(0, 0, 0, 0.4))",
          }}
        >
          <Image
            src="/assets/rightTop.png"
            alt="Banking dashboard showing $42,295.00 USD balance"
            width={600}
            height={600}
            className="w-full h-auto rounded-xl"
            priority
          />
        </div>

        {/* Left Bottom Card — Recent Activity */}
        <div
          className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 lg:-bottom-8 lg:-left-8 w-[55%] sm:w-[50%]"
          style={{
            transform: `translateZ(40px) translateX(${transform.x * -10}px) translateY(${transform.y * -8}px)`,
            transition: isHovering ? "transform 0.1s ease-out" : "transform 0.6s cubic-bezier(0.23, 1, 0.32, 1)",
            transformStyle: "preserve-3d",
            filter: "drop-shadow(0 20px 40px rgba(0, 0, 0, 0.35))",
          }}
        >
          <Image
            src="/assets/leftBottom.png"
            alt="Recent activity card showing transactions"
            width={400}
            height={200}
            className="w-full h-auto rounded-xl"
            priority
          />
        </div>
      </div>
    </div>
  );
}
