import myImage1 from "./my1.JPG";
import myImage2 from "./my2.jpg";
import logo from "./logo.png";
import iceStupaProject from "./icesStupa.png";
import laCrypt from "./lacrypt.png";
import kharnak from "./kharnak.png";

import blog1 from "./blog1.png";
import blog2 from "./blog2.png";

import blog4 from "./blog4.png";
import blog7 from "./blog7.png";
import blog11 from "./blog11.png";
import blog21 from "./blog21.png";

import blog41 from "./blog41.png";
import blog71 from "./blog71.png";
import myCV from "./jigmatdorjeyCV.pdf";
import zomsa from "./zomsa.png";
export const assets = {
  myImage1,
  logo,
  iceStupaProject,
  laCrypt,
  kharnak,
  myImage2,
  myCV,
  zomsa
};

// Example projects data
export const projects = [
  {
    id: 1,
    title: "Ice Stupa Automation System",
    description:
      "An IoT-based dashboard system designed to monitor and automate the formation of ice stupas. The platform provides real-time data on temperature, water flow, and ice growth to optimize artificial glacier creation for sustainable water conservation in cold desert regions.",
    image: assets.iceStupaProject, // Replace with actual asset
    technologies: [
      "IoT",
      "Node.js",
      "React",
      "MongoDB",
      "Express",
      "Sensor Integration",
    ],
    liveLink: "https://ice-stupa-dashboard.vercel.app/",
    githubLink: "https://github.com/SynthCipher/ICE-STUPA-DASHBOARD",
  },

  {
    id: 2,
    title: "LACRYPT",
    description:
      "A crypto price tracker tailored for the Ladakhi community. LACRYPT brings real-time cryptocurrency updates in a clean and simple interface, making it easy for locals to stay informed about market trends, even with low bandwidth.",
    image: assets.laCrypt, // Swap this with your real image path
    technologies: ["React", "CoinGecko API", "Tailwind CSS", "Chart.js"],
    liveLink: "https://ladalkhi-coin-crypt.vercel.app/",
    githubLink: "https://github.com/SynthCipher/LACRYPT",
  },
  {
    id: 3,
    title: "Kharnak",
    description:
      "A dedicated informational webpage about Kharnak Village in Ladakh, designed for travelers, researchers, and culture enthusiasts. It highlights the nomadic lifestyle, geography, history, and unique traditions of the Kharnakpa people through clean design, interactive maps, and smooth animations.",
    image: assets.kharnak, // Replace with a real image of Kharnak if you have one
    technologies: ["HTML", "CSS", "JavaScript"],
    liveLink: "https://kharnak-jigmatdorjey-jigmatdorjeys-projects.vercel.app/",
    githubLink: "https://github.com/SynthCipher/kharnak",
  },
  {
    id: 4,
    title: "ZOMSA",
    description:
      "ZOMSA is a community platform designed for Ladakhi people to stay connected across remote areas. It includes features like real-time chat, group messaging, and secure video calls. Built with accessibility in mind, ZOMSA supports low-bandwidth communication and integrates culturally relevant UI elements inspired by Ladakhi aesthetics. Ideal for nomadic communities like those in Kharnak, ZOMSA helps preserve social bonds and cultural exchange despite geographic distances.",
    image: assets.zomsa, // Replace with a screenshot or logo of the app
    technologies: [
      "React",
      "Zustand",
      "Stream Chat",
      "Tailwind CSS",
      "TanStack Query",
    ],
    liveLink: "https://zomsa.vercel.app/",
    githubLink: "https://github.com/SynthCipher/zomsa",
  },
  // {
  //   id: 5,
  //   title: "DevConnect",
  //   description:
  //     "A social platform for developers to share projects, blogs, and connect with others in the tech community.",
  //   image: null,
  //   technologies: ["Next.js", "MongoDB", "Socket.io", "Chakra UI"],
  //   liveLink: "#",
  //   githubLink: "#",
  // },
  // {
  //   id: 6,
  //   title: "ShopEase",
  //   description:
  //     "A modern e-commerce site with product search, shopping cart, payment integration, and order tracking.",
  //   image: null,
  //   technologies: ["React", "Node.js", "Express", "Stripe API", "MongoDB"],
  //   liveLink: "#",
  //   githubLink: "#",
  // },
  // {
  //   id: 7,
  //   title: "EduPlatform",
  //   description:
  //     "An online learning platform with video courses, quizzes, and progress tracking for students.",
  //   image: null,
  //   technologies: ["Vue.js", "Firebase", "Vuetify"],
  //   liveLink: "#",
  //   githubLink: "#",
  // },
  // {
  //   id: 8,
  //   title: "Weatherly",
  //   description:
  //     "A weather dashboard providing real-time weather updates, forecasts, and interactive weather maps.",
  //   image: null,
  //   technologies: ["React", "OpenWeatherMap API", "Styled Components"],
  //   liveLink: "#",
  //   githubLink: "#",
  // },
  // {
  //   id: 9,
  //   title: "MediaStream",
  //   description:
  //     "A video streaming platform with user authentication, playlists, and recommendations.",
  //   image: null,
  //   technologies: ["Next.js", "Node.js", "MongoDB", "JWT"],
  //   liveLink: "#",
  //   githubLink: "#",
  // },
  // {
  //   id: 10,
  //   title: "FitTrack",
  //   description:
  //     "A fitness tracker web app for logging workouts, tracking progress, and setting goals.",
  //   image: null,
  //   technologies: ["React", "Redux", "Chart.js", "Firebase"],
  //   liveLink: "#",
  //   githubLink: "#",
  // },
  // {
  //   id: 11,
  //   title: "Recipe Explorer",
  //   description:
  //     "Discover, filter, and save recipes with nutritional info and step-by-step instructions.",
  //   image: null,
  //   technologies: ["Vue.js", "Node.js", "MongoDB"],
  //   liveLink: "#",
  //   githubLink: "#",
  // },
  // {
  //   id: 12,
  //   title: "Portfolio Generator",
  //   description:
  //     "Generate and customize your own developer portfolio website with live preview.",
  //   image: null,
  //   technologies: ["Next.js", "Chakra UI", "Vercel"],
  //   liveLink: "#",
  //   githubLink: "#",
  // },
  // {
  //   id: 13,
  //   title: "Realtime Chat App",
  //   description:
  //     "A real-time chat application with group chats, emojis, and notifications.",
  //   image: null,
  //   technologies: ["React", "Socket.io", "Node.js", "MongoDB"],
  //   liveLink: "#",
  //   githubLink: "#",
  // },
  // {
  //   id: 14,
  //   title: "DataDash",
  //   description:
  //     "A data visualization dashboard with interactive charts and exportable reports.",
  //   image: null,
  //   technologies: ["React", "D3.js", "Chart.js", "Tailwind CSS"],
  //   liveLink: "#",
  //   githubLink: "#",
  // },
  // {
  //   id: 15,
  //   title: "GeoLocator",
  //   description:
  //     "A location-based service app with interactive maps and geofencing features.",
  //   image: null,
  //   technologies: ["React", "Leaflet", "OpenStreetMap API"],
  //   liveLink: "#",
  //   githubLink: "#",
  // },
  // {
  //   id: 16,
  //   title: "SecureAuth",
  //   description:
  //     "A secure authentication system with 2FA, OAuth, and role-based access control.",
  //   image: null,
  //   technologies: ["Next.js", "JWT", "OAuth", "MongoDB"],
  //   liveLink: "#",
  //   githubLink: "#",
  // },
  // {
  //   id: 17,
  //   title: "Cloud Notes",
  //   description:
  //     "A cloud-based note-taking app with markdown support and real-time sync.",
  //   image: null,
  //   technologies: ["React", "Firebase", "Redux", "Tailwind CSS"],
  //   liveLink: "#",
  //   githubLink: "#",
  // },
  // {
  //   id: 18,
  //   title: "MusicBox",
  //   description:
  //     "A music streaming web app with playlists, recommendations, and audio visualizations.",
  //   image: null,
  //   technologies: ["React", "Node.js", "Express", "MongoDB"],
  //   liveLink: "#",
  //   githubLink: "#",
  // },
  // {
  //   id: 19,
  //   title: "Blogify",
  //   description:
  //     "A blogging platform with markdown editor, comments, and tags.",
  //   image: null,
  //   technologies: ["Next.js", "MongoDB", "Chakra UI"],
  //   liveLink: "#",
  //   githubLink: "#",
  // },
  // {
  //   id: 20,
  //   title: "API Explorer",
  //   description:
  //     "A tool for testing and documenting REST APIs with live requests and responses.",
  //   image: null,
  //   technologies: ["React", "Node.js", "Express", "Swagger"],
  //   liveLink: "#",
  //   githubLink: "#",
  // },
];

