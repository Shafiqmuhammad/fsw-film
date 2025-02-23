// team.ts – Team data for FSW FILMS

interface TeamMember {
  id: number;
  name: string;
  role: string;
  tagline: string;
  bio: string;
  image: string;
  video?: string; // Optional video URL
  profileLink: string;
  verified?: boolean;
  skills?: string[];
  social?: {
    github?: string;
    twitter?: string;
    linkedin?: string;
  };
}

export const team: TeamMember[] = [
  {
    id: 1,
    name: "Faisal Warraich",
    role: "Founder",
    tagline: "Visionary Storyteller",
    bio: "Faisal is the creative force behind FSW FILMS, leading the team with his expertise in direction, filmmaking, marketing, and design.",
    image: "/images/team/faisal-warriach.jpg",
    profileLink: "/team/faisal-warraich",
    verified: true,
    skills: ["Direction", "Film Making", "Marketing", "Drawing"],
    social: {
      linkedin: "https://www.linkedin.com/in/faisalwarraich"
    }
  },
  {
    id: 2,
    name: "Umar Farooq Warraich",
    role: "Director",
    tagline: "Crafting Visual Masterpieces",
    bio: "Umar brings a keen eye for detail and a passion for visual storytelling, ensuring every project meets the highest creative standards.",
    image: "/images/team/umar.jpg",
    profileLink: "/team/umar-farooq-warraich",
    verified: true,
    skills: ["Management", "Quality Check"],
    social: {
      linkedin: "https://www.linkedin.com/in/umarfarooqwarraich"
    }
  },
  {
    id: 3,
    name: "Ashfaq Ahmad",
    role: "IT Consultant",
    tagline: "Tech-Savvy Problem Solver",
    bio: "Ashfaq leverages his technical expertise to drive innovation and streamline operations at FSW FILMS.",
    image: "/images/team/ashfaq-ahmed.jpg",
    profileLink: "/team/ashfaq-ahmad",
    verified: true,
    skills: ["IT Management", "Technical Consulting"],
    social: {
      linkedin: "https://www.linkedin.com/in/ashfaqahmad"
    }
  },
  {
    id: 4,
    name: "Tashfeen Atiq",
    role: "Production Head",
    tagline: "Master of Production",
    bio: "Tashfeen oversees production with a meticulous approach, ensuring every project is delivered with excellence.",
    image: "/images/team/tashfeen-atiq.jpg",
    profileLink: "/team/tashfeen-atiq",
    verified: true,
    skills: ["Video Editing", "Animation"],
    social: {
      linkedin: "https://www.linkedin.com/in/tashfeenatiq"
    }
  },
  {
    id: 5,
    name: "Aqib Shafiq",
    role: "Design Head",
    tagline: "Creative Visionary",
    bio: "Aqib leads the design team with innovative ideas and a passion for visual artistry, crafting compelling visuals for every project.",
    image: "/images/team/aqib-shafiq.jpg",
    profileLink: "/team/aqib-shafiq",
    verified: true,
    skills: ["Design", "Editing", "Cinematography"],
    social: {
      linkedin: "https://www.linkedin.com/in/aqibshafiq"
    }
  },
  {
    id: 6,
    name: "Hasnain Haider",
    role: "Writer",
    tagline: "Wordsmith Extraordinaire",
    bio: "Hasnain brings stories to life with his expertise in script and screenwriting, adding depth and emotion to every narrative.",
    image: "/images/team/hasnain-haider.jpg",
    profileLink: "/team/hasnain-haider",
    verified: true,
    skills: ["Script Writing", "Screen Writing"],
    social: {
      linkedin: "https://www.linkedin.com/in/hasnainhaider"
    }
  }
];
