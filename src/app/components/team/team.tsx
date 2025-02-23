"use client";
import { useState } from "react";
import Wrapper from "./wrapper";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import { team } from "@/app/constents/team";

const Team = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section className="bg-primary text-foreground py-12 relative overflow-hidden">
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute top-0 inset-0 w-full h-full object-cover"
        style={{ zIndex: -1 }}
      >
        <source
          src="/images/featuredDevelopers/featuredDevelopers.mp4"
          type="video/mp4"
        />
        <p>Your browser does not support HTML5 video.</p>
      </video>

      <Wrapper>
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl">
            Our Team
          </h2>
          <div className="mx-auto mb-8 h-1 w-24 bg-red-600" />
          <p className="mx-auto max-w-2xl text-lg text-zinc-400">
            Professional & outstanding ideas of our passionate team make us unique in every sense.
          </p>
        </div>

        <div className="flex mt-8 gap-x-6 mx-auto gap-y-8 flex-col-reverse md:flex-row">
          {/* Responsive, dynamic grid layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.id}
                className="relative rounded-xl overflow-hidden group h-full shadow-lg shadow-white"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                onMouseEnter={() => setActiveIndex(index)}
                onMouseLeave={() => setActiveIndex(null)}
                whileHover={{
                  scale: 1.03,
                  transition: { duration: 0.2 }
                }}
              >
                {/* Glass Card Background */}
                <div className="absolute inset-0 bg-gradient-to-br bg-transparent backdrop-blur-md z-0"></div>
                <div className="absolute inset-0 border-white/20 rounded-xl backdrop-blur-sm z-0"></div>

                {/* Animated Profile Image */}
                <motion.div
                  className="relative h-80 overflow-hidden"
                  animate={activeIndex === index ? { scale: 1.05 } : { scale: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-700 blur-[1px] group-hover:blur-0"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />

                  {/* Glowing border on hover */}
                  {activeIndex === index && (
                    <motion.div
                      className="absolute inset-0 border-2 border-cyan-400 rounded-xl opacity-70"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}

                  {/* Interactive Overlay */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t to-transparent flex flex-col justify-center items-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: activeIndex === index ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.div
                      className="flex flex-col gap-4"
                      initial={{ y: 20, opacity: 0 }}
                      animate={activeIndex === index ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
                      transition={{ duration: 0.3, delay: 0.1 }}
                    >
                      <Link href={member.profileLink}>
                        <motion.button
                          className="px-6 py-3 bg-purple-600/80 hover:bg-purple-500 backdrop-blur-sm rounded-full text-white text-sm font-medium flex items-center justify-center gap-2 transition-all duration-300 w-48 shadow-lg shadow-purple-900/50"
                          whileHover={{ scale: 1.05, backgroundColor: 'rgba(168, 85, 247, 0.8)' }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                          </svg>
                          View Profile
                        </motion.button>
                      </Link>
                    </motion.div>
                  </motion.div>
                </motion.div>

                {/* Member Card Details */}
                <div className="relative p-6 bg-gradient-to-t border shadow-white shadow-lg to-transparent z-10">
                  <h3 className="text-white text-xl font-bold mb-1 flex items-center">
                    {member.name}
                    {member.verified && (
                      <span className="ml-2 text-cyan-400">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      </span>
                    )}
                  </h3>
                  <p className="text-purple-300 font-medium mb-2">{member.role}</p>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {member.skills && member.skills.slice(0, 3).map((skill: string, i: number) => (
                      <span key={i} className="px-2 py-1 text-xs rounded-full bg-white/10 text-purple-200">
                        {skill}
                      </span>
                    ))}
                    {member.skills && member.skills.length > 3 && (
                      <span className="px-2 py-1 text-xs rounded-full bg-white/10 text-purple-200">
                        +{member.skills.length - 3}
                      </span>
                    )}
                  </div>
                  <p className="text-white font-medium mb-2">{member.tagline}</p>
                  <p className="text-gray-300 text-sm line-clamp-2">{member.bio}</p>

                  {/* Social Links */}
                  {member.social && (
                    <div className="flex mt-4 space-x-3">
                      {member.social.github && (
                        <motion.a
                          href={member.social.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.2, color: "#9333ea" }}
                          className="text-gray-400 hover:text-white transition duration-200"
                        >
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                          </svg>
                        </motion.a>
                      )}
                      {member.social.twitter && (
                        <motion.a
                          href={member.social.twitter}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.2, color: "#06b6d4" }}
                          className="text-gray-400 hover:text-white transition duration-200"
                        >
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                          </svg>
                        </motion.a>
                      )}
                      {member.social.linkedin && (
                        <motion.a
                          href={member.social.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.2, color: "#7e22ce" }}
                          className="text-gray-400 hover:text-white transition duration-200"
                        >
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                          </svg>
                        </motion.a>
                      )}
                    </div>
                  )}
                </div>

                {/* Animated glint effect on hover */}
                {activeIndex === index && (
                  <motion.div
                    className="absolute inset-0 opacity-20 overflow-hidden pointer-events-none"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.2 }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.div
                      className="w-20 h-full bg-gradient-to-r from-transparent via-white to-transparent absolute"
                      initial={{ left: -100 }}
                      animate={{ left: ['0%', '100%'] }}
                      transition={{
                        duration: 1.5,
                        ease: "easeInOut",
                        repeat: Infinity,
                        repeatType: "mirror",
                        repeatDelay: 0.5
                      }}
                    />
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default Team;
