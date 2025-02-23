import Image from "next/image"
import { ChevronDown } from "lucide-react"
import Navbar from "@/app/components/navbar"
import ServicesSection from "@/app/components/services-section"
import OurClients from "@/app/components/our-clients"
import BlogSection from "@/app/components/blog-section"
import Team from "./components/team/team"

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-900 text-white">
      <Navbar />
      <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden">
        {/* Hero section content */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://sjc.microlink.io/lOLdSzeZsZEia8DqbKbiobkoyRy4UTH8nyg7PFzcFA7yg9X0H6WRx9tSl7vkPCkbClYDzHXVU9b3sRE-OQV66g.jpeg"
            alt="Film equipment background"
            fill
            className="object-cover opacity-60"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="relative z-10 flex flex-col items-center gap-8 px-4 text-center">
          <div className="mb-4">
            <h2 className="text-2xl font-bold tracking-wider">
              FSW
              <span className="text-red-600">!</span>
              <span className="font-light"> FILMS</span>
            </h2>
          </div>

          <div className="space-y-4">
            <h1 className="text-4xl font-bold tracking-wider sm:text-6xl md:text-7xl">
              DOCUMENTARY
              <span className="block text-red-600">FILMS</span>
            </h1>
          </div>

          <div className="absolute bottom-8 animate-bounce">
            <ChevronDown className="h-8 w-8 text-white/70" />
          </div>
        </div>
      </div>

      <ServicesSection />
      <OurClients />
      <Team />
      <BlogSection />
    </main>
  )
}

