"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { ChevronLeft, ChevronRight, X } from "lucide-react"
import OverviewSection from "./overview-section"
import TechStackSection from "./tech-stack-section"
import FeaturesSection from "./features-section"
import { cn } from "@/lib/utils"
import { notFound } from "next/navigation"



export default function ProjectDetails({project}: {project: any}) {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  if(!project || !project.images) {
    notFound()
  }

  const images = project.images

  const openModal = (index: number) => {
    setCurrentImageIndex(index)
    setIsModalOpen(true)
  }

  // const closeModal = () => {
  //   setIsModalOpen(false)
  // }

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)
  }

  return (
    <div className={cn(isModalOpen?"hidden":"visible","space-y-12")}>
      <h1 className="text-2xl font-bold tracking-tighter sm:text-4xl xl:text-5xl/none">{project.title}</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="border rounded-2xl col-span-1 md:col-span-2 row-span-2 relative aspect-square">
          <Image
            src={images[0] || "/placeholder.svg"}
            alt="Project image 1"
            fill
            className="object-cover rounded-3xl cursor-pointer p-3"
            onClick={() => openModal(0)}
          />
        </div>
        <div className="border rounded-2xl relative aspect-square md:block hidden">
          <Image
            src={images[1] || "/placeholder.svg"}
            alt="Project image 2"
            fill
            className="object-cover rounded-lg cursor-pointer p-3"
            onClick={() => openModal(1)}
          />
        </div>
        <div className="border rounded-2xl relative aspect-square md:block hidden">
          <Image
            src={images[2] || "/placeholder.svg"}
            alt="Project image 3"
            fill
            className="object-cover rounded-lg cursor-pointer p-3"
            onClick={() => openModal(2)}
          />
        </div>
        <div className="border rounded-2xl relative aspect-square md:block hidden">
          <Image
            src={images[3] || "/placeholder.svg"}
            alt="Project image 3"
            fill
            className="object-cover rounded-lg cursor-pointer p-3"
            onClick={() => openModal(2)}
          />
        </div>
        <Button
          variant="outline"
          className="rounded-2xl w-full h-full aspect-square col-span-1 md:col-span-1 flex items-center justify-center text-md"
          onClick={() => openModal(0)}
        >
          View All
        </Button>
      </div>
      <div className="col-span-1 md:col-span-2 lg:col-span-4">
        <OverviewSection overview={project.overview} link={project.links[0]}/>
      </div>
      <div className="col-span-1 md:col-span-2 lg:col-span-4">
        <FeaturesSection features={project?.features} />
      </div>
      <div className="col-span-1 md:col-span-2 lg:col-span-4">
        <TechStackSection stack={project.technologies}/>
      </div>

      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="max-w-3xl">
          <div className="relative aspect-video">
            <Image
              src={images[currentImageIndex] || "/placeholder.svg"}
              alt={`Project image ${currentImageIndex + 1}`}
              fill
              className="object-contain"
            />
          </div>
          <Button
            variant="outline"
            size="icon"
            className="absolute left-4 top-1/2 transform -translate-y-1/2"
            onClick={prevImage}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="absolute right-4 top-1/2 transform -translate-y-1/2"
            onClick={nextImage}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </DialogContent>
      </Dialog>
    </div>
  )
}