// Blog posts data
export const blogPosts = [
  {
    id: 1,
    title: "Building Responsive UIs with Tailwind CSS",
    excerpt:
      "Learn how to create beautiful, responsive user interfaces quickly using Tailwind CSS utility classes.",
    date: "April 10, 2025",
    image: blog1,
    category: "Frontend",
    tags: ["Tailwind CSS", "Responsive Design", "CSS"],
    readingTime: 6,
    content: [
      {
        type: "paragraph",
        text: "Tailwind CSS has revolutionized the way developers approach UI design. Instead of writing custom CSS, Tailwind provides utility classes that can be composed to build any design directly in your markup.",
      },
      {
        type: "heading",
        text: "Why Choose Tailwind CSS?",
      },
      {
        type: "paragraph",
        text: "The utility-first approach of Tailwind CSS offers several advantages. It eliminates the need to write custom CSS, reduces context switching, and makes your codebase more maintainable. With Tailwind, you can quickly prototype and iterate on designs without leaving your HTML.",
      },
      {
        type: "image",
        src: blog11,
        alt: "Tailwind CSS Example",
        caption: "A responsive card component built with Tailwind CSS",
      },
      {
        type: "heading",
        text: "Getting Started",
      },
      {
        type: "paragraph",
        text: "To start using Tailwind CSS in your project, you'll need to install it via npm or yarn. Once installed, you can configure it using a tailwind.config.js file to customize colors, spacing, breakpoints, and more.",
      },
      {
        type: "code",
        text: "npm install tailwindcss\nnpx tailwindcss init",
      },
      {
        type: "heading",
        text: "Responsive Design with Tailwind",
      },
      {
        type: "paragraph",
        text: "Tailwind makes responsive design incredibly intuitive with its mobile-first breakpoint system. Simply prefix utility classes with screen sizes (sm:, md:, lg:, xl:) to apply them at specific breakpoints.",
      },
      {
        type: "list",
        items: [
          "Use no prefix for mobile (default)",
          "sm: for small screens (640px and up)",
          "md: for medium screens (768px and up)",
          "lg: for large screens (1024px and up)",
          "xl: for extra large screens (1280px and up)",
        ],
      },
    ],
  },
  {
    id: 2,
    title: "State Management in React: Context API vs. Redux",
    excerpt:
      "A comparative analysis of different state management approaches in React applications.",
    date: "March 25, 2025",
    image: blog2,
    category: "React",
    tags: ["State Management", "React", "Redux", "Context API"],
    readingTime: 8,
    content: [
      {
        type: "paragraph",
        text: "Effective state management is crucial for building complex React applications. While React's built-in useState hook works well for component-level state, managing application-wide state requires more sophisticated solutions.",
      },
      {
        type: "heading",
        text: "Context API: React's Built-in Solution",
      },
      {
        type: "paragraph",
        text: "React's Context API provides a way to share state across the component tree without prop drilling. It's relatively simple to set up and is built directly into React.",
      },
      {
        type: "code",
        text: "const ThemeContext = React.createContext();\n\nfunction App() {\n  const [theme, setTheme] = useState('light');\n  return (\n    <ThemeContext.Provider value={{ theme, setTheme }}>\n      <MainComponent />\n    </ThemeContext.Provider>\n  );\n}",
      },
      {
        type: "heading",
        text: "Redux: The Industry Standard",
      },
      {
        type: "paragraph",
        text: "Redux offers a more structured approach to state management with a single store, actions, and reducers. It provides powerful debugging tools and middleware support for handling side effects.",
      },
      {
        type: "image",
        src: blog21,
        alt: "Redux Flow Diagram",
        caption: "The unidirectional data flow in Redux",
      },
      {
        type: "heading",
        text: "When to Use Each Approach",
      },
      {
        type: "list",
        items: [
          "Use Context API for simpler applications or when sharing a few values",
          "Choose Redux for complex state logic, middleware requirements, or team scalability",
          "Consider hybrid approaches for different parts of your application",
          "Evaluate other alternatives like Zustand, Jotai, or Recoil for specific use cases",
        ],
      },
    ],
  },

  {
    id: 4,
    title: "Mastering CSS Grid Layout for Modern Web Design",
    excerpt:
      "Discover how to create complex, responsive layouts with CSS Grid that were previously impossible without JavaScript or complex hacks.",
    date: "February 18, 2025",
    image: blog4,
    category: "Frontend",
    tags: ["CSS", "Layout", "Web Design"],
    readingTime: 9,
    content: [
      {
        type: "paragraph",
        text: "CSS Grid Layout has transformed how we build layouts for the web. It provides a two-dimensional system that lets you arrange elements in rows and columns, making complex layouts possible with clean, semantic HTML.",
      },
      {
        type: "heading",
        text: "Grid Fundamentals",
      },
      {
        type: "paragraph",
        text: "At its core, CSS Grid requires a container element with 'display: grid' and child elements that become grid items automatically. You can define rows and columns using grid-template-rows and grid-template-columns properties.",
      },
      {
        type: "code",
        text: ".grid-container {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  grid-template-rows: auto;\n  gap: 20px;\n}",
      },
      {
        type: "image",
        src: blog41,
        alt: "CSS Grid Layout Example",
        caption: "A responsive grid layout with varying column sizes",
      },
      {
        type: "heading",
        text: "Advanced Grid Techniques",
      },
      {
        type: "paragraph",
        text: "CSS Grid really shines when creating asymmetrical layouts. You can span items across multiple rows and columns using grid-column and grid-row properties, and even create named grid areas for more intuitive placement.",
      },
      {
        type: "list",
        items: [
          "fr units for flexible sizing",
          "minmax() function for responsive columns",
          "auto-fit and auto-fill for automatic item placement",
          "grid-template-areas for named grid sections",
          "Combining Grid with Flexbox for perfect layouts",
        ],
      },
      {
        type: "paragraph",
        text: "With browser support now nearly universal, CSS Grid should be a fundamental tool in every front-end developer's toolkit.",
      },
    ],
  },

  {
    id: 7,
    title: "Optimizing React Performance: Advanced Techniques",
    excerpt:
      "Take your React applications to the next level with performance optimization strategies beyond the basics.",
    date: "March 20, 2025",
    image: blog7,
    category: "React",
    tags: ["Performance", "Optimization", "React"],
    readingTime: 10,
    content: [
      {
        type: "paragraph",
        text: "As React applications grow in complexity, performance optimization becomes increasingly important. While React is generally fast out of the box, there are many techniques you can apply to make your applications even faster.",
      },
      {
        type: "heading",
        text: "Profiling Your Application",
      },
      {
        type: "paragraph",
        text: "Before optimizing, you need to identify performance bottlenecks. React DevTools includes a Profiler that lets you record rendering performance and identify components that could benefit from optimization.",
      },
      {
        type: "image",
        src: blog71,
        alt: "React Profiler Screenshot",
        caption: "Using React DevTools Profiler to identify performance issues",
      },
      {
        type: "heading",
        text: "Memoization Techniques",
      },
      {
        type: "paragraph",
        text: "React provides several hooks and components for memoization, which prevents unnecessary re-renders by caching results based on inputs.",
      },
      {
        type: "code",
        text: "// Using React.memo to prevent re-renders when props haven't changed\nconst MovieCard = React.memo(function MovieCard({ title, poster, rating }) {\n  // Component implementation\n});\n\n// Using useMemo to cache expensive calculations\nfunction MovieList({ movies, filterTerm }) {\n  const filteredMovies = useMemo(() => {\n    return movies.filter(movie => \n      movie.title.toLowerCase().includes(filterTerm.toLowerCase())\n    );\n  }, [movies, filterTerm]);\n  \n  // Render filtered movies\n}",
      },
      {
        type: "heading",
        text: "Code Splitting and Lazy Loading",
      },
      {
        type: "paragraph",
        text: "Large React applications benefit from splitting code into smaller chunks that can be loaded on demand. React.lazy and Suspense make this straightforward to implement.",
      },
      {
        type: "code",
        text: "// Code splitting with React.lazy\nconst Dashboard = React.lazy(() => import('./Dashboard'));\n\nfunction App() {\n  return (\n    <Suspense fallback={<LoadingSpinner />}>\n      <Dashboard />\n    </Suspense>\n  );\n}",
      },
      {
        type: "list",
        items: [
          "Virtual scrolling for long lists (react-window, react-virtualized)",
          "Using Web Workers for CPU-intensive tasks",
          "Implementing throttling and debouncing for frequent events",
          "Optimizing Context API usage to prevent unnecessary re-renders",
          "Server-side rendering or static generation for initial load performance",
        ],
      },
    ],
  },
];
