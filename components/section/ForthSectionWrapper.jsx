"use client"
import dynamic from "next/dynamic"
const ForthSection = dynamic(() => import("./ForthSection"), { ssr: false })
export default ForthSection