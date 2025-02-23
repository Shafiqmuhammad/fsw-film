"use client"

import Image from "next/image"
import Link from "next/link"
import { Calendar, User, RefreshCw } from "lucide-react"
import { useState, useEffect } from "react"
import { generateBlogContent } from "@/app/actions/generate-blog-content"

interface BlogPost {
    id: string
    title: string
    excerpt: string
    image: string
    author: string
    date: string
}

export default function BlogSection() {
    const [blogPosts, setBlogPosts] = useState<BlogPost[]>([
        {
            id: "1",
            title: "The Art of Documentary Storytelling",
            excerpt: "",
            image: "/placeholder.svg",
            author: "Alex Morgan",
            date: "2025-02-15",
        },
        {
            id: "2",
            title: "Behind the Scenes: Our Latest Project",
            excerpt: "",
            image: "/placeholder.svg",
            author: "Sam Chen",
            date: "2025-02-10",
        },
        {
            id: "3",
            title: "Emerging Technologies in Documentary Filmmaking",
            excerpt: "",
            image: "/placeholder.svg",
            author: "Jordan Lee",
            date: "2025-02-05",
        },
    ])

    const [isLoading, setIsLoading] = useState(false)
    const [generatingPostId, setGeneratingPostId] = useState<string | null>(null)

    useEffect(() => {
        generateAllExcerpts()
    }, [])

    const generateAllExcerpts = async () => {
        setIsLoading(true)
        try {
            const updatedPosts = await Promise.all(
                blogPosts.map(async (post) => {
                    const content = await generateBlogContent(post.title)
                    return { ...post, excerpt: content.split(" ").slice(0, 20).join(" ") + "..." }
                }),
            )
            setBlogPosts(updatedPosts)
        } catch (error) {
            console.error("Error generating blog excerpts:", error)
        } finally {
            setIsLoading(false)
        }
    }

    const generateSingleExcerpt = async (postId: string) => {
        setGeneratingPostId(postId)
        try {
            const postToUpdate = blogPosts.find((post) => post.id === postId)
            if (postToUpdate) {
                const content = await generateBlogContent(postToUpdate.title)
                const updatedPost = { ...postToUpdate, excerpt: content.split(" ").slice(0, 20).join(" ") + "..." }
                setBlogPosts(blogPosts.map((post) => (post.id === postId ? updatedPost : post)))
            }
        } catch (error) {
            console.error(`Error generating excerpt for post ${postId}:`, error)
        } finally {
            setGeneratingPostId(null)
        }
    }

    return (
        <section className="bg-zinc-900 py-16 md:py-24">
            <div className="container px-4 md:px-6">
                {/* Section Header */}
                <div className="mb-16 text-center">
                    <h2 className="mb-4 text-3xl font-bold tracking-tight text-white md:text-4xl">From the Blog</h2>
                    <div className="mx-auto mb-8 h-1 w-24 bg-red-600" />
                    <p className="mx-auto max-w-2xl text-zinc-400">
                        Insights, stories, and behind-the-scenes looks at the world of documentary filmmaking.
                    </p>
                </div>

                {/* Blog Posts Grid */}
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {blogPosts.map((post) => (
                        <article
                            key={post.id}
                            className="group relative overflow-hidden rounded-lg bg-zinc-800 shadow-lg transition-transform duration-300 hover:-translate-y-2"
                        >
                            <Link href={`/blog/${post.id}`} className="block">
                                <div className="aspect-video overflow-hidden">
                                    <Image
                                        src={post.image || "/placeholder.svg"}
                                        alt={post.title}
                                        width={600}
                                        height={400}
                                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                                    />
                                </div>
                                <div className="p-6">
                                    <h3 className="mb-2 text-xl font-bold text-white">{post.title}</h3>
                                    <p className="mb-4 text-zinc-400">
                                        {isLoading && post.excerpt === "" ? "Generating content..." : post.excerpt}
                                    </p>
                                    <div className="flex items-center justify-between text-sm text-zinc-500">
                                        <div className="flex items-center space-x-2">
                                            <User className="h-4 w-4" />
                                            <span>{post.author}</span>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <Calendar className="h-4 w-4" />
                                            <time dateTime={post.date}>
                                                {new Date(post.date).toLocaleDateString("en-US", {
                                                    year: "numeric",
                                                    month: "long",
                                                    day: "numeric",
                                                })}
                                            </time>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                            <button
                                onClick={(e) => {
                                    e.preventDefault()
                                    generateSingleExcerpt(post.id)
                                }}
                                className="absolute bottom-2 right-2 rounded-full bg-red-600 p-2 text-white opacity-0 transition-opacity duration-300 hover:bg-red-700 group-hover:opacity-100"
                                disabled={generatingPostId === post.id}
                            >
                                <RefreshCw className={`h-4 w-4 ${generatingPostId === post.id ? "animate-spin" : ""}`} />
                            </button>
                        </article>
                    ))}
                </div>

                {/* View All Posts Button */}
                <div className="mt-12 text-center">
                    <Link
                        href="/blog"
                        className="inline-block rounded-md bg-red-600 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-red-700"
                    >
                        View All Posts
                    </Link>
                </div>
            </div>
        </section>
    )
}

