
const person = {
  firstName: "Eslam",
  lastName: "Hassanin",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "React Developer",
  avatar: "/images/avatar.jpg",
  email: "eslamwtf@gmail.com",
  location: "Egypt, Alexandria", // Display format (not used for time calculations)
  timeZone: "Africa/Cairo", // IANA time zone identifier for time calculations
  languages: ["English", "Arabic"], // optional: Leave the array empty if you don't want to display languages
};



const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/MalseBot",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/eslam-hegazi-6927751a1/",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Developing tomorrow's web experiences today</>,
  featured: {
    display: true,
    title: <>Recent project: <strong className="ml-4">Qwat</strong></>,
    href: "https://github.com/MalseBot/quat",
  },
  subline: (
    <>
      I'm Eslam, a React Developer, Turning ideas into interactive digital 
      <br/>experiences with React & Next.js.
    </>
  ),
};

const about = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com/malse-bot",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        a driven junior React developer skilled in building dynamic websites 
        using React, Next.js, and Tailwind CSS. leverage powerful tools to
         craft innovative, high-performance solutions that resonate with users.
          Eager to sharpen my skills and embrace new challenges, thrive on
           solving complex problems and pushing boundaries in the digital realm.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Projects",
    experiences: [
      {
        company: "QWAT",
        timeframe: "Feb 2025 – June 2025",
        achievements: [
          <>
            Optimized soldier data management, reducing retrieval time by 
            40% through efficient structuring and performance improvements.
          </>,
          <>
            Enhanced user experience with an intuitive dashboard design, 
            increasing usability and satisfaction for military personnel.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/project-01/cover-01.jpg",
            alt: "QWAT Project",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "YC Directory",
        timeframe: "Oct 2024 – Dec 2024",
        achievements: [
          <>
            Developed a dynamic startup pitch platform using Next.js and Sanity, 
            integrating authentication and automated posting for seamless content management.
          </>,
          <>
            Optimized performance, reducing page load times by 90% compared to previous methods,
             enhancing speed and user experience.
          </>,
        ],
        images: [],
      },
      {
        company: "Snapgram",
        timeframe: "March 2024 – June 2024",
        achievements: [
          <>
            Developed an Instagram-inspired social media platform, integrating
             modern features like unlimited scrolling for an immersive user experience.
          </>,
          <>
            Designed a responsive UI using React, Tailwind, and Vite, ensuring 
            seamless cross-device compatibility and boosting user engagement by 30%.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "University of Alexandria",
        description: <>Studied Marketing management.</>,
      },
      {
        name: "Center for research & commercial studies",
        description: <>Front-end Development</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "JavaScript | Typescript",
        description: <>ensuring type safety and maintainability using JavaScript and Typescript.</>,
        // optional: leave the array empty if you don't want to display images
        images: [],
      },
      {
        title: "React | Next.js",
        description: <>Building next gen apps with Next.js and React.js</>,
        // optional: leave the array empty if you don't want to display images
        images: [],
      },
      {
        title: "Tailwind | shadcn",
        description: <>streamline UI development, enabling responsive, stylish,
        and customizable components effortlessly.</>,
        // optional: leave the array empty if you don't want to display images
        images: [],
      },
    ],
  },
};

const work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};


export { person, social, home, about, work };
