import Image from "next/image"
import { Film, Camera, Edit2, Music } from "lucide-react"
import type { JSX } from "react"

interface TeamMember {
    name: string
    role: string
    image: string
    icon: JSX.Element
}

export default function OurTeam() {
    const team: TeamMember[] = [
        {
            name: "Alex Morgan",
            role: "Director",
            image: "/placeholder.svg?height=400&width=400",
            icon: <Film className="h-5 w-5" />,
        },
        {
            name: "Sam Chen",
            role: "Cinematographer",
            image: "/placeholder.svg?height=400&width=400",
            icon: <Camera className="h-5 w-5" />,
        },
        {
            name: "Jordan Lee",
            role: "Editor",
            image: "/placeholder.svg?height=400&width=400",
            icon: <Edit2 className="h-5 w-5" />,
        },
        {
            name: "Taylor Reed",
            role: "Sound Designer",
            image: "/placeholder.svg?height=400&width=400",
            icon: <Music className="h-5 w-5" />,
        },
    ]

    return (
        <section className="bg-zinc-900  ">
            <div className="container px-4 md:px-6">
                {/* Section Header */}
                <div className="mb-16 text-center">
                    <h2 className="mb-4 text-3xl font-bold tracking-tight text-white md:text-4xl">Our Team</h2>
                    <div className="mx-auto mb-8 h-1 w-24 bg-red-600" />
                    <p className="mx-auto max-w-2xl text-zinc-400">
                        Meet the creative minds behind our award-winning documentary films. Each member brings unique expertise and
                        passion to every project.
                    </p>
                </div>

                {/* Team Grid */}
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                    {team.map((member) => (
                        <div key={member.name} className="group relative overflow-hidden rounded-lg bg-zinc-800">
                            {/* Image Container */}
                            <div className="aspect-square overflow-hidden">
                                <Image
                                    src={member.image || "/placeholder.svg"}
                                    alt={member.name}
                                    width={400}
                                    height={400}
                                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                                />
                            </div>

                            {/* Overlay with Details */}
                            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/70 p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                <div className="translate-y-4 transform space-y-2 text-center transition-transform duration-300 group-hover:translate-y-0">
                                    <div className="flex items-center justify-center gap-2">
                                        {member.icon}
                                        <h3 className="text-xl font-bold text-white">{member.name}</h3>
                                    </div>
                                    <p className="text-sm text-red-500">{member.role}</p>
                                </div>
                            </div>

                            {/* Bottom Info Bar */}
                            <div className="bg-zinc-800 p-4 text-center">
                                <h3 className="font-bold text-white">{member.name}</h3>
                                <p className="text-sm text-zinc-400">{member.role}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

