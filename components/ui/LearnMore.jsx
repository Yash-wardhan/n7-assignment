import React from 'react'

const LearnMore = ({ href = "#", className = "" }) => {
  return (
    <a href={href} className={`group inline-flex items-center gap-2 cursor-pointer py-3 sm:py-4 no-underline ${className}`}>
      <span className="relative text-[11px] sm:text-[12px] lg:text-[13px] text-[#00B4FD] font-bold tracking-[0.2em]
        after:content-[''] after:absolute after:-bottom-1.5 after:left-0 
        after:h-[1px] after:w-[45%] after:bg-[#00B4FD]
        after:transition-[width] after:duration-[350ms] after:ease-in-out
        group-hover:after:w-full">
        LEARN MORE
      </span>
      <span className="text-[#00B4FD] text-sm sm:text-base transition-transform duration-300 ease-in-out group-hover:translate-x-2">
        →
      </span>
    </a>
  )
}

export default LearnMore