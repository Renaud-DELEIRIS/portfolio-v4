import { Icons } from "@/components/icons";
import { HomeIcon } from "lucide-react";

export const DATA = {
  name: "Renaud de LEIRIS",
  initials: "RdL",
  url: "https://renauddeleiris.me",
  location: "Lyon, France | Geneva, Switzerland",
  description:
    "Front-End Developer with nearly 4 years of experience, specializing in Next.js, React, and Tailwind CSS. Passionate about crafting efficient, scalable, and user-centric web applications.",
  phone: "+33 6 67 10 60 44",
  email: "renauddeleiris@gmail.com",
  resume: {
    fr: "/resume/rdl-resume-fr.pdf",
    en: "/resume/rdl-resume-en.pdf",
  },
  summary:
    "Front-End Developer with a strong foundation in modern web technologies, including **React**, **Next.js**, and **TypeScript**. Proven expertise in redesigning web interfaces, integrating blockchain systems, and optimizing user dashboards. Experienced working with international teams in Switzerland and France, delivering impactful projects in insurance, blockchain, and PLM industries.",
  avatarUrl: "/me.webp",
  skills: [
    "React",
    "Next.js",
    "Tailwind CSS",
    "Typescript",
    "Docker",
    "TRPC",
    "Vue.js",
    "Solid.js",
    "Redux",
    "Prisma",
    "Drizzle",
    "C++",
    "Emotion",
  ],
  navbar: [{ href: "/", icon: HomeIcon, label: "Home" }],
  contact: {
    email: "renaud.deleiris@example.com",
    tel: "+123456789",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/Renaud-DELEIRIS",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/renaud-de-leiris-505a621b3/",
        icon: Icons.linkedin,
        navbar: true,
      },
    },
  },
  work: [
    {
      company: "OPXLive",
      href: "https://emgsa.ch",
      location: "Remote",
      title: "Front-End Developer",
      logoUrl: "/opxlive.webp",
      start: "June 2024",
      end: "December 2024",
      description: `OPX Live is a unified platform that integrates token creation, trading, and streaming to support the evolving Creator Economy 2.0. Launched on December 28, 2024, it enables content creators to launch personal tokens, interact with their communities through live streaming, and engage in transparent token trading within the Solana blockchain ecosystem. The platform redistributes revenue by allocating a portion of transaction fees directly to verified creators and OPXL token holders, fostering a sustainable and balanced ecosystem. 
`,
      technologies: ["React.js", "Tailwind CSS", "TypeScript"],
    },
    {
      company: "EMG SA",
      href: "https://emgsa.ch",
      location: "Geneva, Switzerland",
      title: "Front-End Developer",
      logoUrl: "/emg.svg",
      start: "January 2023",
      end: "September 2024",
      description: `EMG SA is an independent Swiss financial advisory company founded in 2019, specializing in insurance brokerage, pension planning, and financial services for individuals and professionals. The company offers tailored solutions in health insurance, automobile coverage, liability insurance, private pension planning, and mortgage loans.`,
      technologies: ["Next.js", "Tailwind CSS", "TypeScript", "TRPC"],
    },
    {
      company: "FlipGG",
      href: "https://flip.gg",
      location: "Remote",
      title: "Lead Front-End Developer",
      logoUrl: "/flipgg.svg",
      start: "December 2022",
      end: "July 2023",
      description:
        "Flip.gg is a free-to-play crypto gaming platform that allows users to engage in various game modes—such as Lootbox, Battles, Wheel, Crash, and Upgrader—to win Solana NFTs and Memecoins. Launched in October 2022, the platform has awarded over 12 million prizes and accepts deposits in all tokens and Memecoins, providing flexibility for players. Regular community events, like the weekly 1k Rain, enhance player interaction and excitement. ",
      technologies: ["Next.js", "Emotion", "TypeScript"],
    },
    {
      company: "Ganister",
      href: "https://ganister.io",
      location: "Lyon, France",
      title: "Front-End Developer",
      logoUrl: "/ganister.png",
      start: "February 2022",
      end: "March 2023",
      description:
        "Ganister is a French software company specializing in graph-based Product Lifecycle Management (PLM) solutions. Their platform leverages graph database technology to manage complex product data relationships, enhancing flexibility and scalability in PLM processes. Ganister's solutions are designed to support the entire digital thread, from product requirements to maintenance, repair, and overhaul (MRO), aiming to improve innovation efficiency by delivering the right data to the right person at the right time.",
      technologies: ["React", "Redux", "Tailwind CSS", "Angular"],
    },
  ],
  education: [
    {
      school: "Epitech",
      href: "https://epitech.eu",
      degree: "Master in Information Technologies",
      logoUrl: "/epitech.webp",
      start: "2019",
      end: "2024",
    },
    {
      school: "Université Laval",
      href: "https://www.ulaval.ca",
      degree: "Computer Science Courses on Web Applications",
      logoUrl: "/ulaval.png",
      start: "2022",
      end: "2022",
    },
    {
      school: "Université Lyon 1",
      href: "https://www.univ-lyon1.fr",
      degree: "Electrical and Industrial Computer Science",
      logoUrl: "/lyon.webp",
      start: "2017",
      end: "2018",
    },
  ],
  languages: [
    { language: "French", level: "Native" },
    { language: "English", level: "Professional" },
  ],
  projects: [
    {
      title: "Empire Rent",
      dates: "December 2024",
      location: "Lyon, France",
      description:
        "Developed a rental platform for luxury cars, transfert and concierge services in Geneva, Switzerland. The platform allows users to book luxury cars, chauffeur services, and concierge services for events, business trips, and leisure activities.",
      technologies: ["Next.js", "Tailwind CSS"],
      image: "/empire-rent.png",
      links: [
        {
          href: "https://empire-rent.ch",
          title: "Empire Rent",
          icon: <Icons.globe className="size-3" />,
        },
      ],
    },
    {
      title: "OPX Live",
      dates: "June 2024 - December 2024",
      location: "Remote",
      description:
        "Developed a unified platform for content creators to launch personal tokens, interact with their communities through live streaming, and engage in transparent token trading within the Solana blockchain ecosystem.",
      technologies: ["React.js", "Tailwind CSS", "TypeScript"],
      image: "/opxlive.webp",
      links: [
        {
          href: "https://opxlive.com",
          title: "OPX Live",
          icon: <Icons.globe className="size-3" />,
        },
      ],
    },
    {
      title: "EMG SA",
      dates: "January 2023 - September 2024",
      location: "Geneva, Switzerland",
      description:
        "Designed and built a lead management dashboard, booking system, and showcase websites for EMG SA, a Swiss insurance brokerage firm. The project replaced existing tools like Calendly and improved operational efficiency.",
      technologies: ["Next.js", "Tailwind CSS", "TypeScript", "TRPC"],
      image: "/emg.svg",
      links: [
        {
          title: "EMG SA",
          href: "https://emgsa.ch",
          icon: <Icons.globe className="size-3" />,
        },
        {
          title: "Comparea",
          href: "https://comparea.ch",
          icon: <Icons.globe className="size-3" />,
        },
        {
          title: "Assurance maladies",
          href: "https://assurance-sante.comparea.ch/?step=for-who",
          icon: <Icons.globe className="size-3" />,
        },
        {
          title: "Assurance auto",
          href: "https://assurance-voiture.comparea.ch/?step=car_type",
          icon: <Icons.globe className="size-3" />,
        },
        {
          title: "Calendlly",
          href: "https://booking.emgsa.ch/?a=3&agent=nihel-bousbih",
          icon: <Icons.globe className="size-3" />,
        },
        {
          title: "Info 3eme pilier",
          href: "https://app.info-troisieme-pilier.ch/?step=STEP_ALREADY3P",
          icon: <Icons.globe className="size-3" />,
        },
      ],
    },
    {
      title: "OP Market",
      dates: "April 2023 - July 2023",
      location: "Remote",
      description:
        "Developed a centralized platform for gaming and entertainment enthusiasts, bridging traditional digital assets with blockchain technologies for secure transactions.",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "TRPC"],
      image: "/opmarket.webp",
    },
    {
      title: "Flip GG",
      dates: "December 2022 - July 2023",
      location: "Remote",
      description:
        "Developed the initial version of Flip.GG, a casino gaming platform on the Solana blockchain. Integrated games like Roulette and Crash, managed user connections, and implemented a cashback system.",
      technologies: ["Next.js", "Emotion", "TypeScript"],
      image: "/flipgg.svg",
      links: [
        {
          href: "https://flip.gg",
          title: "Flip.GG",
          icon: <Icons.globe className="size-3" />,
        },
      ],
    },
    {
      title: "Kweshtion",
      dates: "July 2023",
      location: "Remote",
      description: `
**Kweshtion** is an innovative application designed to foster knowledge sharing and discussions across a wide range of topics. Users can post questions on various subjects, from tech and science to arts and lifestyle, creating an engaging platform for curiosity and exploration.

### Key Features

- **Ask Questions**: Users can pose questions on any topic, sparking conversations and insights.
- **Answer Flexibility**: Multiple users can contribute diverse perspectives and detailed answers.
- **Comment and Interact**: Engage in meaningful discussions by commenting on answers, further enriching the conversation.

Kweshtion empowers its community to learn, share expertise, and connect through knowledge in a collaborative environment. Whether you're looking for specific advice or broad insights, Kweshtion makes it simple and interactive to engage with others.
`,
      technologies: ["Flutter"],
    },
    {
      title: "Boheme",
      dates: "2022 - 2024",
      location: "Lyon, France",
      description: `**Boheme** is a travel planning tool designed to simplify and enhance trip organization through a suite of features powered by AI. Developed as a school project, Boheme aims to make planning seamless, collaborative, and enjoyable for users.

### Key Features

- **Smart Calendar**: Organize your trip with a clear and intuitive calendar that tracks your itinerary.
- **Expense Sharing**: Easily manage group expenses and ensure everyone stays on the same page financially.
- **Activity Planner**: Leverage AI to suggest and plan activities tailored to your destination and preferences.

As part of this project, I was responsible for leading the **front-end development team**, ensuring that the interface was user-friendly, visually appealing, and functionally robust. Boheme reflects a blend of teamwork, innovation, and technology, creating a tool that transforms how users approach travel planning. `,
      technologies: ["React", "Tailwind CSS", "TypeScript"],
    },
    {
      title: "Ganister PLM",
      dates: "February 2022 - March 2023",
      location: "Lyon, France",
      description:
        "Migrated Ganister's configuration tool from Angular to React and developed a report generation and management system for users, enhancing the platform's usability for product lifecycle management.",
      technologies: ["React", "Redux", "Tailwind CSS", "Angular"],
      image: "/ganister.png",
    },
    {
      title: "Farmers World",
      dates: "2022",
      location: "Remote",
      description:
        "Built a blockchain-based farming simulation game on the WAX blockchain, enabling users to trade NFT assets like crops and tools in a virtual economy.",
      technologies: ["React", "TypeScript", "Blockchain"],
      image: "/farmersworld.webp",
      links: [
        {
          title: "Farmers World",
          href: "https://farmersworld.io",
          icon: <Icons.globe className="size-3" />,
        },
      ],
    },
  ],
} as const;
