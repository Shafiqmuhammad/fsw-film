interface Client {
    name: string
    logo: string
    url?: string
}

export default function OurClients(): Client[] {
    return [
        {
            name: "Al-Khidmat",
            logo: "/placeholder.svg?height=100&width=200",
        },
        {
            name: "The Punjab School",
            logo: "/placeholder.svg?height=100&width=200",
        },
        {
            name: "Lahore Government Board",
            logo: "/placeholder.svg?height=100&width=200",
        },
        {
            name: "Afaq",
            logo: "/placeholder.svg?height=100&width=200",
        },
        {
            name: "Education & Relief",
            logo: "/placeholder.svg?height=100&width=200",
        },
        {
            name: "High Potential Ideas",
            logo: "/placeholder.svg?height=100&width=200",
        },
        {
            name: "PPA",
            logo: "/placeholder.svg?height=100&width=200",
        },
    ]
}
