"use client"
import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

type Slide = {
  src: string
  title: string
}

export default function FadeCarousel({
  slides,
  interval = 4000,
}: {
  slides: Slide[]
  interval?: number
}) {
  const [index, setIndex] = useState(0)

  // random start
  useEffect(() => {
    if (!slides.length) return
    setIndex(Math.floor(Math.random() * slides.length))
  }, [slides.length])

  // autoplay
  useEffect(() => {
    if (!slides.length) return

    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length)
    }, interval)

    return () => clearInterval(id)
  }, [slides.length, interval])

  if (!slides.length) return null

  return (
    <div className="relative w-full h-full overflow-hidden rounded-2xl">

      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          <img
            src={slides[index].src}
            alt={slides[index].title}
            className="w-full h-full object-cover"
          />

          {/* title overlay */}
          <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/70 to-transparent p-6">
            <h3 className="text-white text-lg font-semibold">
              {slides[index].title}
            </h3>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}