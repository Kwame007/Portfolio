"use client"

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

import { Particles } from "@/components/magicui/particles"

export default function ParticlesDemo({children}: {children: React.ReactNode}) {
  const { resolvedTheme } = useTheme()
  const [color, setColor] = useState("#ffffff")

  useEffect(() => {
    setColor(resolvedTheme === "dark" ? "#ffffff" : "#000000")
  }, [resolvedTheme])

  return (
    <main className="flex flex-col min-h-[100dvh] space-y-10 w-full">
     {children}
      <Particles className="absolute inset-0 z-0" quantity={100} ease={80} color={color} refresh />
    </main>
  )
}

