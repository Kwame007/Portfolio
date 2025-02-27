import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Clement Adjei",
  initials: "CA",
  url: "https://dillion.io",
  location: "Accra, GH",
  locationLink: "https://www.google.com/maps/place/accra",
  description:
    "Frontend Developer with a passion for building responsive and user-friendly web applications.",
  summary:
    ["After transitioning into frontend development, I’ve focused on building and scaling web applications with a strong emphasis on user experience. I hold a degree in Information Technology and attended [Codetrain](https://www.codetrainafrica.com), a coding Bootcamp where I gained valuable hands-on skills to thrive in this field. I’m committed to continuously improving my skills and exploring new technologies to build innovative solutions.","In my spare time, I’m usually watching TV shows or documentaries, playing video games occasionally, hanging out with my buddies, or running."],
  avatarUrl: "/me.png",
  skills: [
    "JavaScript",
    "React",
    "Next.js",
    "Typescript",
    "TailwindCSS",
    "Firebase",
    "Git",
    "Prisma",
    "MongoDB",
    "Supabase",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "clementnyarkoadjei007@gmail.com",
    tel: "+233559339232",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/Kwame007",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/clement-adjei-2474aa1b2/",
        icon: Icons.linkedin,

        navbar: true,
      },
      // X: {
      //   name: "X",
      //   url: "https://dub.sh/dillion-twitter",
      //   icon: Icons.x,

      //   navbar: true,
      // },
      // Youtube: {
      //   name: "Youtube",
      //   url: "https://dub.sh/dillion-youtube",
      //   icon: Icons.youtube,
      //   navbar: true,
      // },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Meqasa",
      href: "https://meqasa.com/",
      badges: [],
      location: "Hybrid",
      title: "UI Engineer",
      logoUrl: "",
      start: "March 2023",
      end: "Present",
      description:
        "Collaborated with the project manager to create an innovative design concept for the Meqasa website. Partnered with the lead developer and project manager to convert new designs for the Meqasa website into interactive prototypes. Design and implement interactive components for the new mobile application, enhancing user engagement and overall experience.",
    },
    {
      company: "Bonsu Capital fund",
      badges: [],
      href: "https://bonsucapital.com/",
      location: "Remote",
      title: "Frontend Developer (Contract)",
      logoUrl: "",
      start: "January 2024",
      end: "September 2024",
      description:
        "Designed and styled the client-facing dashboard for the Bonsu Capital fund management web application, improving user accessibility and functionality. Collaborated with the project manager to implement a client-side authentication feature, enhancing user data security and protecting sensitive information. Integrated the Paystack payment API to implement a user contributions feature, boosting transaction efficiency and enhancing the overall user experience. Conducted quality assurance testing to ensure cross-browser compatibility and mobile responsiveness, guaranteeing a seamless user experience across all devices.",
    },
    {
      company: "Meqasa",
      href: "https://meqasa.com/",
      badges: [],
      location: "Accra, Ghana",
      title: "National Service Personnel",
      logoUrl: "",
      start: "September 2021",
      end: "October 2022",
      description:
        "Developed a frontend form using vanilla JavaScript, JQuery, HTML and CSS for the Meqasa website to collect and validate client property specifications, including rental or purchase preferences (https://www.meqasa.com/inquire). Implemented data validation and integrated the form with the database for seamless data submission. Manually tested the Meqasa site in various browsers and mobile devices to ensure cross-browser compatibility and responsiveness.",
    },
   
  ],
  education: [
    {
      school: "Codetrain",
      href: "https://codetrainafrica.com/",
      degree: "Coding Bootcamp",
      logoUrl: "",
      start: "2021",
      end: "2022",
    },
    {
      school: "Ghana Communication Technology University",
      href: "https://site.gctu.edu.gh/",
      degree: "Bachelor's Degree of Information Technology (BCS)",
      logoUrl: "",
      start: "2017",
      end: "2021",
    },
    {
      school: "St. Augustine's College",
      href: "",
      degree: "High School Diploma",
      logoUrl: "",
      start: "2014",
      end: "2017",
    },
  ],
  projects: [
    {
      title: "Meqasa.com V2 (prototype)",
      href: "https://meqasa-kwame007s-projects.vercel.app/",
      dates: "Jan 2024 - Feb 2024",
      active: true,
      id:'1',
      description:
        "A redesign of the meqasa.com website to provide modern, user-friendly, and highly interactive platform for property seekers.",
      overview:"A redesign of the meqasa.com website to provide modern, user-friendly, and highly interactive platform for property seekers. The redesign of the meqasa.com website is aimed at creating an enhanced and intuitive experience for property seekers. The updated platform will feature a modern design, improved usability, and interactive elements that make browsing for properties easier, more enjoyable, and more efficient.",
      technologies: [
        "React",
        "Next.js",
        "Typescript",
        "JSON Server",
        "TailwindCSS",
        "Shadcn UI",
      ],
      features:[
        "User authentication",
        "Property search and filtering",
        "Property details page",
        "Dedicated agents and developer pages",
        "Dedicated dashboard page",
        "Property mortgage calculator",
        "Responsive design",
        "Interactive components",
        "Dynamic routing",
        "Form validation",
        "API integration",
      ],
      links: [
        {
          type: "Website",
          href: "https://meqasa-kwame007s-projects.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "View Details",
          href: "/projects/1",
          icon: <Icons.more className="size-3" />,
        },
      ],
      image: "/project-home.png",
      images: ["/mq-1.png","/mq-2.png","/mq-3.png","/mq-4.png","/mq-5.png","/mq-6.png","/mq-7.png"],
      video: ""
    },
    {
      title: "Bonsu Capital",
      href: "https://bonsucapital.com/",
      dates: "June 2023 - Present",
      active: false,
      id:'2',
      description:
        "Dan Bosh Limited is a startup Investment company with experience in investment management, Business Development and running of a series of Start-up ventures across various sectors.",
      overview:
        "Dan Bosh Limited is a startup Investment company with experience in investment management, Business Development and running of a series of Start-up ventures across various sectors. With a deep understanding of market trends and an ability to identify emerging opportunities, the company focuses on providing strategic investment solutions to drive long-term growth and value creation.",
      technologies: [
        "React",
        "Remix",
        "Typescript",
        "MongoDB",
        "Prisma",
        "TailwindCSS",
        "Paystack API",
        "Shadcn UI",
      ],
      features:[
        "User authentication",
        "Dedicated Client dashboard",
        "Withdrawal and deposit functionality",
        "Client profile page",
        "Performance chart",
        "Transaction and withdrawal history",
        "Responsive design",
        "Paystack API integration",
      ],
      links: [
        {
          type: "Website",
          href: "https://bonsucapital.com/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "View Details",
          href: "/projects/2",
          icon: <Icons.more className="size-3" />,
        },
        // {
        //   type: "Source",
        //   href: "https://github.com/magicuidesign/magicui",
        //   icon: <Icons.github className="size-3" />,
        // },
      ],
      image: "/bo-login.png",
      images: ["/bo-login.png","/bo-1.png","/bo-2.png","/bo-3.png","/bo-4.png","/bo-5.png","/bo-6.png","/bo-7.png"],
      video: ""
    },
    {
      title: "Unicorns 🎓",
      href: "https://unicorns-firebase.web.app/",
      dates: "April 2023 - September 2023",
      active: true,
      id:'3',
      description:
        "Unicorn is an innovative website that empowers students to share their experiences by writing reviews about their universities and courses.",
      technologies: [
        "JavaScript",
        "React",
        "Firebase",
        "React Router",
        "Typescript",
      ],
      links: [
        {
          type: "Website",
          href: "https://unicorns-firebase.web.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/dillionverma/llm.report",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/u-n.png",
      video: ""
    },
    {
      title: "World Wise",
      href: "https://automatic.chat",
      dates: "April 2023 - March 2024",
      active: true,
      id:'4',
      description:
        "A website dedicated to tracking your travel adventures can serve as both a personal journal and a way to connect with others who share your passion for exploration.",
      technologies: [
        "JavaScript",
        "React Router",
        "React Leaflet",
        "Html",
        "Css",
      ],
      links: [
        {
          type: "Website",
          href: "https://automatic.chat",
          icon: <Icons.globe className="size-3" />,
        },
        {
            type: "Source",
            href: "https://github.com/magicuidesign/magicui",
            icon: <Icons.github className="size-3" />,
          },
      ],
      image: "/w-ss.png",
      video:""
        // "https://pub-83c5db439b40468498f97946200806f7.r2.dev/automatic-chat.mp4",
    },
  ],
  hackathons: [
    {
      title: "Hack Western 5",
      dates: "November 23rd - 25th, 2018",
      location: "London, Ontario",
      description:
        "Developed a mobile application which delivered bedtime stories to children using augmented reality.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-western.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "HackDavis",
      dates: "January 20th - 21st, 2018",
      location: "Davis, California",
      description:
        "Developed a mobile application which allocates a daily carbon emission allowance to users to move towards a sustainable environment.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-davis.png",
      win: "Best Data Hack",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2018/white.svg",
      links: [
        {
          title: "Devpost",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://devpost.com/software/my6footprint",
        },
        {
          title: "ML",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Wallet6/my6footprint-machine-learning",
        },
        {
          title: "iOS",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Wallet6/CarbonWallet",
        },
        {
          title: "Server",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Wallet6/wallet6-server",
        },
      ],
    },
  ],
} as const;
