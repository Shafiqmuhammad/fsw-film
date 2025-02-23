"use client"

import Image from "next/image"
import OurClients from "@/app/constents/our-clients"

export default function ClientsSection() {
    const clients = OurClients()

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
                    <h2 className="mb-4 text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl">Our Clients</h2>
                    <div className="mx-auto mb-8 h-1 w-24 bg-red-600" />
                    <p className="mx-auto max-w-2xl text-lg text-zinc-400">
                        Here is just a few of our many clients. We are extremely proud of our partnership with every single one of
                        them.
                    </p>
                </div>

                {/* Clients Grid */}
                <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    {clients.map((client) => (
                        <div
                            key={client.name}
                            className="group relative flex items-center justify-center rounded-lg bg-zinc-800/50 p-8 transition-all duration-300 hover:bg-zinc-800"
                        >
                            <div className="relative h-20 w-full">
                                <Image
                                    src={client.logo || "/placeholder.svg"}
                                    alt={client.name}
                                    fill
                                    className="object-contain transition-opacity duration-300 group-hover:opacity-80"
                                />
                            </div>
                            {/* Hover Overlay */}
                            <div className="absolute inset-0 flex items-center justify-center rounded-lg bg-black/0 opacity-0 transition-all duration-300 group-hover:bg-black/40 group-hover:opacity-100">
                                <span className="text-lg font-semibold text-white">{client.name}</span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Additional Text */}
                <div className="mt-12 text-center">
                    <p className="text-lg text-zinc-400">
                        We take pride in delivering exceptional documentary films and creative content for our diverse clientele.
                    </p>
                </div>
            </div>
        </section>
    )
}

