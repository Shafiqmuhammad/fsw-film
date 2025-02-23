"use server"

function generatePlaceholderContent(title: string): string {
  const placeholders = [
    "Exploring the intricacies of documentary filmmaking, this post delves into the art of storytelling through real-life narratives. We examine techniques for capturing authentic moments and weaving them into compelling narratives that resonate with audiences.",
    "Behind the scenes, our team faces unique challenges in capturing authentic moments for our latest documentary project. From unexpected weather conditions to navigating complex social dynamics, we share our experiences and lessons learned.",
    "As technology evolves, so does the landscape of documentary filmmaking. This post examines cutting-edge tools and techniques that are revolutionizing how we capture, edit, and distribute documentary content, opening new possibilities for storytellers.",
    "In this article, we discuss the ethical considerations that documentary filmmakers must navigate. From representing subjects fairly to addressing sensitive topics, we explore the balance between storytelling and responsibility.",
    "Funding is a crucial aspect of documentary filmmaking. We break down various funding models, from traditional grants to crowdfunding, and offer insights on how to secure resources for your next documentary project.",
  ]
  // Use the title to deterministically select a placeholder
  const index = title.length % placeholders.length
  return placeholders[index]
}

export async function generateBlogContent(title: string) {
  // For now, we'll always return placeholder content
  return generatePlaceholderContent(title)
}

