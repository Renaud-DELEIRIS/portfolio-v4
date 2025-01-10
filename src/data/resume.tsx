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
  summary:
    "Front-End Developer with a strong foundation in modern web technologies, including React, Next.js, and TypeScript. Proven expertise in redesigning web interfaces, integrating blockchain systems, and optimizing user dashboards. Experienced working with international teams in Switzerland and France, delivering impactful projects in insurance, blockchain, and PLM industries.",
  avatarUrl: "/me.png",
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
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
  ],
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
      company: "EMG SA",
      href: "https://emgsa.ch",
      badges: [],
      location: "Geneva, Switzerland",
      title: "Front-End Developer",
      logoUrl: "/emg.svg",
      start: "January 2023",
      end: "September 2024",
      description:
        "Redesigned multiple showcase websites and forms, created a lead management dashboard, and built an online booking system as a replacement for Calendly.",
      technologies: ["Next.js", "Tailwind CSS", "TypeScript", "TRPC"],
    },
    {
      company: "Ganister",
      href: "https://ganister.io",
      badges: [],
      location: "Lyon, France",
      title: "Front-End Developer",
      logoUrl: "/ganister.png",
      start: "February 2022",
      end: "March 2023",
      description:
        "Migrated G-config tool from Angular to React and developed a reporting generation tool for users.",
      technologies: ["React", "Redux", "Tailwind CSS", "Angular"],
    },
    {
      company: "FlipGG",
      href: "https://flip.gg",
      badges: [],
      location: "Remote",
      title: "Front-End Developer",
      logoUrl: "/flipgg.svg",
      start: "July 2022",
      end: "November 2022",
      description:
        "Implemented blockchain-integrated games like Roulette and Crash, managed Solana user connections, and developed a cashback system.",
      technologies: ["Vue.js", "Emotion", "TypeScript"],
    },
  ],
  education: [
    {
      school: "Epitech",
      href: "https://epitech.eu",
      degree: "Expert in Information Technologies",
      logoUrl: "/epitech.png",
      start: "2019",
      end: "2024",
    },
    {
      school: "Université Lyon 1",
      href: "https://www.univ-lyon1.fr",
      degree: "Electrical and Industrial Computer Science",
      logoUrl: "/lyon1.png",
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
      title: "Flip GG",
      dates: "July 2022 - November 2022",
      location: "Remote",
      description:
        "Developed the initial version of Flip.GG, a casino gaming platform on the Solana blockchain. Integrated games like Roulette and Crash, managed user connections, and implemented a cashback system.",
      technologies: ["Vue.js", "Emotion", "TypeScript"],
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
      title: "Ganister PLM",
      dates: "February 2022 - March 2023",
      location: "Lyon, France",
      description:
        "Migrated Ganister's configuration tool from Angular to React and developed a report generation and management system for users, enhancing the platform's usability for product lifecycle management.",
      technologies: ["React", "Redux", "Tailwind CSS", "Angular"],
      image: "/ganister.png",
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
        }
      ],
    },
    {
      title: "Farmers World",
      dates: "2022",
      location: "Remote",
      description:
        "Built a blockchain-based farming simulation game on the WAX blockchain, enabling users to trade NFT assets like crops and tools in a virtual economy.",
      technologies: ["React", "TypeScript", "Blockchain"],
      image: "/images/farmersworld.png",
      links: [
        {
          title: "Farmers World",
          href: "https://farmersworld.io",
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
      image: "/images/opmarket.png",
    },
  ],
  
} as const;
