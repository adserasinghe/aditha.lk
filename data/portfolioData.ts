import { ExpertiseCard, Testimonial, TimelineItem, PhilosophyPillar, Project, SkillGroup, BrandItem } from '../types/portfolio';

export const HERO_DATA = {
  headlinePrefix: "Hi, I'm ",
  headlineName: "ADITHA",
  headlineSuffix: ". Building Your ",
  headlineHighlight: "Digital Excellence",
  headlineEnd: ".",
  subheading: "A multi-disciplinary creator focused on designing and developing high-performance web experiences that merge aesthetics with functionality.",
  primaryCta: "View Projects",
  secondaryCta: "My Journey",
  // Using high quality Picsum images with reliable seeds matching the portrait and aesthetic
  heroImage: "https://6rhooijwwmhiclbs.public.blob.vercel-storage.com/AIEnhancer_IMG_20260127_081320.jpg",
  aboutImage: "https://picsum.photos/seed/adithagraduation2026/800/1000"
};

export const EXPERTISE_CARDS: ExpertiseCard[] = [
  {
    id: 'ui-ux',
    title: 'UI/UX Design',
    description: 'Creating intuitive, user-centric interfaces that provide seamless digital experiences across all devices.',
    iconName: 'Layout'
  },
  {
    id: 'web-dev',
    title: 'Web Development',
    description: 'Building fast, responsive, and SEO-optimized applications using the latest web technologies and best practices.',
    iconName: 'Code'
  },
  {
    id: 'graphic-design',
    title: 'Graphic Design',
    description: 'Integrating dynamic visual content and smooth animations to enhance storytelling and engagement.',
    iconName: 'Palette'
  },
  {
    id: 'social-media',
    title: 'Social Media Marketing',
    description: 'Strategizing and executing impactful social media campaigns to boost brand presence and engagement.',
    iconName: 'Share2'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    quote: "Aditha is an exceptional talent. He delivered a high-performance web application that perfectly captured our brand's vision while maintaining top-tier SEO standards.",
    author: "U Link Computer Systems",
    role: "Founder",
    company: "TechScale",
    avatar: "https://picsum.photos/seed/clientulink/100/100",
    rating: 5
  },
  {
    id: '2',
    quote: "The level of detail Aditha brings to graphic design is stunning. He created a cohesive brand identity that has significantly boosted our market engagement.",
    author: "LIVY SURF HOUSE",
    role: "Surf Coach",
    company: "Livy Surf",
    avatar: "https://picsum.photos/seed/clientlivy/100/100",
    rating: 5
  },
  {
    id: '3',
    quote: "Working with Aditha was a breeze. He's professional, responsive, and has a deep understanding of UI/UX principles that resulted in a highly intuitive user experience.",
    author: "Hansan Ashinsana",
    role: "Owner",
    company: "Hansa Computers",
    avatar: "https://picsum.photos/seed/clienthansan/100/100",
    rating: 5
  }
];

export const QUALITY_BADGES = [
  "Quality Focused",
  "SEO Optimized",
  "User Centric",
  "Future Ready"
];

export const ABOUT_NARRATIVE = [
  "Hello There! I'm Aditha Dinuja Serasinghe, and I'm thrilled to have you here. I'm a Front End Developer, Graphic Designer and Content Creator based in Weligama, Sri Lanka, passionate about seeking new things in Information Technology.",
  "From my Previous Experiences to my Achievements, my journey has been a thrilling ride, and I'm excited to share it with you. I believe in the power of my Beliefs or Values and strive for my Goals or Aspirations.",
  "When I'm not busy with activities, you can find me exploring my interests outside of work. Nature enthusiast, bookworm, and film lover—that's me."
];

export const WORKING_EXPERIENCE: TimelineItem[] = [
  {
    period: "2025 - PRESENT",
    role: "Social Media Manager",
    company: "U Link Computer Systems",
    description: "Leading the development of high-performance web applications using Next.js and Cloud architectures.",
    isCurrent: true
  },
  {
    period: "2024 - 2025",
    role: "Intern Front End Web Developer",
    company: "Nimitz World Wide",
    description: "Developed responsive websites and implemented SEO best practices for diverse client portfolios."
  },
  {
    period: "2020 - PRESENT",
    role: "Owner & Creative Designer",
    company: "Aditha Creation",
    description: "Crafted user-centric designs and Branding identities for successful startup brands.",
    isCurrent: true
  }
];

