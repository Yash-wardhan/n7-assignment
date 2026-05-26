import React from "react";

export default function ActiveButton({ text, href = "#", className = "" }) {
  return (
    <a href={href}>
      <button
        className={`px-8 py-3 rounded-lg bg-gradient-to-b from-blue-500 to-blue-600 text-white focus:ring-2 focus:ring-blue-400 hover:shadow-xl hover:shadow-blue-500/20 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 font-medium cursor-pointer ${className}`}
      >
        {text}
      </button>
    </a>
  );
}
