import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { assets } from "../assets/assets";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("home");
  const navigate = useNavigate();
  const location = useLocation();

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Set active link based on scroll position - only when on home page
  useEffect(() => {
    if (location.pathname === "/") {
      const handleScroll = () => {
        const sections = navLinks.map((link) => link.hash);
        
        let current = "";
        for (const section of sections) {
          const element = document.getElementById(section);
          if (element) {
            const rect = element.getBoundingClientRect();
            if (rect.top <= 100) {
              current = section;
            }
          }
        }
        
        if (current) {
          setActiveLink(current);
        }
      };

      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, [location.pathname]);

  // Update active link based on URL hash when location changes
  useEffect(() => {
    if (location.hash) {
      const hash = location.hash.substring(1);
      setActiveLink(hash);
    } else if (location.pathname === "/") {
      setActiveLink("home");
    }
  }, [location]);

  // Navigation links with structured data
  const navLinks = [
    { name: "Home", path: "/", hash: "home" },
    { name: "About", path: "/", hash: "about" },
    { name: "Projects", path: "/", hash: "projects" },
    { name: "Tech Stack", path: "/", hash: "tech-stack" },
    { name: "Blog", path: "/", hash: "blog" },
    { name: "Contact", path: "/", hash: "contact" },
  ];

  // Handle navigation with proper hash scrolling
  const handleNavigation = (link) => {
    const isCurrentPath = location.pathname === link.path;
    
    if (isCurrentPath) {
      // If we're already on the target page, just scroll to the section
      const element = document.getElementById(link.hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // Navigate to the page first, then scroll to section after page loads
      navigate(link.path);
      
      // Wait for navigation to complete before scrolling
      setTimeout(() => {
        const element = document.getElementById(link.hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
    
    setActiveLink(link.hash);
    if (isMenuOpen) {
      toggleMenu();
    }
  };

  // Set navbar height
  const navbarHeight = "64px"; // You can adjust this value

  return (
    <nav 
      className="fixed top-0 left-0 w-full bg-white shadow-sm z-50 transition-all duration-300" 
      style={{ height: navbarHeight }}
    >
      <div className="container mx-auto pl-5 md:pl-10 px-4 flex justify-between items-center h-full z-50">
        <Link 
          to="/" 
          onClick={() => {
            setTimeout(() => {
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              });
            }, 100);
          }} 
          className="flex items-center h-full pt-2"
        >
          <img
            src={assets.logo}
            alt="Logo"
            className="h-full w-auto object-contain"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center h-full">
          <ul className="flex h-full">
            {navLinks.map((link) => {
              const isActive = activeLink === link.hash;
              
              return (
                <li key={link.name} className="flex items-center h-full ">
                  <button
                    onClick={() => handleNavigation(link)}
                    className={`px-5 h-full flex items-center relative cursor-pointer font-medium text-sm transition-all duration-300 ${
                      isActive 
                        ? "text-gray-800" 
                        : "text-gray-500 hover:text-gray-800"
                    }`}
                  >
                    {link.name}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gray-800 rounded-full"></span>
                    )}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Mobile Navigation Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="p-1 rounded-md text-gray-500 hover:text-gray-800 transition-colors duration-300 cursor-pointer"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <ul className="py-2">
            {navLinks.map((link) => {
              const isActive = activeLink === link.hash;
              
              return (
                <li key={link.name}>
                  <button
                    onClick={() => handleNavigation(link)}
                    className={`block w-full cursor-pointer text-left px-4 py-3 ${
                      isActive 
                        ? "text-gray-800 bg-gray-50 border-l-2 border-gray-800" 
                        : "text-gray-500 hover:text-gray-800 hover:bg-gray-50"
                    }`}
                  >
                    {link.name}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;