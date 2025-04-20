import { useState, useEffect, useContext } from "react";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaNodeJs,
  FaGitAlt,
  FaDatabase,
  FaFire,
} from "react-icons/fa";
import {
  SiTypescript,
  SiTailwindcss,
  SiRedux,
  SiExpress,
  SiMongodb,
  SiFigma,
} from "react-icons/si";
import { BiLogoVisualStudio } from "react-icons/bi";
import { toast } from "react-toastify";
import { TbSql } from "react-icons/tb";
import {
  Code,
  Briefcase,
  Sparkles,
  FileText,
  Send,
  ExternalLink,
  Github,
  ArrowDown,
} from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { assets } from "../assets/assets";
import axios from "axios";
import { projects, blogPosts } from "../assets/assets";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const Home = () => {
  // For animation on scroll
  const [isVisible, setIsVisible] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible((prev) => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting,
          }));
        });
      },
      { threshold: 0.1 }
    );

    const sections = document.querySelectorAll("section");
    sections.forEach((section) => {
      observer.observe(section);
    });

    // const sendEmail = async () => {

    // }

    // Fix scrolling behavior for anchor links
    const fixScrolling = () => {
      document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener("click", function (e) {
          e.preventDefault();

          const targetId = this.getAttribute("href").substring(1);
          const targetElement = document.getElementById(targetId);

          if (targetElement) {
            // Get navbar height
            const navbar = document.querySelector("nav");
            const navbarHeight = navbar ? navbar.offsetHeight : 0;

            // Calculate position with offset
            const targetPosition =
              targetElement.getBoundingClientRect().top +
              window.pageYOffset -
              navbarHeight -
              20;

            window.scrollTo({
              top: targetPosition,
              behavior: "smooth",
            });
          }
        });
      });
    };

    fixScrolling();

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  const [activeFilter, setActiveFilter] = useState("All");

  const techStack = [
    {
      name: "React",
      logo: <FaReact className="text-blue-500 text-4xl" />,
      category: "Frontend",
    },
    {
      name: "HTML5",
      logo: <FaHtml5 className="text-orange-600 text-4xl" />,
      category: "Frontend",
    },
    {
      name: "CSS3",
      logo: <FaCss3Alt className="text-blue-600 text-4xl" />,
      category: "Frontend",
    },
    {
      name: "JavaScript",
      logo: <FaJs className="text-yellow-400 text-4xl" />,
      category: "Frontend",
    },
    {
      name: "Tailwind CSS",
      logo: <SiTailwindcss className="text-cyan-400 text-4xl" />,
      category: "Frontend",
    },
    // {
    //   name: "Redux",
    //   logo: <SiRedux className="text-purple-600 text-4xl" />,
    //   category: "Frontend",
    // },
    {
      name: "Node.js",
      logo: <FaNodeJs className="text-green-600 text-4xl" />,
      category: "Backend",
    },
    {
      name: "Express",
      logo: <SiExpress className="text-gray-800 text-4xl" />,
      category: "Backend",
    },
    {
      name: "MongoDB",
      logo: <SiMongodb className="text-green-500 text-4xl" />,
      category: "Database",
    },
    {
      name: "Firebase",
      logo: <FaFire className="text-yellow-500 text-4xl" />,
      category: "Database",
    },
    {
      name: "SQL",
      logo: <TbSql className="text-blue-400 text-4xl" />,
      category: "Database",
    },
    {
      name: "Git",
      logo: <FaGitAlt className="text-red-500 text-4xl" />,
      category: "Tools",
    },
    {
      name: "Figma",
      logo: <SiFigma className="text-purple-500 text-4xl" />,
      category: "Tools",
    },
    {
      name: "VS Code",
      logo: <BiLogoVisualStudio className="text-blue-500 text-4xl" />,
      category: "Tools",
    },
  ];

  const categories = ["All", "Frontend", "Backend", "Database", "Tools"];

  const filteredTech =
    activeFilter === "All"
      ? techStack
      : techStack.filter((tech) => tech.category === activeFilter);

  const { backendUrl } = useContext(AppContext);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { data } = await axios.post(
        `${backendUrl}/api/send`,
        {
          email: formData.email,
          name: formData.name,
          subject: formData.subject,
          message: formData.message,
        },
        {
          withCredentials: true, // Only set for this specific request
        }
      );

      if (data.success) {
        toast.success(data.message);
        setSubmitMessage("Thank you! Your message has been sent successfully.");
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });

        // Clear success message after 5 seconds
        setTimeout(() => {
          setSubmitMessage("");
        }, 2000);
        scrollTo(0, 0);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          error.message ||
          "Failed to send message"
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white">
      {/* <Navbar /> */}

      {/* Hero Section */}
      <section
        id="home"
        className="h-screen flex items-center justify-center pt-16 md:mx-[10%]"
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-5xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-800">
                Hi, I'm{" "}
                <span className="text-gray-800 border-b-2 border-gray-800">
                  Jigmat
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-500 mb-8">
                Full Stack Developer passionate about creating intuitive and
                impactful web experiences.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="#contact"
                  className="px-6 py-3 bg-gray-800 text-white rounded-md hover:bg-gray-500 transition-colors duration-300"
                >
                  Get in Touch
                </a>
                <a
                  href="#projects"
                  className="px-6 py-3 border border-gray-800 text-gray-800 rounded-md hover:bg-gray-800 hover:text-white transition-colors duration-300"
                >
                  View Projects
                </a>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-gray-200">
                <img
                  src={assets.myImage1}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-16">
            <a href="#about" className="animate-bounce">
              <ArrowDown size={32} className="text-gray-500" />
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className={`py-16 bg-gray-50 transition-colors duration-300 ${
          isVisible["about"] ? "animate-fadeIn" : "opacity-0"
        }`}
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-800">
            About Me
          </h2>
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <img
                src={assets.myImage2}
                alt="About Me"
                className="rounded-lg shadow-sm"
              />
            </div>
            <div className="md:w-1/2 md:pl-12">
              <p className="text-lg text-gray-500 mb-6">
                Hello! I'm an aspiring Full Stack Developer with around 6 months
                of experience in building web applications. I focus on both
                frontend and backend technologies, and I'm passionate about
                creating efficient and user-friendly digital experiences.
              </p>
              <p className="text-lg text-gray-500 mb-6">
                I graduated from Andhra University, where I began exploring web
                development during my 2nd year. Since then, I’ve been learning
                and building projects to strengthen my skills and understanding
                of the field.
              </p>
              <p className="text-lg text-gray-500 mb-6">
                Outside of coding, I enjoy spending time outdoors, exploring new
                tech tools, and constantly picking up new things to improve my
                development journey.
              </p>

              <a
                href="#contact"
                className="inline-flex items-center px-6 py-3 bg-gray-800 text-white rounded-md hover:bg-gray-700 transition-colors duration-300"
              >
                Let's Connect <Send size={18} className="ml-2" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className={`py-16 transition-colors duration-300 ${
          isVisible["projects"] ? "animate-fadeIn" : "opacity-0"
        }`}
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-800">
            Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.slice(0, 3).map((project) => (
              <div
                key={project.id}
                className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-gray-800">
                    {project.title}
                  </h3>
                  <p className="text-gray-500 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-4">
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-gray-800 hover:underline"
                    >
                      <ExternalLink size={16} className="mr-1" /> Live Demo
                    </a>
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-gray-500 hover:text-gray-800 hover:underline"
                    >
                      <Github size={16} className="mr-1" /> Code
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <a
              onClick={() => {
                navigate("/projects");
                setTimeout(() => {
                  window.scrollTo({
                    top: 0,
                    behavior: "smooth",
                  });
                }, 100);
              }}
              className="inline-flex cursor-pointer items-center px-6 py-3 bg-gray-800 text-white rounded-md hover:bg-gray-700 transition-colors duration-300"
            >
              View More Projects <Github size={18} className="ml-2" />
            </a>
          </div>
        </div>
      </section>

      {/* Tech Stack Section - Redesigned with Logos */}
      <section
        id="tech-stack"
        className={`py-16 bg-gray-50 transition-colors duration-300 ${
          isVisible["tech-stack"] ? "animate-fadeIn" : "opacity-0"
        }`}
      >
        <div className="py-16 px-4 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
              Tech Stack
            </h2>

            {/* Filter tabs */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveFilter(category)}
                  className={`px-6 py-2 cursor-pointer rounded-full text-sm font-medium transition-all ${
                    activeFilter === category
                      ? "bg-blue-600 text-white shadow-md"
                      : "bg-white text-gray-600 hover:bg-gray-100"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Tech icons grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
              {filteredTech.map((tech, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="mb-4">{tech.logo}</div>
                  <h3 className="font-medium text-lg text-gray-800 mb-1">
                    {tech.name}
                  </h3>
                  <span className="text-xs px-3 py-1 bg-gray-100 rounded-full text-gray-600">
                    {tech.category}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section
        id="blog"
        className={`py-16 transition-colors duration-300 ${
          isVisible["blog"] ? "animate-fadeIn" : "opacity-0"
        }`}
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-800">
            <span className="flex items-center justify-center">
              <FileText size={32} className="mr-2" /> Blog
            </span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(0, 3).map((post) => (
              <div
                key={post.id}
                className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300"
              >
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <p className="text-sm text-gray-500 mb-2">{post.date}</p>
                  <h3 className="text-xl font-bold mb-2 text-gray-800">
                    {post.title}
                  </h3>
                  <p className="text-gray-500 mb-4">{post.excerpt}</p>
                  <a
                    // href={post.url}
                    onClick={() => {
                      navigate(`/blog`);
                      scrollTo(0, 0);
                    }}
                    className="inline-flex items-center text-gray-800 hover:underline"
                  >
                    Read More <ExternalLink size={16} className="ml-1" />
                  </a>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <button
              onClick={() => navigate("/blog")}
              className="inline-flex items-center cursor-pointer px-6 py-3 bg-gray-800 text-white rounded-md hover:bg-gray-700 transition-colors duration-300"
            >
              View All Posts <ExternalLink size={18} className="ml-2" />
            </button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className={`py-16 bg-gray-50 transition-colors duration-300 ${
          isVisible["contact"] ? "animate-fadeIn" : "opacity-0"
        }`}
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-800">
            <span className="flex items-center justify-center">
              <Send size={32} className="mr-2" /> Get In Touch
            </span>
          </h2>
          <div className="max-w-3xl mx-auto">
            <form
              className="bg-white rounded-lg shadow-sm border border-gray-100 p-8"
              onSubmit={handleSubmit}
            >
              {submitMessage && (
                <div className="mb-6 p-4 bg-green-100 text-green-700 rounded-md">
                  {submitMessage}
                </div>
              )}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block mb-2 text-sm font-medium text-gray-700"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-800 text-gray-800"
                    placeholder="Your name"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-700"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-800 text-gray-800"
                    placeholder="Your email"
                    required
                  />
                </div>
              </div>
              <div className="mb-6">
                <label
                  htmlFor="subject"
                  className="block mb-2 text-sm font-medium text-gray-700"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-800 text-gray-800"
                  placeholder="Subject"
                  required
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="block mb-2 text-sm font-medium text-gray-700"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  className="w-full px-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-800 text-gray-800"
                  placeholder="Your message"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full px-6 py-3 cursor-pointer bg-gray-800 text-white rounded-md ${
                  isSubmitting ? "opacity-70" : "hover:bg-gray-700"
                } focus:outline-none focus:ring-1 focus:ring-gray-800 transition-colors duration-300`}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </section>
      {/* <Footer /> */}
    </div>
  );
};

export default Home;
