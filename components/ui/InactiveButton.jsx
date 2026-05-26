import React from "react";

export default function InactiveButton({ text, href = "#", className = "text" }) {
  return (
    <a
      href={href}
      className={`px-8 py-3 rounded-lg border border-white bg-transparent text-white focus:ring-2 focus:ring-blue-400 hover:shadow-xl hover:border-zinc-600 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 font-medium inline-block text-center ${className}`}
    >
      {text}
    </a>
  );
}