export const CORE_PHILOSOPHY: PhilosophyPillar[] = [
  {
    title: "My Mission",
    description: "To empower businesses through high-quality, scalable digital solutions that leave a lasting impact.",
    iconName: "target"
  },
  {
    title: "My Vision",
    description: "Staying at the forefront of emerging technologies to bridge the gap between imagination and reality.",
    iconName: "trending-up"
  },
  {
    title: "My Experience",
    description: "A diverse background ranging from startup fast-pacing to enterprise-level architecture stability.",
    iconName: "history"
  }
];

export const TECHNICAL_SKILLS: string[] = [
  "Next.js & React",
  "TypeScript",
  "Tailwind CSS",
  "Node.js",
  "Firebase",
  "Figma",
  "Adobe Photoshop",
  "Adobe Illustrator",
  "UX/UI Design",
  "Interaction Design",
  "Prototyping",
  "Responsive Web Design",
  "Brand Identity",
  "Graphic Design",
  "Logo Design",
  "Typography"
];

export const SKILL_GROUPS: SkillGroup[] = [
  {
    category: "Front-end & Web",
    skills: ["Next.js & React", "TypeScript", "Tailwind CSS", "Node.js", "Firebase", "Responsive Web Design"]
  },
  {
    category: "Design & UX/UI",
    skills: ["Figma", "Adobe Photoshop", "Adobe Illustrator", "UX/UI Design", "Interaction Design", "Prototyping"]
  },
  {
    category: "Branding & Typography",
    skills: ["Brand Identity", "Graphic Design", "Logo Design", "Typography"]
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'ecoshop',
    title: 'EcoShop E-commerce',
    category: 'Web Dev',
    description: 'A full-scale e-commerce redesign focusing on sustainability products. Built with Next.js, Stripe, and Tailwind.',
    longDescription: 'EcoShop is a modern, high-conversion e-commerce platform dedicated to eco-friendly consumer goods. Engineered with Next.js App Router for server-side rendering speed, integrated Stripe checkout workflows, and fully responsive Tailwind CSS layouts. Features instant search filtering, real-time cart synchronization, and WCAG AA accessibility compliance.',
    image: 'https://picsum.photos/seed/ecoshopfield/1200/800',
    tags: ['Next.js', 'TypeScript', 'Stripe', 'Tailwind CSS', 'Redux'],
    liveUrl: 'https://ecoshop-demo.example.com',
    githubUrl: 'https://github.com/aditha-serasinghe/ecoshop-next'
  },
  {
    id: 'insight-dashboard',
    title: 'Insight Dashboard',
    category: 'UI/UX',
    description: 'Complex data visualization dashboard for marketing agencies. Focused on clarity and real-time data handling.',
    longDescription: 'Designed and prototyped in Figma before frontend implementation, Insight Dashboard simplifies multi-channel ad analytics into clean, interactive charts. Utilizes custom dark-mode bento grids, real-time WebSocket metric updates, and customizable widget views designed specifically to reduce cognitive fatigue for agency executives.',
    image: 'https://picsum.photos/seed/insightmossdata/1200/800',
    tags: ['UI/UX Design', 'Figma', 'React', 'D3.js', 'WebSockets'],
    liveUrl: 'https://insight-dash.example.com'
  },
  {
    id: 'swifthealth',
    title: 'SwiftHealth App',
    category: 'Mobile',
    description: 'AI-powered healthcare mobile application for tracking personal fitness and dietary habits.',
    longDescription: 'SwiftHealth leverages machine learning models to analyze daily biometric inputs and provide personalized nutrition and exercise recommendations. Built with React Native and Firebase, featuring offline persistence, biometric authentication, and smooth micro-interactions.',
    image: 'https://picsum.photos/seed/swifthealthmountains/1200/800',
    tags: ['Mobile App', 'React Native', 'Firebase', 'AI / ML', 'iOS & Android'],
    liveUrl: 'https://swifthealth-app.example.com',
    githubUrl: 'https://github.com/aditha-serasinghe/swifthealth-mobile'
  },
  {
    id: 'nexus-branding',
    title: 'Zeebac Brand Identity & Apparel',
    category: 'Branding',
    description: 'Complete brand identity and athleisure apparel mockup system, including logo typography, merchandise packaging, and brand guidelines.',
    longDescription: 'A comprehensive brand architecture and merchandise design system developed for Zeebac Athleisure Innovation. The project included custom logotype typography, merchandise packaging mockups (hoodies, headwear, apparel tags, and boxes), color theory guidelines optimized for physical products, and digital media assets.',
    image: 'https://6rhooijwwmhiclbs.public.blob.vercel-storage.com/Gemini_Generated_Image_e3glqte3glqte3gl-clean.png',
    tags: ['Brand Identity', 'Apparel Design', 'Logo Design', 'Typography', 'Packaging'],
    liveUrl: 'https://www.behance.net/gallery/253532895/adserasinghe-portfolio'
  }
];

