import React from 'react'

const LearnMore = ({ href = "#", className = "" }) => {
  return (
    <a href={href} className={`group inline-flex items-center gap-2 cursor-pointer py-3 sm:py-4 no-underline ${className}`}>
      <span className="learn-more-underline relative text-[11px] sm:text-[12px] lg:text-[13px] text-[#00B4FD] font-bold tracking-[0.2em]">
        LEARN MORE
      </span>
      <span className="text-[#00B4FD] text-sm sm:text-base transition-transform duration-300 ease-in-out group-hover:translate-x-2">
        →
      </span>
    </a>
  )
}

export default LearnMore