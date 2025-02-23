"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Film, Video, Users, Music, PlaySquare, MonitorPlay, Mic } from "lucide-react"
import type { JSX } from "react"

interface Project {
    id: string
    title: string
    categories: string[]
    image: string
    link: string
}

interface Category {
    id: string
    name: string
    icon: JSX.Element
}

export default function ServicesSection() {
    const [activeCategory, setActiveCategory] = useState("all")

    const categories: Category[] = [
        { id: "all", name: "All", icon: <Film className="h-4 w-4" /> },
        { id: "documentary", name: "Documentary", icon: <Video className="h-4 w-4" /> },
        { id: "events", name: "Events", icon: <Users className="h-4 w-4" /> },
        { id: "social-media", name: "Social Media", icon: <PlaySquare className="h-4 w-4" /> },
        { id: "songs", name: "Songs", icon: <Music className="h-4 w-4" /> },
        { id: "tv-commercials", name: "TV Commercials", icon: <MonitorPlay className="h-4 w-4" /> },
        { id: "voice-over", name: "Voice Over", icon: <Mic className="h-4 w-4" /> },
    ]

    const projects: Project[] = [
        {
            id: "1",
            title: "Lahore Cantonment Board Documentary",
            categories: ["documentary", "tv-commercials"],
            image: "/placeholder.svg?height=400&width=600",
            link: "#",
        },
        {
            id: "2",
            title: "Educational Campaign",
            categories: ["social-media", "documentary"],
            image: "/placeholder.svg?height=400&width=600",
            link: "#",
        },
        {
            id: "3",
            title: "Corporate Event Coverage",
            categories: ["events"],
            image: "/placeholder.svg?height=400&width=600",
            link: "#",
        },
        {
            id: "4",
            title: "Brand Commercial",
            categories: ["tv-commercials"],
            image: "/placeholder.svg?height=400&width=600",
            link: "#",
        },
        {
            id: "5",
            title: "Music Production",
            categories: ["songs"],
            image: "/placeholder.svg?height=400&width=600",
            link: "#",
        },
        {
            id: "6",
            title: "Voice Over Project",
            categories: ["voice-over"],
            image: "/placeholder.svg?height=400&width=600",
            link: "#",
        },
    ]

    const filteredProjects =
        activeCategory === "all" ? projects : projects.filter((project) => project.categories.includes(activeCategory))

    return (
        <section className="relative bg-zinc-900 py-24">
            {/* Background with overlay */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="https://sjc.microlink.io/lOLdSzeZsZEia8DqbKbiobkoyRy4UTH8nyg7PFzcFA7yg9X0H6WRx9tSl7vkPCkbClYDzHXVU9b3sRE-OQV66g.jpeg"
                    alt="Film equipment background"
                    fill
                    className="object-cover opacity-20"
                />
                <div className="absolute inset-0 bg-black/60" />
            </div>

            <div className="container relative z-10 mx-auto px-4 md:px-6">
                {/* Section Header */}
                <div className="mb-16 text-center">
                    <h2 className="mb-4 text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl">Our Services</h2>
                    <div className="mx-auto mb-8 h-1 w-24 bg-red-600" />
                    <p className="mx-auto max-w-2xl text-lg text-zinc-400">Our Featured Works and Case Studies so far</p>
                </div>

                {/* Category Filters */}
                <div className="mb-12">
                    <div className="flex flex-wrap items-center justify-center gap-4">
                        {categories.map((category) => (
                            <button
                                key={category.id}
                                onClick={() => setActiveCategory(category.id)}
                                className={`flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-colors
                  ${activeCategory === category.id
                                        ? "bg-red-600 text-white"
                                        : "bg-zinc-800 text-zinc-400 hover:bg-zinc-700 hover:text-white"
                                    }`}
                            >
                                {category.icon}
                                {category.name}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Projects Grid */}
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {filteredProjects.map((project) => (
                        <motion.div
                            key={project.id}
                            layout
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="group relative overflow-hidden rounded-lg bg-zinc-800"
                        >
                            <Link href={project.link} className="block">
                                <div className="aspect-video overflow-hidden">
                                    <Image
                                        src={project.image || "/placeholder.svg"}
                                        alt={project.title}
                                        width={600}
                                        height={400}
                                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                                    />
                                </div>
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                                <div className="absolute inset-0 flex items-end p-6">
                                    <div className="translate-y-4 transform space-y-2 text-left transition-transform duration-300 group-hover:translate-y-0">
                                        <h3 className="text-lg font-bold text-white">{project.title}</h3>
                                        <p className="text-sm text-zinc-300">
                                            {project.categories
                                                .map((cat) => {
                                                    const category = categories.find((c) => c.id === cat)
                                                    return category ? category.name : cat
                                                })
                                                .join(", ")}
                                        </p>
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>

                {/* Load More Button */}
                <div className="mt-12 text-center">
                    <Link
                        href="/portfolio"
                        className="inline-flex items-center justify-center rounded-md bg-red-600 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2 focus:ring-offset-zinc-900"
                    >
                        View All Projects
                    </Link>
                </div>
            </div>
        </section>
    )
}