export const CONTACT_INFO = {
  email: "hello@aditha.lk",
  phone: "+94 71 889 6042",
  location: "Weligama, Sri Lanka",
  availability: "Currently open to freelance projects and full-time opportunities",
  socials: {
    github: "https://github.com/adserasinghe",
    linkedin: "https://linkedin.com/in/adserasinghe",
    twitter: "https://x.com/adserasinghe",
    facebook: "https://facebook.com/adserasinghe",
    behance: "https://www.behance.net/adserasinghe"
  }
};

export const ZENTIX_DATA = {
  badge: "MY BRAND",
  titlePrefix: "Aditha ",
  titleSuffix: "Creation",
  description: "Aditha Creation is my independent creative studio — delivering bespoke brand identities, typography systems, UI/UX designs, and modern digital experiences.",
  actions: [
    {
      label: "Aditha Creation Page",
      href: "https://adithacreation.vercel.app/",
      variant: "page" as const
    },
    {
      label: "Google Play Store",
      href: "https://play.google.com/store/apps",
      variant: "playstore" as const
    },
    {
      label: "Aditha Creation",
      href: "https://facebook.com/adithacreation",
      variant: "social" as const
    },
    {
      label: "mail@aditha.lk",
      href: "mailto:mail@aditha.lk",
      variant: "email" as const
    }
  ],
  metrics: [
    { value: "8+", label: "BRANDING RELEASE" },
    { value: "5+", label: "WEB PROJECTS" },
    { value: "LK", label: "BASED IN SL" },
    { value: "∞", label: "INNOVATIONS" }
  ]
};

export const BRANDS_DATA: BrandItem[] = [
  {
    id: "aditha-creation",
    name: "Aditha Creation",
    subtitle: "Design Studio & Visual Identity House",
    role: "Founder & Creative Lead",
    category: "Proprietary Studio",
    year: "2020 - Present",
    description: "My independent creative practice delivering bespoke visual identities, typography systems, UI/UX designs, and digital marketing collateral for ambitious brands.",
    tags: ["Brand Identity", "UI/UX Design", "Graphic Design", "Typography"],
    stats: [
      { label: "Established", value: "2020" },
      { label: "Projects", value: "60+" },
      { label: "Satisfaction", value: "100%" }
    ],
    badge: "Proprietary Brand",
    image: "https://picsum.photos/seed/adithacreationstudio/900/600",
    link: "https://www.behance.net/adserasinghe"
  }
];

export const BRAND_LOGOS_MARQUEE = [
  { name: "Aditha Creation", type: "Design Studio", highlight: true },
  { name: "Zeebac", type: "Athleisure Innovation", highlight: true },
  { name: "U Link Computer Systems", type: "IT Systems", highlight: false },
  { name: "Livy Surf House", type: "Hospitality Retreat", highlight: false },
  { name: "Nimitz World Wide", type: "Web Engineering", highlight: false },
  { name: "Hansa Computers", type: "Tech Retail", highlight: false }
];
