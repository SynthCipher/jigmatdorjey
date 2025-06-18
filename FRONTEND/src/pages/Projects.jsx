import { useState, useEffect } from "react";
import {
  ExternalLink,
  Github,
  ArrowLeft,
  Notebook,
  NotebookIcon,
  Ban,
  CodeIcon,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { projects } from "../assets/assets"; // Import projects from assets file
import Footer from "../components/Footer";

export default function Projects() {
  const navigate = useNavigate();
  const [filter, setFilter] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [animatedProjects, setAnimatedProjects] = useState([]);

  // Categories derived from project data
  const categories = [
    "All",
    ...new Set(projects.map((project) => project.category)),
  ];

  // Filter projects based on category and search term
  const filteredProjects = projects.filter((project) => {
    const matchesCategory = filter === "All" || project.category === filter;
    const matchesSearch =
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.technologies.some((tech) =>
        tech.toLowerCase().includes(searchTerm.toLowerCase())
      );
    return matchesCategory && matchesSearch;
  });

  // Animation effect for projects appearing
  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedProjects(filteredProjects);
    }, 100);
    return () => clearTimeout(timer);
  }, [filteredProjects]);

  return (
    <>
      <div className="min-h-screen  bg-gray-50 pt-24 py-12 px-4">
        <div className="container mx-auto max-w-7xl">
          {/* Header with back button */}
          <div className="flex items-center mb-8">
            <button
              onClick={() => navigate("/")}
              className="flex items-center text-gray-600 hover:text-gray-900 mr-4"
            >
              <ArrowLeft size={20} className="mr-1" /> Back
            </button>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
              My Projects
            </h1>
          </div>

          {/* Filters and Search */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setFilter(category)}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                    filter === category
                      ? "bg-gray-800 text-white"
                      : "bg-white text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            <div className="w-full md:w-auto">
              <input
                type="text"
                placeholder="Search projects..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full md:w-64 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
              />
            </div>
          </div>

          {/* Projects Grid */}
          {filteredProjects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {animatedProjects.slice(0,5).map((project, index) => (
                <div
                  key={project.id}
                  className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 opacity-0 animate-fadeIn"
                  style={{
                    animationDelay: `${index * 100}ms`,
                    animationFillMode: "forwards",
                  }}
                >
                  {project.image === null ? (
                    <div className="w-full h-64 flex flex-col items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
                      <div className="w-16 h-16 flex items-center justify-center rounded-full bg-white shadow-sm mb-4">
                        {project.icon || (
                          <CodeIcon size={32} className="text-blue-500" />
                        )}
                      </div>
                      <h3 className="text-lg font-medium text-gray-700">
                        {project.title}
                      </h3>
                      <div className="mt-2 flex flex-wrap gap-1 justify-center px-4">
                        {project.technologies.slice(0, 3).map((tech, i) => (
                          <span
                            key={i}
                            className="px-2 py-1 bg-white text-xs text-gray-600 rounded-full shadow-sm"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-64 object-cover"
                    />
                  )}
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-bold text-gray-800">
                        {project.title}
                      </h3>
                      <span className="px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                        {project.category}
                      </span>
                    </div>
                    <p className="text-gray-500 mb-4 line-clamp-3">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
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
          ) : (
            <div className="text-center py-16">
              <p className="text-gray-500 text-xl">
                No projects found matching your criteria.
              </p>
              <button
                onClick={() => {
                  setFilter("All");
                  setSearchTerm("");
                }}
                className="mt-4 px-6 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-700"
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
